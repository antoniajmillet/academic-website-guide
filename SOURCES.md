# Sources, Inspiration, and Code Provenance

This file records what informed the guide and the example site.

## Important distinction

The example website was not copied from any single academic website. Several sites were reviewed to compare common ways of organizing an academic identity, displaying projects, linking a CV, and using photographs. The HTML, CSS, and JavaScript included in `example-website/` were developed for Antonia J. Millet's site.

A publicly viewable website was treated as design inspiration unless its repository and reuse license clearly permitted code reuse.

## Academic and ecology websites reviewed

| Website | Field | Feature studied |
|---|---|---|
| [Cole J. Doolittle](https://coledoolittle.com/) | Forest, community, and disturbance ecology | One-page flow, concise project previews, project-centered visual hierarchy |
| [Juan Pablo Jordán](https://jpj73.github.io/personal_website/about.html) | Organismal biology and ecology/evolution | Simple pages, public source, clear About/Research/CV structure |
| [Ken W. Zillig](https://kenzillig.github.io/aboutme/) | Fish ecophysiology and conservation | Multi-page project organization and visible theme attribution |
| [Mitchell Fennell](https://mitch-fen.github.io/) | Wildlife biology and conservation technology | GitHub Pages/AcademicPages structure and data-driven academic content |
| [Brian Lee](https://bhyleee.github.io/) | Landscape ecology and environmental data science | Compact homepage combining biography, research, outputs, and CV |
| [Christopher Dutton](https://cldutton.github.io/aboutme/) | Aquatic and microbial ecology | Clear separation of About, Research, Teaching, and Publications |
| [Luis D. Verde Arregoitia](https://luisdva.github.io/about/) | Macroecology and biodiversity data science | Research, publications, training, and posts in one personal site |

## Official documentation

### GitHub and GitHub Pages

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [HTTPS for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [GitHub Desktop](https://desktop.github.com/)

### Web standards and learning references

- [MDN: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN: `<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN: Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Schema.org Person](https://schema.org/Person)

### Alternative site-building platforms

These are included so readers can compare workflows before choosing GitHub:

- [Google Sites](https://sites.google.com/)
- [Wix](https://www.wix.com/)
- [Weebly](https://www.weebly.com/)
- [Squarespace](https://www.squarespace.com/)
- [WordPress.com](https://wordpress.com/)

## Feature-level provenance

| Feature | Provenance |
|---|---|
| One-page academic structure | A common pattern observed across several academic websites; implemented specifically for this project |
| Sticky navigation | Custom HTML/CSS implementation using standard web positioning |
| Expandable research cards | Custom implementation using the native HTML `<details>` and `<summary>` elements |
| Color variables | Custom CSS using standard custom properties |
| Desktop/tablet/mobile layouts | Custom CSS media queries |
| Current footer year | Small custom JavaScript using `Date().getFullYear()` |
| QR redirect | Custom utility page using standard JavaScript redirect, meta refresh, fallback link, and UTM parameters |
| GitHub Pages workflow | Summarized from official GitHub documentation |
| Search metadata | Standard HTML metadata, JSON-LD/Schema.org, `robots.txt`, and XML sitemap practices |

## Personal materials supplied for the example

The example site includes Antonia J. Millet's:

- writing;
- research descriptions;
- photographs;
- CV;
- QR code;
- professional links and identifiers.

These materials make the example complete but are not generic template assets. Their reuse terms are explained in [LICENSE.md](LICENSE.md).
