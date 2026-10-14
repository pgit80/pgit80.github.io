# Personal website (React + Vite)

A small, editable personal site: one scrolling home page, plus a separate blog page.

## What to edit

| What                                   | Where                    |
| -------------------------------------- | ------------------------ |
| Name, photo, about, contact            | `src/data/profile.js`    |
| Work experience, education             | `src/data/profile.js`    |
| Google Drive links, resume setting     | `src/data/profile.js`    |
| Blog posts and Medium links            | `src/data/posts.js`      |
| Your photo                             | `public/profile.svg` (or add `public/me.jpg` and set `photo: asset("me.jpg")`) |
| Your resume                            | replace `public/resume.pdf` |
| Colours and fonts                      | top of `src/styles.css`  |

You never need to touch the components to update your details.

## Run it on your computer

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Deploy to GitHub Pages (free)

1. Create a new repository on GitHub and push this project to the `main` branch.
2. On GitHub, open **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push any change to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
4. Your site appears at `https://<your-username>.github.io/<repo-name>/`
   (name the repo `<your-username>.github.io` to get `https://<your-username>.github.io/`).

Every later edit: change the data files, commit, push. The site updates in a minute or two.

## Notes

- Blog URLs look like `/#/blog` because GitHub Pages has no server to handle normal routes. That is expected.
- If the resume preview is blank in your browser, the buttons above it still work. Set `embed: false` in `resume` to hide the preview.
- If you use a Google Drive link for the resume, embedding may be blocked by Drive; use `embed: false`.
