# Product Requirements Document (PRD)

**Product:** [jeffweisman.com](https://jeffweisman.com)
**Owner:** Jeff Weisman
**Version:** 2.0 (full redesign)

**Tech stack**
- **Frontend:** Next.js (static export) + Tailwind CSS + shadcn/ui
- **Hosting:** Firebase Hosting, deployed from `main` via GitHub Actions
- **Content:** Markdown files (blog posts)
- **Analytics:** Firebase Analytics

---

## 1. Goals & Audience

A small, fun personal site that does two things:

1. Tells visitors a little **about Jeff**.
2. Gives Jeff a low-friction place to post **random thoughts** as a blog.

It is no longer a professional portfolio. There are no project, tech-stack or tools pages. The audience is friends, colleagues and curious strangers.

---

## 2. Tone & Style

- **Voice:** casual, a little sarcastic, never corporate.
- **Look:** clean and modern, with quirky touches (dotted-paper background, tilted "sticker" labels, mono-spaced accents, a playful accent color).
- **Mascot:** a Bender-style robot appears throughout as the site's personality.
- **Theme:** light and dark mode only (follows the system setting, with a manual toggle). No color palette switcher.

---

## 3. Site Structure

### 3.1 Global layout
- **Header:** name/wordmark, links to *About* (`/#about`) and *Blog*, social icons (GitHub, LinkedIn, YouTube), light/dark toggle.
- **Footer:** social links and a disclaimer that the robot is an original drawing.

### 3.2 Home (`/`)
Single-page landing with three sections:

1. **Hero:** greeting, short tagline, "Read the blog" and "About me" buttons, and the animated robot. Clicking the robot makes it hop and say a new quip.
2. **Latest thoughts:** the 3 most recent posts (title + date).
3. **About me** (`#about`): a short bio, a facts card (job, experience, path, off-the-clock) and social links.

### 3.3 Blog (`/blog`, `/blog/[slug]`)
- Posts are markdown files in `personal/content/posts/` with frontmatter `title` and `date` (`YYYY-MM-DD`).
- List page: title and date only, newest first.
- Post page: title, date, rendered markdown, small robot sign-off.
- No tags, categories, excerpts or reading-time. Posting a thought means adding one file.

### 3.4 404
Robot plus a snarky message and a link home.

---

## 4. Bender Imagery

The site supports both animated and static Bender art without relying on copyrighted assets by default.

- **Default (shipped):** an original, Bender-*inspired* robot drawn in SVG, animated with CSS (antenna wobble, blinking, eyes looking around, cigar smoke, waving arm, idle bob, click-to-hop). Animations are disabled under `prefers-reduced-motion`.
- **Optional (owner-supplied):** Futurama art is Fox/Disney IP. If Jeff chooses to use it, he supplies the files himself. Any file named `hero`, `post-footer` or `404` with a `.gif`, `.webp`, `.png`, `.jpg` or `.svg` extension in `personal/public/bender/` automatically replaces the matching SVG slot at build time (GIFs and WebP cover animation). No code changes needed.
- Using official art is a copyright risk the owner accepts; the repo ships without it.

| Slot | Where | Notes |
|------|-------|-------|
| `hero` | Home hero | Waving pose, click-to-talk |
| `post-footer` | End of each blog post | Small, ~64px wide |
| `404` | Not-found page | ~160px wide |

---

## 5. Design & UX

- **UI:** Tailwind with shadcn primitives (button).
- **Responsive:** mobile-first.
- **Accessibility:** semantic HTML, sufficient contrast in both themes, labelled icon buttons, reduced-motion support, SVG with accessible label.

---

## 6. Non-Functional Requirements

- **Performance:** fully static; pages load in under 2s on broadband.
- **Analytics:** Firebase Analytics (page views).
- **Hosting/CI:** push to `main` builds and deploys to Firebase Hosting.

---

## 7. Out of Scope / Future Ideas

- Tags or categories on posts, syntax highlighting for code blocks.
- RSS feed, sitemap/robots.txt, social-share metadata.
- More robot poses (sleeping, dancing) and a Konami-code easter egg.
- Contact form.
