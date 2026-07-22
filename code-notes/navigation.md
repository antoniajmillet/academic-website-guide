# Navigation

[Return to the main guide](../README.md) · [Open the HTML](../reference-website/index.html)

## Internal section link

```html
<a href="#research">Research</a>

<section id="research" class="section-band research-band">
```

The word after `#` and inside `id=""` must match exactly.

## External file link

```html
<a
  href="assets/documents/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  CV
</a>
```

When renaming the CV, update every link to it.

## Adding a section

1. Add the section to HTML.
2. Add a navigation link with the matching ID.
3. Add CSS when needed.
4. Test the link on desktop and mobile.

## Accessibility

```html
<nav class="site-navigation" aria-label="Main navigation">
```

The label helps assistive technology identify the purpose of the links.
