# Happy Birthday, Varsha 🎂

A little interactive birthday page:
1. A wooden corkboard wall of pinned photos.
2. A cake with 5 candles — each candle reveals one wish when tapped.
3. Once all 5 candles are blown out, a "memories" gallery of you two + group photos fades in.

---

## 1. Add your real photos

Right now the `images/` folder is filled with **placeholder** pictures so the
page works immediately. Replace them with your own photos before you publish.

```
images/
├── wall/          → the corkboard wall (8 photos)
│   ├── wall-1.jpg
│   ├── wall-2.jpg
│   ├── wall-3.jpg
│   ├── wall-4.jpg
│   ├── wall-5.jpg
│   ├── wall-6.jpg
│   ├── wall-7.jpg
│   └── wall-8.jpg
└── memories/      → the reveal-after-wishes gallery (6 photos)
    ├── memory-1.jpg
    ├── memory-2.jpg
    ├── memory-3.jpg
    ├── memory-4.jpg
    ├── memory-5.jpg
    └── memory-6.jpg
```

**Easiest way:** just save your photos with the exact same file names above
(same folder, same names) and they'll drop straight in — no code changes
needed.

**Want different file names, more photos, or fewer?**
Open `index.html` and look for the `<figure class="pin ...">` blocks (for
the wall) or `<figure class="polaroid ...">` blocks (for the memories
gallery). Each one is just:
```html
<figure class="pin r1"><span class="clip"></span><img src="images/wall/wall-1.jpg" alt="..."></figure>
```
Change the `src` to your file's path, or copy/paste a whole block to add
more photos. For the memories section you can also edit the small caption
in `<figcaption>2022</figcaption>`.

You can also edit the 5 wishes — search `wish-list` in `index.html` and
`aria-label` text near the candles in the same file.

Photos don't need to be perfectly sized — the CSS crops them to fit, but
portrait-ish photos work best on the wall and landscape/group shots work
best in the memories grid.

---

## 2. Preview it locally

Just double-click `index.html` to open it in your browser — no server
needed. If images don't show up, double-check the file names match exactly
(including `.jpg` vs `.png` — if your photo is a `.png`, either rename it
to end in `.jpg`... or, cleaner, update the `src="..."` in `index.html` to
say `.png` instead).

---

## 3. Upload to GitHub (and host it for free with GitHub Pages)

### A. Create the repository
1. Go to [github.com](https://github.com) and log in (create a free account
   if you don't have one).
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `varsha-birthday`.
4. Keep it **Public** (GitHub Pages needs this on the free plan).
5. Don't check "Add a README" — you already have one. Click **Create repository**.

### B. Push your project folder
Open a terminal, `cd` into this `varsha-birthday` folder, then run:

```bash
git init
git add .
git commit -m "birthday page for Varsha"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/varsha-birthday.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. If you don't have
`git` installed, download it from [git-scm.com](https://git-scm.com/downloads)
first.

If asked to log in, use your GitHub username and a **Personal Access Token**
as the password (GitHub no longer accepts your regular password over the
command line) — generate one under GitHub → Settings → Developer settings →
Personal access tokens.

### C. Turn on GitHub Pages
1. In your repository on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait about a minute, then refresh the page — GitHub will show you a live
   link like:
   ```
   https://YOUR-USERNAME.github.io/varsha-birthday/
   ```
5. That link is the page you send to Varsha. 🎉

### D. Making changes later
Whenever you edit a file (swap a photo, change a wish):
```bash
git add .
git commit -m "update photos"
git push
```
GitHub Pages will automatically redeploy within a minute or two.

---

## Folder structure reference

```
varsha-birthday/
├── index.html          ← the page itself
├── css/
│   └── style.css        ← all styling (colors, corkboard, candles, layout)
├── js/
│   └── script.js         ← candle-blow interaction + confetti + reveal logic
├── images/
│   ├── wall/              ← 8 corkboard photos
│   └── memories/           ← 6 reveal-gallery photos
└── README.md             ← this file
```
