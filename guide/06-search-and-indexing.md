# 6. Help Search Engines Find Your Website

[← Previous: Publish with GitHub Pages](05-publish-with-github-pages.md) · [Return to the main guide](../README.md) · [Next: Add Google Analytics →](07-add-google-analytics.md)

Publishing makes the website public, but it does not guarantee that a search engine will discover or index it immediately.

## Check the homepage metadata

In `index.html`, update:

```html
<title>Your Name | Research Area</title>

<meta
  name="description"
  content="A clear description of you and your research."
>

<link
  rel="canonical"
  href="https://YOUR-USERNAME.github.io/"
>
```

Also replace the example name, affiliation, website, Google Scholar, ORCID, and GitHub links inside the JSON-LD profile data.

## Update `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-USERNAME.github.io/sitemap.xml
```

## Update `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-USERNAME.github.io/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
  </url>
</urlset>
```

Use the date of the last substantial update to the page.

## Verify the website with Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the full website URL as a URL-prefix property.
3. Choose the HTML tag or HTML file verification method.
4. Add the verification tag inside `<head>`, or place the verification file at the repository root.
5. Commit and push the change.
6. Wait for GitHub Pages to deploy.
7. Return to Search Console and complete verification.

Keep the verification tag or file in the repository.

## Submit the sitemap

In Search Console:

1. Open **Sitemaps**.
2. Enter `sitemap.xml`.
3. Submit it.
4. Use **URL Inspection** to request indexing for the homepage.

A sitemap helps a search engine discover preferred URLs, but submitting one does not guarantee indexing.

## Checkpoint

- [ ] Title, description, canonical URL, and profile data are correct
- [ ] `robots.txt` opens publicly
- [ ] `sitemap.xml` opens publicly
- [ ] Search Console ownership is verified
- [ ] Sitemap is submitted
- [ ] Homepage indexing is requested

## Official references

- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Google: Ask Google to recrawl a URL](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

[← Previous: Publish with GitHub Pages](05-publish-with-github-pages.md) · [Return to the main guide](../README.md) · [Next: Add Google Analytics →](07-add-google-analytics.md)
