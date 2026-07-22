# Mobile Layout

[Return to the main guide](../README.md) · [Open the CSS](../reference-website/styles.css) · [Open the JavaScript](../reference-website/script.js)

Responsive design allows the same HTML to work across different screen sizes.

## Media queries

```css
@media (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .contact-list {
    grid-template-columns: 1fr;
  }
}
```

At phone width, multi-column sections become one column.

## Mobile order and navigation

The desktop opening section places writing beside the portrait. Mobile rules stack the writing, portrait, and buttons. Navigation may wrap or become smaller on narrow screens, so test the header after adding a new link.

## Header-height JavaScript

The script measures the mobile header and stores its height in a CSS variable. This keeps section headings from hiding beneath a wrapped sticky header.

## Test several sizes

- a narrow phone around 320 pixels wide;
- a common phone around 390 pixels wide;
- a tablet width;
- landscape orientation;
- a real phone before sharing the site publicly.
