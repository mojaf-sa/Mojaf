import React from "react";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | MOJAF Trading Saudi Arabia</title>
        <meta name="description" content="Insights on fasteners, wall skirting, flooring and construction materials for projects across Saudi Arabia." />
        <link rel="canonical" href="https://mojaf-sa.com/blog" />
      </Helmet>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "16px" }}>
        <h1>Blog</h1>

        <section style={{ marginTop: "24px" }}>
          <h2>Latest Articles</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "18px" }}>
              <a href="/blog/choosing-right-fasteners-wall-skirting" style={{ fontWeight: "bold", color: "#004aad", textDecoration: "none" }}>
                Choosing the Right Fasteners and Wall Skirting for Saudi Construction Projects
              </a>
              <p style={{ margin: "4px 0", color: "#555" }}>A 2025 guide for engineers and contractors — selecting durable fasteners and modern wall skirting for Saudi conditions.</p>
              <p style={{ margin: "0", color: "#777", fontStyle: "italic" }} dir="rtl">ملخص عربي: دليل عملي لاختيار المثبتات وشرائح الحائط المناسبة لمشروعات البناء في السعودية.</p>
              <small>Published recently by MOJAF Trading</small>
            </li>

            <li style={{ marginBottom: "18px" }}>
              <a href="/blog/top-5-construction-materials-2025" style={{ fontWeight: "bold", color: "#004aad", textDecoration: "none" }}>
                Top 5 Construction Materials Every Saudi Contractor Needs in 2025
              </a>
              <p style={{ margin: "4px 0", color: "#555" }}>Five essentials for KSA sites: fasteners, gypsum boards, cement boards, vinyl/SPC flooring, and rock wool insulation.</p>
              <p style={{ margin: "0", color: "#777", fontStyle: "italic" }} dir="rtl">ملخص عربي: أفضل خمس مواد بناء يعتمد عليها المقاولون في السعودية لعام 2025.</p>
              <small>Published recently by MOJAF Trading</small>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
