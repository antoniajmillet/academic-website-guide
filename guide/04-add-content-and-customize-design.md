# 4. Add Your Content and Customize the Design

[← Previous: Understand your website files](03-understand-website-files.md) · [Return to the main guide](../README.md) · [Next: Publish and test your website →](05-publish-and-test-website.md)

In Chapter 3, you explored the reference website and learned how its files work together. Now you will create an editable copy and begin building your own website.

The reference files give you a working structure so you do not have to begin with blank HTML and CSS files. Your content plan and design notes—not the reference website—should determine what your finished website includes and how it looks.

Work through one section at a time. Save and preview the website after each change so mistakes are easier to find.

## 4.1 Download and copy the working files

Open the [`academic-website-guide` repository on GitHub](https://github.com/antoniajmillet/academic-website-guide), select the green Code button, and choose Download ZIP. Open the downloaded ZIP file and move the extracted folder somewhere easy to find.

Inside it, locate `reference-website`. Duplicate that folder and rename the copy:

```text
my-academic-website
```

Keep the original `reference-website` folder unchanged so you can return to it if something breaks.

## 4.2 Open and preview your website

Open [Visual Studio Code](https://code.visualstudio.com/), select File → Open Folder, and choose the entire `my-academic-website` folder.

Preview the site by opening `index.html` in a browser or by using the Live Server extension. Keep the browser open while you edit. After each change:

1. save the file;
2. refresh the browser;
3. confirm that the change appears correctly.

## 4.3 Replace the reference owner’s information

Before changing the design, replace the information that identifies the reference website’s owner.

In Visual Studio Code, use **Find in Files**:

```text
Mac: Command + Shift + F
Windows: Ctrl + Shift + F
```

Search for:

```text
Antonia
Millet
antoniajmillet
ajordanmillet
Florida Atlantic University
```

Review each result individually. Do not use Replace All until you understand every place where the text appears.

Replace the name, position, institution, biography, research descriptions, email, professional profiles, website URL, and footer information.

Some information appears on the visible page. Other information appears near the top of `index.html` and helps browsers identify the site. At this stage, update the page title, page description, visible introduction, institutional information, professional links, and footer.

### Check tracking and QR materials

The reference files do not include a Google Analytics tag. If you adapt a different website that contains one, remove its tag and add your own in Chapter 7.

Remove the copied `go/` folder and QR-code files from your working site. You will create your own redirect and QR code in Chapter 8.

## 4.4 Add your content one section at a time

Use the writing you prepared in Chapter 1. Update and preview one section before moving to the next.

1. Home
2. About
3. Research or Projects
4. Publications
5. Teaching or Mentoring
6. Contact

### Home

Replace the opening content with your name, current position and institution, research or professional identity, short introduction, and the most important links you want visitors to see first.

### About

Replace the biography with your own About text. Keep the paragraph tags while replacing the words:

```html
<p>Your first paragraph...</p>
<p>Your second paragraph...</p>
```

### Research or Projects

Replace every project title, preview, detailed description, status, and link with your own work.

```html
<h4>Root-to-Flower Cascades</h4>
```

might become:

```html
<h4>Your Project Title</h4>
```

### Publications

Include the format that fits your current work: a Google Scholar link, selected publications, posters, presentations, a thesis, or work in progress. Remove an empty section.

### Teaching or Mentoring

Replace the reference text with the teaching, mentoring, outreach, or service activities that are important to you. Remove the section if it does not fit your website.

### Contact

Update your email, Google Scholar, ORCID, GitHub, institutional profile, and any other professional links. Open each link to confirm that it reaches the correct destination.

## 4.5 Add, remove, or reorder sections and projects

Your website does not need to follow the same order as the reference website.

A major section begins with an opening tag and ends with a matching closing tag:

```html
<section id="research">
  ...
</section>
```

When moving or removing a section, work with the entire block. If you add a section, also add a matching navigation link and any styling it needs.

```html
<a href="#teaching">Teaching</a>
<section id="teaching">
```

The words after `#` and inside `id=""` must match.

### Project cards

Each expandable project card begins with `<details class="project-card">` and ends with `</details>`. Copy or delete the entire block, not only the visible text. Use the [project-card code note](../code-notes/project-cards.md) when you need more detail.

## 4.6 Replace the images and CV

### Images

Place your website images in `assets/images/`. Use short, descriptive filenames written in lowercase with hyphens:

```text
about.jpeg
pollinator-fieldwork.jpeg
soil-microbiome-project.jpeg
pollen-library.jpeg
```

Update the matching `src` value and `alt` text in `index.html`:

```html
<img
  src="assets/images/pollinator-fieldwork.jpeg"
  alt="Researcher observing pollinators at a field site"
>
```

Crop and compress very large photographs before publishing, and keep the original files somewhere outside the website folder.

### CV

Place your current CV PDF in `assets/documents/`. A stable filename such as `cv.pdf` is easier to update later.

```html
<a href="assets/documents/cv.pdf">CV</a>
```

Delete the reference owner’s CV after every link points to your own file.

## 4.7 Customize the colors, fonts, and layout

Return to your design notes from Chapter 2. Open `styles.css` and start with the color variables near the top:

```css
:root {
  --ink: #203039;
  --coral: #d95f47;
  --marigold: #efb84f;
  --teal: #24736c;
}
```

Change one value at a time, save, and check the page. Fonts may be linked in `index.html` and assigned in `styles.css`, so update both places when replacing a font.

After your content is in place, adjust the order of sections, paragraph widths, image placement, spacing, card columns, buttons, or section colors. Make one change at a time.

## 4.8 Test the website

View the site in a wide browser window, then slowly make the window narrower. Check that navigation, text, images, project cards, buttons, and headings remain usable.

Also test:

- every navigation link;
- every external link;
- email links;
- CV;
- Google Scholar, ORCID, and GitHub;
- project links;
- images and `alt` text;
- expandable project cards;
- desktop and mobile layouts.

Ask another person what they understand about you first and whether anything is difficult to find or confusing.

## 4.9 Search for anything you missed

Use Find in Files one final time. Search for the reference owner’s name, email, institution, usernames, website URL, CV filename, Analytics ID, and QR destination.

Also search for placeholder wording such as:

```text
Your Name
Your Project Title
example.com
YOUR-USERNAME
```

Do not publish until every remaining result is either your own information or an example intentionally kept in the guide.

## Checkpoint

Before continuing, you should have:

- created a separate working website folder;
- replaced the reference owner’s visible and hidden information;
- added your own writing and project descriptions;
- added or removed sections based on your plan;
- replaced the images, image descriptions, CV, and links;
- customized the colors, fonts, and layout;
- tested the site on desktop and mobile;
- searched the full folder for anything you may have missed.

[← Previous: Understand your website files](03-understand-website-files.md) · [Return to the main guide](../README.md) · [Next: Publish and test your website →](05-publish-and-test-website.md)
