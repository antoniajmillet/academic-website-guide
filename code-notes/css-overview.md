# CSS Overview

[Return to the main guide](../README.md) · [Open `styles.css`](../reference-website/styles.css)

CSS controls appearance and layout.

## Color variables

```css
:root {
  --ink: #203039;
  --ink-soft: #48585e;
  --coral: #d95f47;
  --marigold: #efb84f;
  --teal: #24736c;
  --teal-dark: #17564f;
}
```

Variables let you change a reused color in one location.

## Selectors

```css
.site-header {
  position: sticky;
  top: 0;
}
```

`.site-header` selects an HTML element with `class="site-header"`. A class can be reused. A selector beginning with `#` targets an element with a matching `id`.

## Spacing

- `margin`: space outside an element;
- `padding`: space inside an element;
- `border`: the visible edge.

## Layout

The reference site uses Flexbox and Grid. Change one layout property at a time, save, and compare the result.

## Responsive design

```css
@media (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
```

Rules inside a media query apply only at certain screen widths.

## A useful beginner workflow

1. Find the class in HTML.
2. Search for the same class in CSS.
3. Read every matching rule, including mobile rules.
4. Change one property.
5. Test desktop and mobile.
