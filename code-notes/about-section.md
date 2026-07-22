# About Section

[Return to the main guide](../README.md) · [Open the HTML](../reference-website/index.html)

The About section follows the same outer structure used by the other major sections.

```html
<section id="about" class="section-band about-band">
  <div class="content-section">
    <div class="section-title">
      <h2>About</h2>
    </div>

    <div class="prose">
      <p>Biography paragraph...</p>
      <p>Research background...</p>
      <p>Current direction...</p>
    </div>
  </div>
</section>
```

## What the classes do

- `section-band`: provides shared full-width section behavior;
- `about-band`: assigns the About section’s background styling;
- `content-section`: limits the readable width and adds spacing;
- `section-title`: styles the heading;
- `prose`: controls paragraph width and typography.

## Safe changes

You can replace the heading, paragraph text, links, and number of paragraphs.

## Inline links

```html
<a
  class="inline-link"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  linked words
</a>
```

Use specific link text instead of “click here.”
