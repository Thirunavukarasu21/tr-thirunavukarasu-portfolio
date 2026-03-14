# Cybersecurity Portfolio — T.R Thirunavukarasu

A modern, interactive resume/portfolio built with **React.js**, **Tailwind CSS**, and **Vite**.

## Features

- **Responsive** layout (mobile-friendly)
- **Animated skill bars** for technical skills
- **Interactive project cards** with hover effects
- **Section navigation** (desktop) for quick jumps
- **Export to PDF** via the "Export to PDF" button (uses browser print → Save as PDF)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

The app is a static site (HTML, CSS, JS). After `npm run build`, the output is in the `dist` folder. You can deploy that to any static host.

### Option 1: Vercel (recommended, free)

1. Push your code to **GitHub** (if you haven’t already).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New** → **Project** and import your `Portfolio` repo.
4. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
5. Click **Deploy**. You’ll get a URL like `https://your-project.vercel.app`.

From the repo root you can also use the CLI:

```bash
npx vercel
```

### Option 2: Netlify (free)

1. Push your code to **GitHub**.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect GitHub and select your repo.
4. Set **Build command**: `npm run build`, **Publish directory**: `dist`.
5. Deploy. You’ll get a URL like `https://your-site.netlify.app`.

Or drag and drop the `dist` folder (after `npm run build`) into [app.netlify.com/drop](https://app.netlify.com/drop).

### Option 3: GitHub Pages

1. Push your repo to GitHub.
2. Install the deploy workflow: `npm install -D gh-pages`.
3. In `package.json`, add a `"homepage"` and two scripts:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. In `vite.config.js`, set the base for GitHub Pages:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Portfolio/',
   })
   ```

5. Run:

   ```bash
   npm run deploy
   ```

6. In GitHub: **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `gh-pages` → Save.  
   Site URL: `https://YOUR_USERNAME.github.io/Portfolio`.

---

Use **Vercel** or **Netlify** if you want a custom domain and automatic deploys on every push with no extra config.

## Customize

- **Project links**: Update the `link` prop in the `ProjectCard` components in `src/App.jsx` (currently `#`) with your GitHub or live demo URLs.
- **Location**: Currently set to "Tamil Nadu, India"; change in the header section if needed.
