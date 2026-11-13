# Portfolio

A responsive personal portfolio and resume site built with React and Vite. Every piece of content is driven by `data/resume.json`, served at runtime through `/api/resume`.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Setup and run

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

Production build and local preview:

```bash
npm run build
npm run preview
```

Both `dev` and `preview` serve `GET /api/resume`, so the data layer behaves the same in both modes.

## Updating content

All visible text comes from `data/resume.json`. Edit that file, save, and the page reloads. No component changes needed.

Schema:

```json
{
  "personalInfo": {
    "name": "",
    "title": "",
    "summary": "",
    "email": "",
    "phone": "",
    "location": "",
    "available": true,
    "photo": "",
    "socialLinks": [{ "label": "", "url": "" }]
  },
  "notes": {
    "skills": "",
    "experience": "",
    "projects": "",
    "certifications": ""
  },
  "gallery": [{ "src": "", "alt": "" }],
  "skills": [{ "category": "", "note": "", "items": [""] }],  "experience": [
    {
      "company": "",
      "role": "",
      "startDate": "",
      "endDate": "",
      "location": "",
      "description": [""]
    }
  ],
  "projects": [
    {
      "title": "",
      "organization": "",
      "duration": "",
      "description": [""],
      "techStack": [""],
      "liveUrl": "",
      "repoUrl": ""
    }
  ],
  "education": [
    {
      "institute": "",
      "degree": "",
      "startYear": "",
      "endYear": "",
      "location": "",
      "highlights": [""]
    }
  ],
  "certifications": [
    { "title": "", "issuer": "", "year": "", "description": "" }
  ]
}
```

Notes:

- The first item in `projects` renders as the featured full-width card.
- `projects.liveUrl` also drives the card's `Live` / `Private` badge. Any project without a `liveUrl` is marked `Private` automatically, so the badge can never disagree with the link.
- `projects.description` accepts either a string or an array of strings. Arrays render as a bullet list, and the featured card splits them into two columns on large screens.
- `projects.organization` and `projects.duration` render as a muted meta row above the title.
- `experience.location`, `education.location` and `education.highlights` are optional additions used by the current resume.
- An empty `endDate` renders as `Present`.
- `photo` accepts a URL or a path under `public/`. The hero uses `/images/preetam-hero.jpg`, cropped to a 4:5 portrait frame. If `photo` is empty, initials are shown instead.
- `gallery` renders as a row of square photos in the About section. Every entry needs a meaningful `alt` because these are content images, not decoration. Add or remove entries freely, and the layout adapts.
- Empty sections render an empty state instead of breaking the layout.
- `personalInfo.available` renders the "Available for new projects" pill in the hero. Set it to `false` to hide the pill.
- `skills[].note` renders a one-line explanation under each skill category heading.
- The top-level `notes` object adds a closing line under `skills`, `experience`, `projects` and `certifications`. Any missing key is simply omitted.
- Hero stats (years, projects, technologies) are computed from `experience`, `projects` and `skills`. They are never hardcoded, so they stay accurate as you edit the data. Delete a role and the years follow.
- `public/resume.pdf` backs the three "Download resume" buttons (hero, experience, contact). The file must exist or the download will serve the HTML shell instead.

## Themes

The navbar toggle switches between a dark and a light theme. The choice is stored in `localStorage` under `portfolio-theme`.

- On first visit the theme follows `prefers-color-scheme`, defaulting to dark when the system expresses no preference.
- `index.html` sets `data-theme` before the first paint, so the correct theme is never flashed.
- `useTheme` owns the state and applies it to `document.documentElement`, while also keeping the `theme-color` meta tag in sync.
- All colors, glows, shadows and glass surfaces are tokens in `src/styles/variables.css`. The `[data-theme='light']` block only overrides tokens, so components never know which theme is active.
- When adding a color, add a token instead of hardcoding it, and define both the `:root` and `[data-theme='light']` values.

## Project structure

```
data/resume.json               all content
server/resumeApi.js            GET /api/resume middleware
vite.config.js                 registers the API middleware for dev and preview
src/
  app-level: main.jsx, App.jsx
  components/common/           Button, Card, Badge, Section, SectionTitle, SectionNote,
                               Container, Loader, ErrorMessage, EmptyState, Avatar,
                               PhotoGallery, SocialLinks, DetailList, ThemeToggle,
                               AvailabilityPill, ResumeButton
  components/layout/           Header, Navigation, NavLinks, MobileMenu, Footer, SkipLink, ResumeContent
  components/sections/         Hero, HeroStats, About, Skills, Experience, Projects, Education,
                               Certifications, Contact and their item components
                               (SkillGroup, TimelineItem, ProjectCard, ProjectDescription,
                               EducationItem, CertificationItem)
  services/resumeService.js    fetch wrapper for /api/resume
  hooks/                       useResume, useTheme, useRevealOnScroll, useActiveSection,
                               useScrolled, useLockBodyScroll, useDocumentTitle
  utils/                       helpers, contactDetails, stats
  constants/index.js           routes, section ids, labels, nav items, UI copy
  styles/                      variables, reset, global, utilities, components, layout
  styles/sections/             one stylesheet per section
```

## Architecture

```
data/resume.json -> GET /api/resume -> resumeService -> useResume -> App -> sections
```

- `useResume` returns `{ data, loading, error, retry }`.
- `resumeService` falls back to the bundled JSON only when the endpoint is missing (static hosting) or the network is unavailable. Server and schema errors surface through the error state with a retry action.
- CSS is a single plain-CSS design system with tokens in `src/styles/variables.css`. Mobile-first breakpoints: 480px, 768px, 1024px, 1280px.
- Scroll reveal adds a `js-reveal` class to `<html>` only after `useRevealOnScroll` mounts, so a JS failure or a no-JS visit leaves every section visible. Reduced-motion users get the finished layout instantly.
- Hero stats live in `src/utils/stats.js` as pure functions, so they can be unit tested without rendering React.

## Deploying

`npm run build` outputs a static site in `dist/`. Any static host works. The `/api/resume` middleware only exists in the Vite dev and preview servers; on a static host the service layer uses the bundled JSON fallback.
