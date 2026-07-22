# 5. Publish and Test Your Website

[← Previous: Add your content and customize the design](04-add-content-and-customize-design.md) · [Return to the main guide](../README.md) · [Next: Help search engines find your website →](06-help-search-engines-find-website.md)

Your website now works on your computer. In this chapter, you will place the files in a GitHub repository and publish them with GitHub Pages.

Choose one publishing method below. [GitHub Desktop](https://desktop.github.com/) is usually easier for repeated updates. Browser upload is useful for a small first upload.

## 5.1 Create the website repository

A personal GitHub Pages site uses the address:

```text
https://YOUR-USERNAME.github.io/
```

The repository must be named:

```text
YOUR-USERNAME.github.io
```

Replace `YOUR-USERNAME` with your exact GitHub username. For example, the user `antoniajmillet` uses `antoniajmillet.github.io`.

## 5.2 Publish with GitHub Desktop

1. Install [GitHub Desktop](https://desktop.github.com/) and sign in to your GitHub account.
2. Choose File → New repository.
3. Name the repository `YOUR-USERNAME.github.io`.
4. Choose where to save it and create the repository.
5. Open the repository folder on your computer.
6. Copy the contents of `my-academic-website` into the repository folder.

At the top level of the repository, you should see:

```text
YOUR-USERNAME.github.io/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
└── assets/
```

Copy the contents of `my-academic-website`, not the outer folder itself. `index.html` must be at the top level of the repository.

Return to GitHub Desktop. Write a short summary such as Add academic website, select Commit to main, and then select Publish repository. Use a public repository for the simplest GitHub Pages setup.

## 5.3 Alternative: upload through the GitHub website

1. Create a new public repository named `YOUR-USERNAME.github.io`.
2. Open the repository and select Add file → Upload files.
3. Upload the contents of `my-academic-website`.
4. Commit the changes.

For later updates, GitHub Desktop is usually easier than repeatedly uploading files through the browser.

## 5.4 Turn on GitHub Pages

1. Open the repository on GitHub.
2. Select Settings.
3. In the sidebar, select Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select the main branch and the root folder.
6. Save.

GitHub Pages may take several minutes to publish the first version. Then open:

```text
https://YOUR-USERNAME.github.io/
```

## 5.5 Test the public website

Test the published site again. Check:

- the homepage loads;
- the design and fonts appear;
- every image loads;
- the CV opens;
- navigation and external links work;
- the site works on a phone;
- no reference-owner information remains.

## 5.6 Update the website later

The update cycle is:

```text
Edit → Save → Review → Commit → Push → Wait for deployment
```

A commit is a named save point. A push sends the commit to GitHub.

Useful commit messages include:

```text
Update research project descriptions
Replace CV
Fix mobile navigation
Add publication link
```

## 5.7 Troubleshooting

### The site shows a 404 page

- confirm that the repository name exactly matches `YOUR-USERNAME.github.io`;
- confirm that Pages is publishing from `main` and the root folder;
- confirm that `index.html` is at the repository root;
- check the Actions tab for a failed deployment.

### The HTML loads but the design does not

Confirm that `styles.css` is uploaded at the path used in `index.html`.

### Images work locally but not online

Check every folder and filename for capitalization differences.

### A recent change is missing

- confirm that the file was saved;
- confirm that the change was committed and pushed;
- wait for the Pages deployment to finish;
- open a private browser window or perform a hard refresh.

## Checkpoint

Before continuing, you should have:

- a repository named `YOUR-USERNAME.github.io`;
- `index.html` at the repository root;
- a successful Pages deployment;
- a working public website URL;
- working images, links, and CV;
- a process for committing and publishing future updates.

[← Previous: Add your content and customize the design](04-add-content-and-customize-design.md) · [Return to the main guide](../README.md) · [Next: Help search engines find your website →](06-help-search-engines-find-website.md)
