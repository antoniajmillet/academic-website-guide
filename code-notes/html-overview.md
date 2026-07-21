# HTML Overview

[Return to the main guide](../README.md) · [Open the complete `index.html`](../example-website/index.html)

HTML provides the content and structure of the site.

## The document frame

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  ...
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser to use modern HTML.
- `lang="en"` identifies the page language.
- `<head>` contains metadata and file connections.
- `<body>` contains the visible page.

## The `<head>`

The example includes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<title>Antonia J. Millet | Ph.D. Student | Plant–Microbe Interactions</title>
<link rel="canonical" href="https://antoniajmillet.github.io/">
<link rel="stylesheet" href="styles.css?v=6">
<script src="script.js?v=6" defer></script>
```

### Safe to customize

- description;
- title;
- canonical URL;
- font links;
- CSS and JavaScript version numbers.

### Keep connected

If the CSS file is named `styles.css`, the HTML link must use the same name.

If the JavaScript file is named `script.js`, the script path must match.

## Structured profile data

The JSON-LD block identifies the page as a profile for a person. Replace:

- name and alternate names;
- website URL;
- Google Scholar, ORCID, and GitHub links;
- affiliation.

Keep the quotation marks, commas, braces, and brackets valid.

## The visible sections

The example uses semantic sections:

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

- `target="_blank"` opens a new tab.
- `rel="noopener noreferrer"` is a security and privacy safeguard for that new tab.

## Images

```html
<img
  src="assets/images/about.jpeg"
  alt="Antonia J. Millet"
>
```

Change both the path and alt text when replacing an image.

## What not to remove casually

- closing tags;
- quotation marks;
- section IDs used by navigation;
- the CSS link;
- the JavaScript link;
- accessibility attributes such as `aria-label` and useful alt text.
