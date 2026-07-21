# Mobile Layout

[Return to the main guide](../README.md) · [Open the CSS](../example-website/styles.css) · [Open the JavaScript](../example-website/script.js)

Responsive design allows the same HTML to work across screen sizes.

## Media queries

The example includes breakpoints for:

- tablets;
- small tablets;
- phones.

Example:

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

## Mobile hero order

The desktop hero places writing beside the portrait. The mobile rules stack:

1. written identity;
2. portrait;
3. buttons.

CSS grid areas control the order without duplicating the HTML.

## Mobile navigation

The navigation wraps and reduces its font size on smaller screens. When adding another navigation item, test whether the full header still fits without covering the page.

## Header-height JavaScript

The script measures the sticky header on screens up to 600 pixels wide:

```javascript
const height = isMobile
  ? Math.ceil(header.getBoundingClientRect().height)
  : 0;
```

It stores the result in a CSS variable:

```javascript
document.documentElement.style.setProperty(
  "--mobile-header-height",
  `${height}px`
);
```

This allows CSS to compensate for a header whose height changes when navigation links wrap.

## Test more than one phone size

Use browser developer tools to test:

- approximately 320 pixels wide;
- approximately 390 pixels wide;
- a tablet width;
- landscape orientation.

Also test on a real phone before printing a QR code or sharing the site publicly.
