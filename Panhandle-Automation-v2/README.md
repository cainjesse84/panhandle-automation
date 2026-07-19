# Panhandle Automation v2

A beginner-friendly static website for **Panhandle Automation**. It uses only HTML, CSS, and JavaScript—no paid dependencies, build step, database, or API key.

## What is included

- Responsive landing page and service overview
- Interactive workflow demonstrations, clearly labeled as demos
- Browser-only quote estimator
- Browser-only lead assistant (not a live AI service)
- Contact form that opens the visitor's email app
- SEO metadata, structured business data, sitemap, and robots.txt
- Privacy policy and website terms starter pages
- GitHub Pages custom-domain file and free HTTPS support

## Preview before publishing

Open `index.html` in a web browser. The email actions require an email app to be configured on the device.

## Publish free with GitHub Pages

1. Sign in to GitHub and create a new **public** repository. A name such as `panhandle-automation` is fine.
2. On the new repository page, choose **uploading an existing file**.
3. Upload the **contents of this folder**. Make sure `index.html` is at the repository's top level, not inside another folder.
4. Add a short commit message such as `Launch Panhandle Automation website`, then choose **Commit changes**.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
7. Choose the `main` branch and `/ (root)`, then save.
8. Wait a few minutes. GitHub will show a temporary address ending in `github.io`.

## Connect panhandleautomation.com

The included `CNAME` file already tells GitHub which domain to use.

First, in GitHub open **Settings → Pages**, enter `panhandleautomation.com` under **Custom domain**, and save. GitHub recommends adding the domain to the repository before changing DNS to reduce domain-takeover risk.

Then, at your domain registrar, open the DNS settings and add these four **A** records for the root domain:

| Type | Name/Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Then add:

| Type | Name/Host | Value |
|---|---|---|
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

Replace `YOUR-GITHUB-USERNAME` with your real GitHub username. Remove conflicting A, AAAA, or CNAME records for `@` or `www`. Do **not** delete email-related MX or TXT records.

Return to **Settings → Pages** and wait for the DNS check to succeed. DNS updates can take up to 24–48 hours, although they are often faster. For added security, GitHub also lets you verify the domain under your account's **Settings → Pages** using a DNS TXT record.

## Free SSL / HTTPS

Do not buy an SSL certificate for GitHub Pages. After the DNS check succeeds, GitHub automatically provisions a certificate. In **Settings → Pages**, turn on **Enforce HTTPS**. The checkbox can remain unavailable until the certificate is ready.

## Get listed by Google

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain** property for `panhandleautomation.com`.
3. Google will give you a TXT record. Add it in your registrar's DNS settings without removing the existing records.
4. Complete verification in Search Console.
5. Open **Sitemaps**, enter `https://panhandleautomation.com/sitemap.xml`, and submit it.
6. Use **URL Inspection** for `https://panhandleautomation.com/` and request indexing.

Indexing is controlled by Google and is not guaranteed or immediate. For local discovery, create or complete a Google Business Profile using accurate business details.

## Optional: use a free hosted form

The included form uses `mailto:` so messages are not stored by the website. This is private and free, but it depends on the visitor having an email app configured.

For a smoother form later, create a free account with a static form provider such as Formspree. Follow its instructions to replace the contact form's behavior, and update `privacy.html` to name the provider and explain how submissions are processed. Free-plan limits and terms can change, so check them before launch.

## Before launch

- Confirm the domain spelling and business email.
- Replace or expand the service area only if accurate.
- Review the planning prices in `assets/app.js`.
- Have the privacy policy and terms reviewed for your business.
- Test every link on a phone and computer.

## Editing

Most wording is in `index.html`. Colors and layout are in `assets/styles.css`. Interactive behavior and quote ranges are in `assets/app.js`.
