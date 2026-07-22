# Build an Academic Website with GitHub Pages

*A beginner-friendly guide by Antonia J. Millet.*

This guide is designed for undergraduate and graduate students, early-career researchers, and research staff who want to build their first professional academic website. No prior web-development experience is required, although basic familiarity with files, folders, and simple code editing will be helpful.

This guide walks through the following workflow:

1. Plan your website content.
2. Plan your layout and design.
3. Understand your website files.
4. Add your content and customize the design.
5. Publish and test your website.
6. Help search engines find your website.
7. Track website visits.
8. Create a permanent QR code.

![Desktop view of the reference website](guide/images/example-website-desktop.png)

## Do you have to build a website with GitHub Pages?

No. There are several ways to build an academic website. A website builder may be a better choice if you want to publish a site quickly and do not want to work with code.

### Common website options

| Option | Best for | Main limitation |
| --- | --- | --- |
| Google Sites | A quick, simple website | Limited visual control |
| Wix, Weebly, or Squarespace | Drag-and-drop design | Features, branding, or publishing options may depend on the plan |
| WordPress.com | Blogs and expandable websites | More platform-specific setup and maintenance |
| A university profile | Basic institutional visibility | Limited design control and may not follow you when you leave |
| GitHub Pages | A portable, customizable academic website | Requires learning a small amount about files and code |

## Why this guide uses GitHub Pages

GitHub Pages is free, highly customizable, and requires only a basic understanding of a few website file types. Your website files can be stored in a public repository, making it easy to show how the site was built, share the code with others, and track changes over time.

This fits well with the scientific values of transparency, reproducibility, and sharing useful resources.

## Start here

| Chapter | What you will do |
| --- | --- |
| [1. Plan your website content](guide/01-plan-website-content.md) | Decide what visitors should understand about you and your work |
| [2. Plan your layout and design](guide/02-plan-layout-and-design.md) | Decide how to organize and visually present your writing, images, sections, and links |
| [3. Understand your website files](guide/03-understand-website-files.md) | Learn what the HTML, CSS, and JavaScript files control |
| [4. Add your content and customize the design](guide/04-add-content-and-customize-design.md) | Use your content and design plan to build your own site |
| [5. Publish and test your website](guide/05-publish-and-test-website.md) | Upload, publish, update, and troubleshoot the site |
| [6. Help search engines find your website](guide/06-help-search-engines-find-website.md) | Update search files, verify Search Console, and submit a sitemap |
| [7. Track website visits](guide/07-track-website-visits.md) | Install Google Analytics and confirm that it is collecting data |
| [8. Create a permanent QR code](guide/08-create-permanent-qr-code.md) | Create a reusable redirect and track visits from printed materials |

## How this repository is organized

```text
academic-website-guide/
├── README.md
├── CITATION.cff
├── SOURCES.md
├── LICENSE.md
├── guide/
│   ├── 01-plan-website-content.md
│   ├── 02-plan-layout-and-design.md
│   ├── 03-understand-website-files.md
│   ├── 04-add-content-and-customize-design.md
│   ├── 05-publish-and-test-website.md
│   ├── 06-help-search-engines-find-website.md
│   ├── 07-track-website-visits.md
│   ├── 08-create-permanent-qr-code.md
│   └── images/
├── code-notes/
│   ├── html-overview.md
│   ├── css-overview.md
│   ├── navigation.md
│   ├── about-section.md
│   ├── project-cards.md
│   ├── mobile-layout.md
│   └── analytics-and-redirects.md
└── reference-website/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── robots.txt
    ├── sitemap.xml
    ├── assets/
    └── go/
```

## How to use this repository

Read the chapters in order and use the code notes when you need more detail about a specific website feature.

### `guide/`

The main step-by-step instructions, from planning your content through publishing and tracking your website.

### `code-notes/`

Short explanations of how important parts of the HTML, CSS, and JavaScript work together.

### `reference-website/`

A complete working academic website that shows how the files, content, and design fit together. Use it to understand how a finished site works while creating a website based on your own content and design plan.

## Before publishing your website

The reference site contains Antonia J. Millet’s writing, photographs, CV, links, contact information, and QR code. Replace all personal materials with your own before publishing. Chapter 4 provides a checklist of the content and files that need to be updated.

## Sources and transparency

Several academic websites were reviewed for ideas about structure, navigation, research presentation, and visual design. The included website was developed as an original reference rather than copied from any one personal website. See [SOURCES.md](SOURCES.md) for the websites, documentation, and other resources that informed this project.

## License

The guide, code, and personal materials are protected by copyright. Read [LICENSE.md](LICENSE.md) before adapting or redistributing the repository.

## Citation

Millet, Antonia J. 2026. Build an Academic Website with GitHub Pages.
