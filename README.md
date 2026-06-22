# Data Structure Notes

This is a VitePress personal blog for data structure notes.

## Local Writing

Install dependencies:

```bash
npm ci
```

Start the local preview server:

```bash
npm run docs:dev
```

Build before publishing:

```bash
npm run docs:build
```

## Online Publishing

This project is configured for GitHub Pages.

1. Create a GitHub repository and push this project to the `main` branch.
2. Open the repository settings on GitHub.
3. Go to `Pages`.
4. Set `Build and deployment` > `Source` to `GitHub Actions`.
5. Push changes to `main`.

After each push, GitHub Actions will rebuild and publish the blog automatically.

## Writing Notes

Use the `writing-format.md` page as the template for each chapter. Keep all chapter content in English.
