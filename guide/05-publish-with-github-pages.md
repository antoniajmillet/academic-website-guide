# 5. Publish With GitHub Pages

[← Previous: Customize your content](04-customize-your-content.md) · [Return to the main guide](../README.md) · [Next: Search and indexing →](06-search-and-indexing.md)

This chapter uses a **user site**, which produces the clean address:

```text
https://YOUR-USERNAME.github.io/
```

GitHub's current quickstart instructs users to create a repository named:

```text
YOUR-USERNAME.github.io
```

Replace `YOUR-USERNAME` with the exact GitHub username.

## Option A: GitHub Desktop

GitHub Desktop is often the easiest workflow for a beginner because it provides buttons for the common Git actions.

### 1. Install the software

Install:

- [GitHub Desktop](https://desktop.github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

Sign into GitHub Desktop.

### 2. Create the local repository

In GitHub Desktop:

1. Choose **File → New repository**.
2. Name it `YOUR-USERNAME.github.io`.
3. Choose where to save it.
4. Create the repository.

### 3. Add the website files

Open the repository folder on your computer.

Copy the **contents** of your customized website folder into it:

```text
YOUR-USERNAME.github.io/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── assets/
└── go/
```

`index.html` must be at the publishing root, not trapped inside another folder.

Incorrect:

```text
YOUR-USERNAME.github.io/
└── my-academic-website/
    └── index.html
```

Correct:

```text
YOUR-USERNAME.github.io/
└── index.html
```

### 4. Commit the files

Return to GitHub Desktop.

You should see a list of changed files.

1. Write a short summary such as `Add academic website`.
2. Select **Commit to main**.
3. Select **Publish repository**.
4. Keep the repository public when using GitHub Free for GitHub Pages.
5. Publish it.


## Option B: Upload through the GitHub website

This works for a small first upload.

1. Create a new repository named `YOUR-USERNAME.github.io`.
2. Open the repository.
3. Select **Add file → Upload files**.
4. Drag in the website files and folders.
5. Commit the changes.

For repeated updates, GitHub Desktop is usually easier than uploading folders through the browser.

## Turn on GitHub Pages

For a simple static site:

1. Open the repository on GitHub.
2. Select **Settings**.
3. In the sidebar, select **Pages**.
4. Under the publishing source, choose deployment from a branch.
5. Select the `main` branch and the root folder.
6. Save.

GitHub Pages may take several minutes to publish the first version.


Open:

```text
https://YOUR-USERNAME.github.io/
```

## Update the website later

The cycle is:

```text
Edit → Save → Review changes → Commit → Push → Wait for deployment
```

A commit is a named save point. A push sends local commits to GitHub.

Useful commit messages include:

```text
Update research project descriptions
Replace CV
Fix mobile navigation
Add new publication link
```

## Add a custom domain later

GitHub Pages supports custom domains. Configure the domain in the repository's Pages settings before changing DNS records with the domain provider. GitHub also supports HTTPS for correctly configured Pages domains.

Do not purchase a domain before the default `github.io` version works.

Official instructions:

- [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing a Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Use a permanent QR redirect

Printed QR codes cannot be edited after they are distributed. Instead of encoding the homepage directly, point the QR code to a redirect page such as:

```text
https://YOUR-USERNAME.github.io/go/website/
```

That redirect can send visitors to the current homepage or a future custom domain.

The included example uses:

- a JavaScript redirect;
- an HTML meta refresh as a backup;
- a visible fallback link;
- UTM parameters for analytics;
- `noindex` so the redirect utility page is not treated as a search result.

See [Analytics and redirects](../code-notes/analytics-and-redirects.md).

## Update `robots.txt` and `sitemap.xml`

Replace the example URL in both files.

`robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-USERNAME.github.io/sitemap.xml
```

`sitemap.xml`:

```xml
<loc>https://YOUR-USERNAME.github.io/</loc>
```

Update the `lastmod` date when making a substantial revision.

## Troubleshooting

### The site shows a 404 page

Check:

- repository name;
- Pages settings;
- whether `index.html` is at the root;
- whether the repository is public when required by the plan;
- deployment status under the repository's Actions tab.

### The HTML loads but the design does not

Check that `styles.css` is uploaded at the path used in `index.html`.

### Images work locally but not online

Check capitalization. GitHub Pages is stricter than many personal computers.

### A recent change is missing

Check whether:

- the file was saved;
- the change was committed;
- the commit was pushed;
- the Pages deployment completed;
- the browser is showing a cached copy.

## Official GitHub references

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Final checkpoint

You should have:

- a repository named `YOUR-USERNAME.github.io`;
- `index.html` at the root;
- a successful Pages deployment;
- a working website URL;
- working images, links, and CV;
- updated metadata, sitemap, and QR destination;
- a simple process for committing future updates.

[← Previous: Customize your content](04-customize-your-content.md) · [Return to the main guide](../README.md) · [Next: Search and indexing →](06-search-and-indexing.md)
