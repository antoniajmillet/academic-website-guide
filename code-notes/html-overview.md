# HTML Overview

[Return to the main guide](../README.md) · [Open `index.html`](../reference-website/index.html)

HTML provides the content and structure of the site.

## The document frame

```html
<!doctype html>
<html lang="en">
<head>
  ...
</head>
<body>
  ...
</body>
</html>
```

- `<!doctype html>` tells the browser to use modern HTML;
- `lang="en"` identifies the page language;
- `<head>` contains metadata and file connections;
- `<body>` contains the visible page.

## The `<head>`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<title>Your Name | Research Area</title>
<link rel="canonical" href="https://YOUR-USERNAME.github.io/">
<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>
```

Update the title, description, canonical URL, and any font links. Keep the CSS and JavaScript paths connected to the actual filenames.

## The visible sections

```html
<header>...</header>
<main>
  <section id="home">...</section>
  <section id="about">...</section>
  <section id="research">...</section>
  <section id="publications">...</section>
  <section id="mentoring">...</section>
  <section id="contact">...</section>
</main>
<footer>...</footer>
```

The section IDs connect to navigation links.

## External links

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Link text
</a>
```

`target="_blank"` opens a new tab. `rel="noopener noreferrer"` adds protection for that new tab.

## Images

```html
<img
  src="assets/images/about.jpeg"
  alt="Researcher standing in a botanical garden"
>
```

Change both the path and alt text when replacing an image.

## Do not remove casually

- closing tags;
- quotation marks;
- section IDs used by navigation;
- the CSS and JavaScript links;
- useful accessibility attributes such as `aria-label` and `alt` text.
