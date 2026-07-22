# 8. Create a Permanent QR Code

[← Previous: Track website visits](07-track-website-visits.md) · [Return to the main guide](../README.md)

A QR code printed on a poster, business card, or handout cannot be changed later. Instead of pointing it directly to your homepage, point it to a redirect page that you control.

The redirect page can send visitors to your current website and can be updated later without replacing the printed QR code. Adding UTM parameters also lets you measure visits from printed materials separately from other traffic.

```text
QR code
   ↓
https://YOUR-USERNAME.github.io/go/website/
   ↓
Current website destination
```

## 8.1 Create the redirect folder

```text
go/
└── website/
    └── index.html
```

## 8.2 Add the redirect page

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

Replace the destination in all three places: the meta refresh, JavaScript redirect, and fallback link.

## 8.3 Publish and test the redirect

Add the `go/` folder to your website repository, commit, and publish the change. Then open:

```text
https://YOUR-USERNAME.github.io/go/website/
```

Confirm that it reaches the correct website and that the UTM parameters remain in the destination address.

## 8.4 Generate the QR code

Encode only the permanent redirect URL:

```text
https://YOUR-USERNAME.github.io/go/website/
```

Save an SVG for high-quality printing and a PNG as a backup.

Keep the white margin around the QR pattern. Do not crop, stretch, cover, or recolor the code itself.

## 8.5 Test before printing

- open the redirect URL in a browser;
- scan the QR code on a screen;
- print a small test copy;
- scan it with more than one phone;
- confirm the visit in Analytics Realtime when Analytics is installed.

## 8.6 Change the destination later

Edit the three destination URLs in `go/website/index.html`, then commit and publish the change. The printed QR code does not need to change.

The working reference is in:

```text
reference-website/go/website/
```

## Checkpoint

- the redirect page works;
- UTM parameters reach the destination;
- SVG and PNG QR files are saved;
- a printed test scans reliably;
- the destination can be changed without replacing the QR code.

[← Previous: Track website visits](07-track-website-visits.md) · [Return to the main guide](../README.md)
