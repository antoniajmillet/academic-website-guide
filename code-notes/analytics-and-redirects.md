# Analytics, Search Files, and Permanent Redirects

[Return to the main guide](../README.md) · [Open the redirect](../example-website/go/website/index.html)

These files are not required for the first visible page, but they make the website easier to maintain and measure.

## Google Analytics

Google Analytics provides a site-specific tag. Follow Google's current installation instructions and place the provided code in the `<head>` of the pages you want to track.

Do not copy another person's measurement ID.

After publishing:

1. open the website;
2. check the analytics real-time report;
3. confirm that your own visit appears;
4. exclude or interpret your own testing traffic carefully.

## UTM parameters

The example QR redirect sends visitors to:

```text
https://antoniajmillet.github.io/
?utm_source=qr
&utm_medium=print
&utm_campaign=website
```

The parameters identify:

- source: QR;
- medium: print;
- campaign: website.

Replace the destination URL but keep consistent parameter names if you want printed QR visits grouped together.

## Permanent redirect page

The QR code points to:

```text
/go/website/
```

The redirect page uses three layers.

### Primary JavaScript redirect

```javascript
window.location.replace("DESTINATION");
```

### Backup HTML redirect

```html
<meta http-equiv="refresh" content="0; url=DESTINATION">
```

### Visible fallback link

```html
<a href="DESTINATION">Website name</a>
```

Update the destination in all three places.

## Why use `replace()`

`window.location.replace()` redirects without leaving the utility page as an extra step in the browser's back-button history.

## Keep the redirect out of search results

```html
<meta name="robots" content="noindex">
```

## `robots.txt`

The example allows search engines to crawl the site and points them to the sitemap:

```text
User-agent: *
Allow: /

Sitemap: https://antoniajmillet.github.io/sitemap.xml
```

Replace the URL.

## `sitemap.xml`

The sitemap names the main public URL and its last major update date.

Replace:

```xml
<loc>https://antoniajmillet.github.io/</loc>
```

and update:

```xml
<lastmod>YYYY-MM-DD</lastmod>
```

## QR image files

The example includes:

- SVG for high-quality printing;
- PNG as a compatibility backup.

Do not crop the quiet white border around a QR code. Test the printed version with more than one phone before distributing it.
