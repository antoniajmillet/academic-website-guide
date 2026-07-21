# 8. Create a Permanent, Trackable QR Code

[← Previous: Add Google Analytics](07-add-google-analytics.md) · [Return to the main guide](../README.md)

A printed QR code cannot be changed once it has been distributed. Point it to a redirect page you control rather than directly to your homepage. This keeps the code usable if the destination changes and lets you track QR scans separately from other website traffic. As with any research or outreach project, it is useful to build measurable outcomes into the design from the beginning. For example, you may want to know how many people scanned a conference QR code during August compared with how many visitors found your website through a Google search, email signature, or another source.

```text
QR code
   ↓
https://YOUR-USERNAME.github.io/go/website/
   ↓
Current website destination
```

## Create the redirect folder

```text
go/
└── website/
    └── index.html
```

## Add the redirect page

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting</title>
  <meta name="robots" content="noindex">

  <meta
    http-equiv="refresh"
    content="0; url=https://YOUR-DESTINATION/?utm_source=qr&utm_medium=print&utm_campaign=website"
  >

  <script>
    window.location.replace(
      "https://YOUR-DESTINATION/?utm_source=qr&utm_medium=print&utm_campaign=website"
    );
  </script>
</head>

<body>
  <p>
    Redirecting to
    <a href="https://YOUR-DESTINATION/?utm_source=qr&utm_medium=print&utm_campaign=website">
      the website
    </a>.
  </p>
</body>
</html>
```

Update the destination in all three places:

1. meta refresh;
2. JavaScript redirect;
3. fallback link.

## Publish and test the redirect first

```bash
git add go/website/index.html
git commit -m "Add permanent website QR redirect"
git push
```

Open:

```text
https://YOUR-USERNAME.github.io/go/website/
```

Confirm that it reaches the correct destination.

## Generate the QR code

Encode only the permanent redirect URL:

```text
https://YOUR-USERNAME.github.io/go/website/
```

Save:

- SVG for printing
- PNG as a backup

Keep the white margin around the QR code. Do not crop, stretch, or cover the pattern.

## Test before printing

Test:

- the redirect URL in a browser;
- the QR code on screen;
- a small printed version;
- more than one phone;
- the Analytics Realtime report, when Analytics is installed.

## Change the destination later

Edit the three destination URLs in `go/website/index.html`, then commit and push. The printed QR code does not need to change.

The working example is in:

```text
example-website/go/website/
```

## Checkpoint

- [ ] Redirect page works
- [ ] UTM parameters reach the destination
- [ ] SVG and PNG QR files are saved
- [ ] Printed test scans reliably
- [ ] The destination can be changed without replacing the QR code

[← Previous: Add Google Analytics](07-add-google-analytics.md) · [Return to the main guide](../README.md)
