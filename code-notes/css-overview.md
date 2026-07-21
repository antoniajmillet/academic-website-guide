# CSS Overview

[Return to the main guide](../README.md) · [Open the complete `styles.css`](../example-website/styles.css)

CSS controls appearance and layout.

## Color variables

The file begins with reusable variables:

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

Using variables means one color can be changed in one location rather than in every individual rule.

## Selectors

```css
.site-header {
  position: sticky;
  top: 0;
}
```

`.site-header` selects an HTML element with:

```html
class="site-header"
```

A class can be reused.

```css
#contact {
  ...
}
```

`#contact` would select an element with:

```html
id="contact"
```

An ID should identify one element.

## Box model

Spacing usually comes from:

```css
margin
padding
border
```

- `margin`: space outside an element;
- `padding`: space inside an element;
- `border`: visible edge.

## Layout

The example uses both Flexbox and Grid.

```css
.header-inner {
  display: flex;
  justify-content: space-between;
}
```

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

Do not change several layout properties at once. Change one value, refresh, and compare.

## Responsive design

Rules inside a media query apply only at certain screen widths.

```css
@media (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
```

The example has desktop styles first, then tablet and mobile adjustments.

## A useful beginner workflow

1. Find the class in HTML.
2. Search for the same class in CSS.
3. Read every matching rule, including rules inside media queries.
4. Change one property.
5. test desktop and mobile.
