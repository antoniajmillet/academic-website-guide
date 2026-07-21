# 7. Add Google Analytics

[← Previous: Search and indexing](06-search-and-indexing.md) · [Return to the main guide](../README.md) · [Next: Create a permanent QR code →](08-create-a-permanent-qr-code.md)

Google Analytics is optional. It can show whether people visit the website, how they arrived, and which pages they used.

## Create a GA4 property and Web data stream

1. Open [Google Analytics](https://analytics.google.com/).
2. Create a Google Analytics 4 property.
3. Create a Web data stream using the public website URL.
4. Copy the Google tag supplied for that stream.

The Measurement ID begins with `G-`.

## Add the tag to `index.html`

Paste the complete Google tag immediately after the opening `<head>` tag.

It will resemble:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>

<script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Use the exact tag and Measurement ID supplied for your own property. Do not copy the Measurement ID from another website.

## Publish and test

```bash
git add index.html
git commit -m "Add Google Analytics"
git push
```

After GitHub Pages deploys, open the public website and check the **Realtime** report in Google Analytics.

## Add UTM parameters for trackable links

Example:

```text
https://YOUR-USERNAME.github.io/?utm_source=qr&utm_medium=print&utm_campaign=website
```

This identifies:

- source: `qr`
- medium: `print`
- campaign: `website`

Keep names lowercase and consistent.

## Checkpoint

- [ ] GA4 property and Web stream exist
- [ ] The correct Google tag is inside `<head>`
- [ ] The website was redeployed
- [ ] A test visit appears in Realtime
- [ ] UTM names are documented and consistent

## Official references

- [Google: Set up Analytics for a website](https://support.google.com/analytics/answer/9304153)
- [Google Analytics](https://analytics.google.com/)

[← Previous: Search and indexing](06-search-and-indexing.md) · [Return to the main guide](../README.md) · [Next: Create a permanent QR code →](08-create-a-permanent-qr-code.md)
