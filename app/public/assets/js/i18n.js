/* global localStorage, document, fetch */
(function () {
  var SUPPORTED = ["en", "ar"];

  function $all(s) { return Array.from(document.querySelectorAll(s)); }
  function getPref() {
    try { return localStorage.getItem("lang") || document.documentElement.lang || "en"; }
    catch { return "en"; }
  }
  function setLang(l) {
    document.documentElement.lang = l;
    document.documentElement.dir = (l === "ar" ? "rtl" : "ltr");
  }
  async function load(l) {
    try {
      var r = await fetch("/assets/i18n/" + l + ".json", { cache: "no-store" });
      if (!r.ok) throw 0;
      return await r.json();
    } catch { return {}; }
  }
  function apply(dict) {
    $all("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = (document.documentElement.lang === "ar") ? "English" : "العربية";
  }
  async function switchTo(l) {
    if (!SUPPORTED.includes(l)) l = "en";
    setLang(l);
    try { localStorage.setItem("lang", l); } catch {}
    var dict = await load(l);
    apply(dict);
  }
  async function init() {
    var l = getPref();
    await switchTo(l);
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.onclick = function () {
      switchTo(document.documentElement.lang === "ar" ? "en" : "ar");
    };
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
