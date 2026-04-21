# Sa Kib — Portfolio

A simple personal portfolio website built with React. This guide explains every
file in the project and how to make common changes without touching anything
you don't need to.

---

## 1. Project structure

```
Portfolio-master/
├── package.json          # Lists the libraries the project uses
├── package-lock.json     # Locked versions (don't edit by hand)
├── README.md             # This file
├── public/
│   ├── index.html        # Main HTML page that loads the React app
│   ├── favicon.png       # Browser tab icon
│   ├── manifest.json     # Web-app metadata
│   └── robots.txt        # Search-engine instructions
└── src/
    ├── index.js          # Starts the React app
    ├── App.js            # Sets up the page routes (Home / About / Projects / Resume)
    ├── App.css           # Small global styles for App
    ├── style.css         # Main stylesheet (colors, layout, animations)
    ├── data/
    │   └── projects.js   # ⭐ Your projects list (edit this to add projects)
    ├── Assets/           # Images, icons and the resume PDF
    │   ├── about.png
    │   ├── avatar.svg
    │   ├── home-main.svg
    │   ├── pre.svg
    │   ├── Soumyajit_Behera.pdf  (resume PDF used by the Resume page)
    │   └── TechIcons/    (logos shown on the About page)
    └── components/
        ├── Navbar.js     # Top navigation bar (the "Sa Kib" logo + Home / About / Projects)
        ├── Footer.js     # Bottom footer (copyright + social links)
        ├── Particle.js   # Background particle animation
        ├── Pre.js        # Page-loading bar
        ├── ScrollToTop.js# "Scroll to top" button
        ├── Home/
        │   ├── Home.js   # Hero section ("Hi There! I'M SA KIB")
        │   ├── Home2.js  # "Let me introduce myself" + Find Me On
        │   └── Type.js   # The animated typing text under the hero
        ├── About/
        │   ├── About.js  # About page wrapper
        │   ├── AboutCard.js  # ⭐ The "About Me" text
        │   ├── Techstack.js  # Tech logos grid
        │   ├── Toolstack.js  # Tools logos grid
        │   └── Github.js     # GitHub activity calendar
        ├── Projects/
        │   ├── Projects.js   # Renders the projects from data/projects.js
        │   └── ProjectCards.js  (legacy card component, no longer used)
        └── Resume/
            └── ResumeNew.js  # Resume page (shows the PDF)
```

### Which file controls which part of the website

| Part of the site            | File to edit                           |
|----------------------------|----------------------------------------|
| Top-left logo / brand text | `src/components/Navbar.js`             |
| Top navigation links       | `src/components/Navbar.js`             |
| Hero ("Hi There! I'M SA KIB") | `src/components/Home/Home.js`       |
| Animated typing text       | `src/components/Home/Type.js`          |
| "Let me introduce myself"  | `src/components/Home/Home2.js`         |
| About Me text              | `src/components/About/AboutCard.js`    |
| Projects list              | `src/data/projects.js`  ⭐             |
| Footer                     | `src/components/Footer.js`             |
| Colors, fonts, layout      | `src/style.css`                        |

---

## 2. How to add or remove projects (super easy)

You never need to edit any HTML or JSX. Just open one file:

**`src/data/projects.js`**

Add a new object to the `projects` array. Each project has 3 fields
(the `link` is optional):

```js
const projects = [
  {
    title: "My First Website",
    description: "A small responsive site I built to learn React.",
    link: "https://example.com",   // optional — leave empty "" for no link
  },
  {
    title: "Telegram Reminder Bot",
    description: "A bot that sends me daily reminders.",
    link: "",
  },
];

export default projects;
```

Save the file. The Projects section will update automatically the next time
the website loads. To remove a project, just delete its block.

If the array is empty (`const projects = [];`), the Projects section shows
a friendly "No projects yet" message instead of being broken.

---

## 3. How to change other text

### Change the top-left brand name
Open `src/components/Navbar.js` and change the text inside the
`<Navbar.Brand>` tag (currently `Sa Kib`).

### Change the About Me text
Open `src/components/About/AboutCard.js` and edit the text inside the
`<p>` tags.

### Change the hero name ("I'M SA KIB")
Open `src/components/Home/Home.js` and edit the `<strong className="main-name">`
text.

### Change the animated typing words
Open `src/components/Home/Type.js` and edit the `strings` array.

### Change footer text or social links
Open `src/components/Footer.js`.

---

## 4. Run the project locally

You need [Node.js](https://nodejs.org/) installed (version 16 or newer).

```bash
# 1. Install dependencies (only the first time)
npm install

# 2. Start the development server
npm start
```

This opens the site at **http://localhost:3000** and reloads automatically
whenever you save a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## 5. Build for production

```bash
npm run build
```

This creates an optimized `build/` folder you can upload to any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, your own server, etc.).

### Quick deploy options

#### Deploy on Vercel (recommended — easiest)

This project already includes a `vercel.json` file, so deployment is one-click.

**Option A — From the Vercel website (no command line):**
1. Push this folder to a GitHub / GitLab / Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Create React App. Just click **Deploy**.
4. Done — you'll get a free `your-project.vercel.app` URL.

**Option B — From your terminal:**
```bash
npm install -g vercel
vercel        # first time: follow the prompts
vercel --prod # deploy to production
```

The included `vercel.json` does two things:
- Tells Vercel to build with `npm run build` and serve the `build/` folder.
- Adds an SPA rewrite so deep links like `/about` and `/project` work after
  refresh (instead of returning 404).

#### Other hosts

- **Netlify:** drag and drop the `build/` folder onto https://app.netlify.com/drop,
  or connect the repo (build command `npm run build`, publish directory `build`).
- **GitHub Pages:** install `gh-pages` and run `npm run deploy` (you may need
  to add a `homepage` field in `package.json` and a `deploy` script).

---

## 6. Tips

- **Don't break the design** — only change text and the projects file unless
  you know CSS.
- **Keep file names the same** — components import each other by name.
- **After editing, refresh the browser** — `npm start` usually does it for you.

That's it! Happy editing.
