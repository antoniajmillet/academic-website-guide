# Analytics, Search Files, and Permanent Redirects

[Return to the main guide](../README.md) · [Open the redirect](../reference-website/go/website/index.html)

These files are not required for the first visible page, but they make the website easier to find, maintain, and measure.

## Google Analytics

Use the tag supplied for your own Google Analytics Web stream. Place it in the `<head>` of `index.html`, publish the site, and check the Realtime report. Never copy another website’s Measurement ID.

## UTM parameters

```text
?utm_source=qr
&utm_medium=print
&utm_campaign=website
```

Keep parameter names lowercase and consistent.

## Permanent redirect page

The QR code points to `/go/website/`. The redirect page uses three layers:

- JavaScript redirect: `window.location.replace("DESTINATION");`
- HTML meta refresh as a backup;
- a visible fallback link.

Update the destination in all three places. Add `<meta name="robots" content="noindex">` so the utility page is not treated as a search result.

## `robots.txt` and `sitemap.xml`

Replace the reference website URL in both files. Update the sitemap date after a substantial website revision.

## QR image files

Use SVG for printing and PNG as a backup. Keep the white margin around the QR pattern and test a printed version with more than one phone.
