# Mark Rainier Lopez | Computer Engineering Portfolio

A personal portfolio website for a Computer Engineering graduate (Magna Cum Laude, Bulacan State University) focused on IoT, embedded systems, and full-stack web development.

Built with plain **HTML, CSS, and JavaScript**. There is no framework, no build step, and no dependencies to install.

**Live site:** [mark-rainier-lopez-portfolio.vercel.app](https://mark-rainier-lopez-portfolio.vercel.app/)

---

## Features

- **Single-page layout.** Seven sections (Home, About, Resume, Projects, Skills, Credentials, Contact) switch without reloading the page.
- **Working back and forward buttons.** Each section has its own URL hash, so links such as `#projects` can be shared.
- **Dark mode.** The toggle saves your choice in the browser.
- **Responsive design.** Sidebar navigation on desktop, slide-out menu on mobile.
- **Interactive project cards.** Click a card to flip it for a quick summary.
- **Case studies.** Each project has a detailed window with the problem, how it works, key features, what was learned, and the tech stack.
- **Media viewers.** Photo galleries and a demo video for the projects.
- **Credentials section.** Degree honors and certificates, with links to the documents.
- **Keyboard support.** Esc closes any open window, and cards can be flipped with Enter or Space.

---

## Sections

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Home | Introduction and quick links |
| 2 | About | Background and focus |
| 3 | Resume | Professional overview and CV download |
| 4 | Projects | Smart Silong, Magic Scheduler, Miniature Traffic Light |
| 5 | Skills | Eight categories of technical skills |
| 6 | Credentials | Education honors and certificates |
| 7 | Contact | Email, phone, LinkedIn, GitHub, Facebook |

---

## Featured projects

| Project | Type | Stack |
|---------|------|-------|
| **Smart Silong** | Thesis project (software developer) | ESP32, Blynk IoT, DHT11, YL-83, MQ-135, solar power |
| **Magic Scheduler** | Personal project | React, Node.js, Express, MongoDB, REST API, Vercel |
| **Miniature Traffic Light** | Solo school project | 555 timer IC, 7474 D flip-flop, digital logic |

---

## Tech used

- **HTML5** for structure
- **CSS3** with custom properties for light and dark themes, grid and flexbox layout, and 3D card flips
- **Vanilla JavaScript** for navigation, theme, modals, and card behavior
- **Font Awesome 6.5.2** for icons (loaded from a CDN)
- **Google Fonts** (Inter and Space Mono, loaded from a CDN)

An internet connection is needed for icons and fonts to appear. Everything else works offline.

---

## Folder structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── resume.pdf
    ├── credentials/
    │   ├── magna.jpg
    │   ├── freecodecamp.jpg
    │   ├── tesda-ics.pdf
    │   ├── tesda-css.pdf
    │   └── tesda-network.pdf
    └── projects/
        ├── smart-silong.jpg          (card cover)
        ├── magic-scheduler.jpg       (card cover)
        ├── traffic.jpg               (card cover)
        ├── smart-silong-1.jpg        (gallery)
        ├── smart-silong-2.jpg        (gallery)
        ├── magic-scheduler-1.jpg     (gallery)
        ├── magic-scheduler-2.jpg     (gallery)
        ├── traffic-photo.jpeg        (gallery)
        └── traffic-demo.mp4          (demo video)
```

If a file is missing, its image or download will appear broken, so check that every file above exists before publishing.

---

## Run it locally

1. Download or clone the project.
2. Open `index.html` in any modern browser.

That's all. For a local server instead (optional):

```bash
# Python
python -m http.server 8000

# then open http://localhost:8000
```

---

## Customize it

| To change... | Edit... |
|--------------|---------|
| Text, links, project details, skills | `index.html` (each section is clearly commented) |
| Colors, fonts, spacing, dark mode | `style.css` (theme colors are CSS variables at the top) |
| Navigation, theme toggle, modal behavior | `script.js` |
| Profile photo | Replace `assets/profile.jpg` |
| Resume download | Replace `assets/resume.pdf` |
| Project card covers | Replace the three files named above in `assets/projects/` (keep the same names) |
| Project galleries | Replace the `-1` and `-2` images and the traffic photo and video |

Tips:
- Keep images under about 500 KB each for fast loading (JPG or WebP works well).
- Keep the same filenames when swapping images, and no code changes are needed.

---

## Deployment

The site is hosted on **Vercel** and the source code is stored on **GitHub**.

- **Live:** [mark-rainier-lopez-portfolio.vercel.app](https://mark-rainier-lopez-portfolio.vercel.app/)
- **Source:** [github.com/rainier-code](https://github.com/rainier-code)

Because the site is static, there is no build step. To update it:

1. Edit the files and commit the changes.
2. Push to GitHub.
3. Vercel redeploys automatically (usually within a minute).

To host your own copy, import the repository into Vercel or Netlify with default settings, or enable GitHub Pages under *Settings → Pages*.

---

## Browser support

Works in current versions of Chrome, Edge, Firefox, Safari, and mobile browsers. Dark mode preference is saved with `localStorage`.

---

## Contact

- **Email:** rainierlopez63@gmail.com
- **GitHub:** [github.com/rainier-code](https://github.com/rainier-code)
- **Portfolio:** [mark-rainier-lopez-portfolio.vercel.app](https://mark-rainier-lopez-portfolio.vercel.app/)
- **Magic Scheduler (live):** [magic-scheduler-mu.vercel.app](https://magic-scheduler-mu.vercel.app/)
- **Location:** Bulakan, Bulacan, Philippines

---

## License

© 2026 Mark Rainier Lopez. All rights reserved. The content, photos, and credentials are personal and may not be reused without permission.