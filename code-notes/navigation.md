# Navigation

[Return to the main guide](../README.md) · [Open the HTML](../example-website/index.html)

The navigation uses links to section IDs on the same page.

## Internal section link

```html
<a href="#research">Research</a>
```

This moves to:

```html
<section id="research" class="section-band research-band">
```

The words after `#` and inside `id=""` must match exactly.

## External file link

The CV opens a PDF:

```html
<a
  href="assets/documents/ajm_cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  CV
</a>
```

When renaming the CV, update every link to it.

## The site name

```html
<a class="site-name" href="#home">
  Antonia J. Millet
</a>
```

This acts as a link back to the top section.

## Adding a section

To add a navigation destination:

1. Add the section to HTML.

```html
<section id="teaching">
  ...
</section>
```

2. Add the link.

```html
<a href="#teaching">Teaching</a>
```

3. Add section styling in CSS when needed.
4. Test the link on desktop and mobile.

## Accessibility

The navigation includes:

```html
<nav class="site-navigation" aria-label="Main navigation">
```

The label helps assistive technology identify the purpose of the links.
