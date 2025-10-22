# MOJAF Trading - Bilingual SEO & AEO Guide

## Overview
This guide explains on-page SEO, bilingual content strategy (English + Arabic), local SEO for KSA cities, schema markup and technical recommendations.

## Key Recommendations
1. Use Hreflang for English and Arabic pages.
2. Add LocalBusiness schema with address in Jeddah and phone number: +966568401900.
3. Ensure fast hosting, compress images, and use CDNs for KSA.
4. Generate 20 bilingual blog posts (done) and internal-link them to landing pages.
5. Collect GBP reviews and add keyword-rich user content.

## Sample Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MOJAF Trading",
  "telephone": "+966568401900",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "JHYE3207، 3207 موسي الرازي، 7951, Al Shera'a",
    "addressLocality": "Jeddah",
    "postalCode": "23816",
    "addressCountry": "SA"
  },
  "url": "https://mojaf-sa.com",
  "openingHours": "Mo-Fr 08:00-17:00"
}
```

## Hreflang example
Add the following in the &lt;head&gt; of bilingual pages:
&lt;link rel="alternate" href="https://mojaf-sa.com/page" hreflang="en" /&gt;
&lt;link rel="alternate" href="https://mojaf-sa.com/ar/page" hreflang="ar" /&gt;

## Footer code for React is included separately as Footer.jsx
