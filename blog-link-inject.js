/* MOJAF blog link injector – robust version for React/SPA */
(function () {
  const BLOG_HREF = "/blog.html";
  const LINK_TEXT = "Blog";
  const CANDIDATE_SELECTORS = [
    "header", "nav", ".navbar", ".nav", ".header",
    "footer", ".footer",
    // fallbacks within the app root
    "#root header", "#root nav", "#root .navbar", "#root .footer"
  ];

  function hasBlogLink(root) {
    return !!root.querySelector(`a[href$="${BLOG_HREF}"], a[href*="${BLOG_HREF}"]`);
  }

  function makeLink() {
    const a = document.createElement("a");
    a.href = BLOG_HREF;
    a.textContent = LINK_TEXT;
    a.setAttribute("data-mojaf-blog-link", "1");
    a.style.marginLeft = "12px";
    a.style.cursor = "pointer";
    return a;
  }

  function injectInto(container) {
    if (!container || hasBlogLink(container)) return false;

    // If there's a list-based menu, append as <li><a>Blog</a></li>
    const list = container.querySelector("ul, ol, .menu, .nav");
    if (list && !hasBlogLink(list)) {
      const li = document.createElement("li");
      li.style.listStyle = "none";
      li.appendChild(makeLink());
      list.appendChild(li);
      return true;
    }

    // Otherwise append a simple <a> into the container
    container.appendChild(makeLink());
    return true;
  }

  function tryOnce() {
    for (const sel of CANDIDATE_SELECTORS) {
      const node = document.querySelector(sel);
      if (node && injectInto(node)) return true;
    }
    return false;
  }

  // Try immediately, on DOM ready, and then watch for React updates
  const run = () => {
    let injected = tryOnce();

    // Observe future mutations (React re-renders)
    const observer = new MutationObserver(() => {
      if (!document.querySelector(`[data-mojaf-blog-link="1"]`)) {
        injected = tryOnce() || injected;
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Safety: if still nothing after a while, inject near #root
    setTimeout(() => {
      if (!document.querySelector(`[data-mojaf-blog-link="1"]`)) {
        const root = document.querySelector("#root") || document.body;
        injectInto(root);
      }
    }, 1500);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
