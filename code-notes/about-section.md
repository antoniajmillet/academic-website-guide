# About Section

[Return to the main guide](../README.md) · [Open the HTML](../example-website/index.html)

The About section follows the same outer structure used by the other major bands.

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

## What each class does

- `section-band`: gives every full-width section shared boundaries and scroll behavior;
- `about-band`: assigns the About background color;
- `content-section`: constrains the readable width and adds vertical spacing;
- `section-title`: styles the heading and colored line;
- `prose`: controls the paragraph width and typography.

## Safe changes

You can replace:

- the heading;
- paragraph text;
- links;
- number of paragraphs.

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

Keep link text specific. Avoid using the words `click here`.

## Writing purpose

A useful About section explains:

- who you are now;
- how your research direction developed;
- what broad question connects your projects.

It should not reproduce every position and award already listed in the CV.
