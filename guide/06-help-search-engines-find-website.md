# 6. Help Search Engines Find Your Website

[← Previous: Publish and test your website](05-publish-and-test-website.md) · [Return to the main guide](../README.md) · [Next: Track website visits →](07-track-website-visits.md)

Publishing makes your website public, but search engines may not discover or index it immediately. Complete these steps before you need the site to appear in search results, and expect indexing to take time.

## 6.1 Check the homepage metadata

Open `index.html` and confirm that the title, description, and canonical URL describe your website:

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

The title appears in browser tabs and may appear in search results. The description briefly explains the page. The canonical link identifies the preferred website URL.

## 6.2 Update `robots.txt` and `sitemap.xml`

### `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-USERNAME.github.io/sitemap.xml
```

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-USERNAME.github.io/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
  </url>
</urlset>
```

Replace the website URL and use the date of the last substantial update. Commit and publish the changes.

## 6.3 Verify the site in Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the full website URL as a URL-prefix property.
3. Choose the HTML tag verification method.
4. Copy the verification tag into the <head> of index.html.
5. Commit and publish the change.
6. Wait for GitHub Pages to deploy.
7. Return to Search Console and select Verify.

Keep the verification tag in `index.html` after verification.

## 6.4 Submit the sitemap and request indexing

1. In Search Console, open Sitemaps.
2. Enter `sitemap.xml` and submit it.
3. Open URL Inspection.
4. Enter the homepage URL.
5. Select Request indexing when the option is available.

A sitemap and indexing request help Google discover the site, but they do not guarantee that the page will appear immediately or rank highly.

## 6.5 Check the public files

Open these addresses in a browser and confirm that they load:

```text
https://YOUR-USERNAME.github.io/robots.txt
https://YOUR-USERNAME.github.io/sitemap.xml
```

## Checkpoint

- the title, description, and canonical URL are correct;
- `robots.txt` and `sitemap.xml` contain your website URL;
- Search Console ownership is verified;
- the sitemap is submitted;
- homepage indexing has been requested.

## Official references

- [Google: Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Inspect and request indexing for a URL](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

[← Previous: Publish and test your website](05-publish-and-test-website.md) · [Return to the main guide](../README.md) · [Next: Track website visits →](07-track-website-visits.md)
