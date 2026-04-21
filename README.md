# Sa Kib — Personal Portfolio Website

## 1. Project Overview

This is a **fully customizable personal portfolio website** built with React.js.  
It showcases your name, introduction, about section, projects, and resume — and every single piece of content is yours to change at any time.  
Nothing in this project is locked, hardcoded, or permanent. You have full control over the entire website.

---

## 2. Full Editable System

- **Every file in this project is fully editable** — nothing is hidden or protected.
- Nothing is locked or fixed permanently.
- You can modify any text, image, color, layout, link, or data as needed.
- No advanced technical experience is required for basic content changes (name, projects, social links, about text).

---

## 3. File-by-File Explanation

| File / Folder | What It Does |
|---|---|
| `public/index.html` | Page title and meta tags shown in browser tabs and search engines |
| `src/components/Home/Home.js` | Hero section — your name displayed prominently on the homepage |
| `src/components/Home/Home2.js` | Introduction section — your "About Me" paragraph and social media links |
| `src/components/Home/Type.js` | The animated typing text under your name on the homepage |
| `src/components/Navbar.js` | Navigation bar — your brand name and all menu links |
| `src/components/Footer.js` | Footer — copyright line and social media links |
| `src/components/About/AboutCard.js` | The About page text card — your full about description |
| `src/components/About/Techstack.js` | Technology icons shown on the About page |
| `src/components/About/Toolstack.js` | Tools icons shown on the About page |
| `src/components/Projects/Projects.js` | Projects page — reads project data automatically, no changes needed here |
| `src/data/projects.js` | **All projects data lives here** — add, edit, or remove projects easily |
| `src/Assets/Sa_Kib_CV.pdf` | Your resume/CV file — replace this with your own PDF |
| `src/Assets/` | All images and icons — can be replaced or removed |
| `src/style.css` | Full design, layout, colors, spacing — all fully editable |
| `src/App.css` | Additional component-level styles |
| `src/index.css` | Global base styles for the whole site |

---

## 4. What Can Be Modified Easily

### Name
- `src/components/Home/Home.js` — change `Sa Kib` in the hero heading
- `src/components/Navbar.js` — change `Sa Kib` in the top-left brand area
- `src/components/Footer.js` — update the copyright name at the bottom
- `src/components/Home/Home2.js` — update the name in the introduction paragraph

### About Me Text
- Open `src/components/Home/Home2.js`
- Edit the paragraph inside `<p className="home-about-body">` with your own words
- Also open `src/components/About/AboutCard.js` for the full About page text

### Projects (Add / Remove Anytime)
- Open `src/data/projects.js`
- Add or remove project objects from the array — the website updates automatically
- Each project only needs 3 simple fields: `title`, `description`, and `link` (optional)

### Social Links (Facebook, Instagram, GitHub)
- Open `src/components/Home/Home2.js` — update the `href` values in the social icons section
- Open `src/components/Footer.js` — update the matching links in the footer

### UI Styling (Colors, Fonts, Spacing)
- Open `src/style.css` — every visual property is editable here
- Change colors, font sizes, padding, margins — all in one place

### Resume / CV File
- Replace `src/Assets/Sa_Kib_CV.pdf` with your own PDF — keep the same filename
- Or update the import line inside `src/components/Resume/ResumeNew.js` to match your new filename

---

## 5. Projects System

Projects are **not hardcoded inside any HTML file**. They are fully dynamic:

- All project data is stored in `src/data/projects.js`
- The website reads this file automatically and renders every project on the Projects page
- To **add** a project, open `src/data/projects.js` and add a new object to the array:

```js
{
  title: "My New Project",
  description: "A short description of what this project does.",
  link: "https://github.com/yourusername/project",  // optional — remove if not needed
}
```

- To **remove** a project, delete its object from the array
- No changes are needed in any HTML, layout, or component file — it all updates automatically
- If the array is empty, the page shows a friendly message instead of breaking

---

## 6. Important Note

- This entire project is **fully customizable** — there is no hardcoded or locked content
- Every file is safe to open and modify
- Content-only changes (text, links, project data) will never break the design or layout
- If you change something and want to revert, simply restore the original text

---

## 7. Goal

This README is written to be **beginner-friendly**.  
Anyone — even without coding experience — can open any file listed above, make their changes, save the file, and the website will reflect the update immediately.  
No special tools, no complex setup, and no advanced knowledge required for everyday customization.

---

## 8. Run the Project Locally

You need [Node.js](https://nodejs.org/) installed (version 16 or newer).

```bash
# Install dependencies (only needed once)
npm install

# Start the development server
npm start
```

The site opens at **http://localhost:3000** and reloads automatically when you save any file.

## 9. Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder you can upload to any static host such as Vercel, Netlify, or GitHub Pages. The included `vercel.json` file makes one-click Vercel deployment work out of the box.
