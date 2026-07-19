# Panhandle Automation website

This is a static website designed for free hosting on GitHub Pages. It has no build step and no paid backend requirement.

## Update the live website

1. Download and extract the ZIP.
2. Open the GitHub repository that currently publishes Panhandle Automation.
3. Choose **Add file → Upload files**.
4. Open the extracted folder and upload everything inside it—not the outer folder or ZIP.
5. Confirm that `index.html`, `styles.css`, `script.js`, `CNAME`, and the other files appear at the repository’s top level.
6. Commit the changes to the `main` branch.
7. Wait a few minutes for GitHub Pages to deploy, then refresh https://panhandleautomation.com/.

Keep the `CNAME` file. It preserves the `panhandleautomation.com` custom-domain setting.

## Lead form behavior

The free audit form opens a pre-addressed email in the visitor’s own email app. The visitor reviews and sends it to `jesse@panhandleautomation.com`. No form entries are stored by this static website.

## Recommended checks after upload

- Open the site on a phone and desktop.
- Submit a test audit request and confirm the email opens correctly.
- In GitHub **Settings → Pages**, keep **Enforce HTTPS** enabled.
- In Google Search Console, request indexing for the home page and submit `https://panhandleautomation.com/sitemap.xml`.

## Editing

Website copy is in `index.html`, styling is in `styles.css`, and interactions are in `script.js`. Update the privacy and terms pages if the business begins collecting data through analytics, hosted forms, payments, or other services.
