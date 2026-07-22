# 7. Track Website Visits

[← Previous: Help search engines find your website](06-help-search-engines-find-website.md) · [Return to the main guide](../README.md) · [Next: Create a permanent QR code →](08-create-permanent-qr-code.md)

Google Analytics is optional. It can show whether people visit the website, how they arrived, and which pages they used.

Analytics adds tracking code to the website. Decide whether this fits your privacy preferences and any institutional requirements.

## 7.1 Create a Google Analytics property

1. Open [Google Analytics](https://analytics.google.com/).
2. Create a Google Analytics 4 property.
3. Create a Web data stream using your public website URL.
4. Open the Web stream and copy the Google tag supplied for it.

The Measurement ID begins with `G-`.

## 7.2 Add the Google tag to `index.html`

Paste the complete Google tag immediately after the opening `<head>` tag. It will resemble:

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

Use the exact tag and Measurement ID supplied for your property. Do not copy another website’s ID.

## 7.3 Publish and verify the tag

Commit and publish the updated `index.html`, open the public website, and then check the Realtime report in Google Analytics. Data may not appear immediately, so check again later if your first visit is not visible.

## 7.4 Use UTM parameters for trackable links

UTM parameters label visits from a specific source, such as a printed QR code.

```text
https://YOUR-USERNAME.github.io/?utm_source=qr&utm_medium=print&utm_campaign=website
```

| Parameter | Example | What it identifies |
| --- | --- | --- |
| utm_source | qr | Where the visit came from |
| utm_medium | print | The type of source |
| utm_campaign | website | The tracking project or campaign |

Keep tracking names lowercase and consistent so related visits are grouped together.

## Checkpoint

- a GA4 property and Web stream exist;
- the correct Google tag is inside `<head>`;
- the website was redeployed;
- a test visit appears in Realtime;
- UTM names are documented and consistent.

## Official references

- [Google: Set up Analytics for a website](https://support.google.com/analytics/answer/14183469)
- [Google: Find your Google tag ID](https://support.google.com/analytics/answer/9539598)

[← Previous: Help search engines find your website](06-help-search-engines-find-website.md) · [Return to the main guide](../README.md) · [Next: Create a permanent QR code →](08-create-permanent-qr-code.md)
