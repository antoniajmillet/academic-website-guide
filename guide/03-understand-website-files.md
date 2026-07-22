# 3. Understand Your Website Files

[← Previous: Plan your layout and design](02-plan-layout-and-design.md) · [Return to the main guide](../README.md) · [Next: Add your content and customize the design →](04-add-content-and-customize-design.md)

You have planned what your website will include and how you want it to look. Before building it, learn how the main website files work together.

You do not need to understand every line of code. The goal is to recognize which file controls the part of the website you want to change.

## 3.1 Open the reference website

Open the [working reference website](https://antoniajmillet.github.io/) in a browser. Spend a few minutes clicking through it. Notice:

- the navigation;
- the opening section;
- the About section;
- the research cards;
- the CV and other links;
- the contact section;
- how the layout changes when the browser becomes narrower.

Keep the website open while you look through its files.

## 3.2 Open the website files on GitHub

In the guide repository, open the [`reference-website`](https://github.com/antoniajmillet/academic-website-guide/tree/main/reference-website) folder.

You should see:

```text
reference-website/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── assets/
└── go/
```

Select a filename to view its contents directly on GitHub. You are only exploring the files in this chapter, so you do not need to download or edit anything yet.

## 3.3 Understand what each file does

| File or folder | What it controls |
|---|---|
| `index.html` | Writing, links, images, and page structure |
| `styles.css` | Colors, fonts, spacing, cards, and layout |
| `script.js` | Small automatic behaviors |
| `assets/` | Images, documents, and other website materials |
| `robots.txt` | Instructions for search engines |
| `sitemap.xml` | A list of pages for search engines to find |
| `go/` | The permanent QR-code redirect |

For now, focus on:

```text
index.html
styles.css
script.js
```

## 3.4 Understand the HTML file

Open `index.html`. HTML contains the website’s content and structure. The writing that visitors see appears between tags that identify headings, paragraphs, links, images, and sections.

For example:

```html
<h1>Antonia J. Millet</h1>
```

The words between the tags appear on the website. The tags identify the text as the main heading.

| Tag | What it represents |
|---|---|
| `<h1>` through `<h6>` | Headings |
| `<p>` | Paragraphs |
| `<a>` | Links |
| `<img>` | Images |
| `<section>` | Major sections of the page |
| `<div>` | Groups of related content |
| `<nav>` | Navigation links |

You do not need to memorize these. Begin by recognizing what each part of the file represents.

### Find the main website sections

Scroll through `index.html` and look for section labels such as:

```html
<section id="about">
<section id="research">
<section id="mentoring">
<section id="contact">
```

The `id` gives each section a name. Navigation links use those names to move visitors to the correct part of the page.

For example:

```html
<a href="#research">Research</a>
```

connects to:

```html
<section id="research">
```

The word after `#` and the value inside `id=""` must match.

## 3.5 Connect visible content to the HTML

Keep the reference website open in one tab and `index.html` open in another. Choose something visible, such as the name at the top, the About heading, a project title, or a button label.

Use your browser’s Find feature to search for the same words inside `index.html`:

```text
Mac: Command + F
Windows: Ctrl + F
```

For example, searching for `Root-to-Flower Cascades` should bring you to the HTML for that project. Notice the tags and classes surrounding the text. Try this with a few visible parts of the website.

## 3.6 Understand the CSS file

Open `styles.css`. CSS controls how the HTML looks, including colors, fonts, spacing, borders, image sizes, project cards, and desktop and mobile layouts.

A CSS rule might look like:

```css
.site-name {
  font-size: 1.28rem;
  font-weight: 700;
}
```

The first line selects an HTML element with `class="site-name"`. The lines inside the braces control its appearance.

### Find reusable colors

Near the beginning of `styles.css`, you will see reusable color variables:

```css
:root {
  --ink: #203039;
  --coral: #d95f47;
  --marigold: #efb84f;
  --teal: #24736c;
}
```

Changing one variable later can update that color in several places.

### Connect an HTML class to a CSS rule

In `index.html`, the site name includes this class:

```html
<a class="site-name" href="#home">
  Antonia J. Millet
</a>
```

Search for `site-name` in `styles.css` to find the rule that controls how it looks.

HTML identifies the element; CSS controls its appearance.

## 3.7 Understand the JavaScript file

Open `script.js`. JavaScript handles small behaviors that happen automatically.

For example, the reference website inserts the current year into the footer:

```javascript
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
```

The script also measures the mobile header so section headings do not hide beneath it.

Most of the writing is controlled by HTML, and most of the appearance is controlled by CSS. You will probably make fewer changes to `script.js`.

## 3.8 Understand the assets folder and file paths

The `assets` folder contains website images and documents:

```text
assets/
├── images/
└── documents/
```

HTML reaches these files using a file path:

```html
<img
  src="assets/images/about.jpeg"
  alt="Antonia J. Millet"
>
```

The path means: begin beside `index.html`, open `assets`, open `images`, and load `about.jpeg`. The folders and filename must match exactly, including capitalization.

An image also includes `alt` text, which briefly explains the image for people who use screen readers or when the file cannot load. Use a useful description instead of `alt="image"` or `alt="photo"`.

## 3.9 Use View Page Source and Inspect

### View Page Source

View Page Source shows the HTML delivered to the browser. Common shortcuts are:

```text
Mac: Command + Option + U
Windows or Linux: Ctrl + U
```

Use it to find headings, section IDs, links, image paths, and metadata.

### Inspect

Right-click something on the website and select **Inspect**. Inspect can show which HTML element created the item, which CSS rules control it, and how the layout changes at different screen sizes.

Changes made in Inspect are temporary. Refreshing the page restores the original website. For now, use Inspect only to explore.

## 3.10 Use the code notes when you need more detail

The `code-notes` folder contains shorter explanations of individual features:

- [HTML overview](../code-notes/html-overview.md);
- [CSS overview](../code-notes/css-overview.md);
- [navigation](../code-notes/navigation.md);
- [About section](../code-notes/about-section.md);
- [project cards](../code-notes/project-cards.md);
- [mobile layout](../code-notes/mobile-layout.md);
- [analytics and redirects](../code-notes/analytics-and-redirects.md).

You do not need to read every note before continuing. Return to a note when you begin changing that part of your own website.

## Checkpoint

Before continuing, you should have:

- opened the reference website;
- viewed its files on GitHub;
- identified the roles of HTML, CSS, and JavaScript;
- found visible website text inside `index.html`;
- connected an HTML class to a CSS rule;
- explored the `assets` folder;
- followed a file path to an image or document;
- used View Page Source or Inspect at least once.

[← Previous: Plan your layout and design](02-plan-layout-and-design.md) · [Return to the main guide](../README.md) · [Next: Add your content and customize the design →](04-add-content-and-customize-design.md)
