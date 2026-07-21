# 4. Customize the Example Website

[← Previous: View and understand code](03-view-and-understand-code.md) · [Return to the main guide](../README.md) · [Next: Publish with GitHub Pages →](05-publish-with-github-pages.md)

Work from the largest, safest changes toward the smaller design details.

## 1. Make a separate working copy

Do not edit the only copy of the example.

Duplicate the `example-website` folder and rename it:

```text
my-academic-website/
```

Later, that folder can become its own repository named:

```text
YOUR-USERNAME.github.io
```

## 2. Replace names, links, and contact details

Use **Find** or **Find in Files** in your editor.

Search for:

```text
Antonia
Millet
antoniajmillet
ajordanmillet
Florida Atlantic University
```

Replace each occurrence carefully. Do not use an automatic Replace All until you understand where the text appears.

Important locations include:

- page title and description;
- structured profile data in the `<head>`;
- visible header and biography;
- external links;
- footer;
- `robots.txt`;
- `sitemap.xml`;
- QR redirect page.

## 3. Replace the CV

Put your PDF in:

```text
assets/documents/
```

A stable filename is easier to maintain:

```text
cv.pdf
```

Then update every HTML link that points to the old CV.

Example:

```html
<a href="assets/documents/cv.pdf">View my CV</a>
```

Avoid adding the year to the public filename unless you want to update the website link every year.

## 4. Replace the images

Put your files in:

```text
assets/images/
```

Then update the matching `src` value.

```html
<img
  src="assets/images/my-field-photo.jpeg"
  alt="Researcher collecting vegetation data in a pine savanna"
>
```

Write alt text that communicates the purpose of the image. Do not use `alt="image"` or repeat a filename.

Photographs should be compressed before publishing. A website usually does not need the full resolution produced by a modern phone or camera.

## 5. Rewrite the visible sections

Recommended order:

1. Hero or homepage identity
2. About
3. Research area headings
4. Project cards
5. Publications link
6. Teaching or mentoring
7. Contact

Keep the HTML tags intact while replacing text.

Example:

```html
<h4>Root-to-Flower Cascades</h4>
```

can become:

```html
<h4>Your Project Title</h4>
```

## 6. Add, remove, or reorder projects

Each expandable project card begins with:

```html
<details class="project-card">
```

and ends with:

```html
</details>
```

Copy the entire block when adding a card. Removing only part of the block can break the page structure.

See [Project cards](../code-notes/project-cards.md).

## 7. Change the visual identity

Start with the variables at the top of `styles.css`.

```css
:root {
  --ink: #203039;
  --coral: #d95f47;
  --marigold: #efb84f;
  --teal: #24736c;
}
```

Change one color at a time and check:

- text contrast;
- link visibility;
- button readability;
- section boundaries;
- appearance on a phone.

Fonts are linked in the `<head>` of `index.html` and assigned in `styles.css`. When replacing them, update both places.

## 8. Update metadata

Visible content is not the only content that identifies the website.

Update:

- `<title>`;
- `<meta name="description">`;
- canonical URL;
- structured profile data;
- Google verification code, when used;
- `robots.txt`;
- `sitemap.xml`.

See [HTML overview](../code-notes/html-overview.md).

## 9. Test every link and screen size

Before publishing, check:

- navigation links;
- CV;
- email;
- Google Scholar;
- ORCID;
- GitHub;
- project links;
- images;
- phone layout;
- keyboard navigation;
- expandable project cards.


## Common problems

### The image does not appear

Check:

- spelling;
- capitalization;
- file extension;
- folder;
- whether the image was actually uploaded.

### The page lost its formatting

Confirm that this remains in `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

A query such as `styles.css?v=6` is also valid and can help a browser load a newly updated file.

### A navigation link does nothing

The link and section must match:

```html
<a href="#research">Research</a>
<section id="research">
```

### The old version still appears

Browsers may cache CSS, JavaScript, images, and redirects. Try:

- a hard refresh;
- a private browsing window;
- changing a cache-busting query from `?v=6` to `?v=7`;
- waiting for GitHub Pages to finish deploying.

## Final pre-publication search

Search the entire folder for the original owner's:

- name;
- email;
- university;
- usernames;
- website URL;
- CV filename.

Do not publish until the search returns only examples you intentionally kept in comments or documentation.

[← Previous: View and understand code](03-view-and-understand-code.md) · [Return to the main guide](../README.md) · [Next: Publish with GitHub Pages →](05-publish-with-github-pages.md)
