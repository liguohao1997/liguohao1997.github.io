# Guohao Li Academic Website

This is a simple static academic website for GitHub Pages. It does not use Jekyll or a complex theme.

## File structure

```text
.
├── index.html
├── zh.html
├── .nojekyll
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/avatar-placeholder.svg
└── .github/workflows/pages.yml
```

## Deployment on GitHub Pages

1. Create or open your repository, for example `liguohao1997.github.io`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `master` or `main`. The workflow in `.github/workflows/pages.yml` will deploy the site.

## Customization

- Replace `assets/img/avatar-placeholder.svg` with your own portrait image, for example `guohao.jpg`.
- If you change the image filename, update the `<img>` tag in `index.html` and `zh.html`.
- Update publication links when DOI, journal pages, or working paper PDFs are ready.
- Avoid uploading private information such as personal phone number, birth date, home address, or internal documents.
