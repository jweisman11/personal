# Product Requirements Document (PRD)

**Product:** [jeffweisman.com](https://jeffweisman.com)  
**Owner:** Jeff Weisman  
**Tech Stack:**  
- **Frontend:** Next.js + Shadcn + Tailwind CSS  
- **Hosting:** Firebase Hosting  
- **Data:** Markdown (blogs), JSON (tech stack + tools)  
- **Analytics:** Firebase Analytics  

---

## 1. Goals & Audience
The personal site is designed as a central hub for Jeff Weisman’s professional and personal online presence. It should:  
- Provide an **accessible portfolio** for technical peers and general readers.  
- Showcase **projects, tools, blog posts, and tech stack** in a modular, easy-to-navigate format.  
- Balance **professionalism** (education, skills, projects) with **personal connection** (story, hobbies, media).  
- Act as a **content hub**, driving readers to blogs and YouTube videos.  

---

## 2. Tone & Style
- **Voice:** Professional but approachable.  
- **Visuals:** Clean, modern UI using Shadcn defaults with customization.  
- **User personalization:** Theme switcher allowing users to choose from multiple color palettes (including light/dark).  

---

## 3. Site Structure & Requirements

### 3.1 Global Layout
- **Navigation Bar:** Home | About | Projects | Tech Stack | Blog | Tools  
- **Footer:** Contact links (email, LinkedIn, GitHub, YouTube)  

---

### 3.2 Home / Landing Page
**Purpose:** First impression; greet users and direct them to key content.  

**Requirements:**  
- General greeting (“Hi, I’m Jeff Weisman...”)  
- Call-to-Actions:  
  - “Read My Blog” → Blog page  
  - “Check Out My YouTube” → external YT channel  
- *(Future)* Option to highlight **latest blog post** or **featured project**.  

---

### 3.3 About Page
**Purpose:** Share Jeff’s background in a modular format.  

**Requirements:**  
- **Sections:**  
  - Story (personal + professional journey)  
  - Education (degree, schools, certs)  
  - Work History (jobs, roles, accomplishments)  
  - Core Skills (tags/pills for easy scanning)  
  - Certifications (icons or images if available)  
  - Interests/Hobbies (photos optional)  
- Include photos/media where relevant.  

---

### 3.4 Projects Page
**Purpose:** Showcase Jeff’s portfolio.  

**Requirements:**  
- Project cards with:  
  - Name  
  - Description  
  - Status (Completed / In Progress)  
  - Tech Used (tags)  
  - Live link (if available)  
  - GitHub repo (if available)  
- Visual indicator for in-progress projects (badge, icon, or label).  

---

### 3.5 Tech Stack Page
**Purpose:** Highlight Jeff’s preferred and current tools.  

**Requirements:**  
- Data sourced from **JSON file**.  
- Sections:  
  - Tech I use regularly  
  - Tech I’m currently learning  
  - Tech I want to learn  
- Each tech displayed with **logo/icon + name**.  

---

### 3.6 Blog Page
**Purpose:** Share technical + personal blogs.  

**Requirements:**  
- Markdown-based posts using `gray-matter`, `remark`, `rehype-html`.  
- Blog list page: titles only (no previews).  
- Each post supports:  
  - Tags / Categories  
  - Syntax highlighting for code snippets  
- Post detail page includes:  
  - Title  
  - Date  
  - Tags  
  - Full Markdown-rendered content  

---

### 3.7 Tools Page
**Purpose:** Share Jeff’s favorite tools.  

**Requirements:**  
- Data sourced from JSON.  
- Tools table with columns:  
  - Name  
  - Category  
  - Use-case  
  - My rating  
  - Link  
  - Notes  
- Client-side search + filtering by name, category, or rating.  

---

## 4. Design & UX
- **UI:** Shadcn components styled with Tailwind.  
- **Themes:** Multiple color palettes + light/dark mode toggle.  
- **Responsive:** Mobile-first design, fully responsive.  
- **Accessibility:** WCAG-compliant (contrast, semantic HTML).  

---

## 5. Non-Functional Requirements
- **Performance:** Pages load <2s on standard broadband.  
- **SEO (minimal):** Auto sitemap + robots.txt (future expansion possible).  
- **Analytics:** Firebase Analytics (visits, page views, CTA clicks).  
- **Hosting:** Firebase Hosting CI/CD pipeline from `main` branch.  

---

## 6. Future Enhancements (Not in v1.0)
- Featured blog post/project on Home page.  
- SEO-friendly blog posts (metadata, social sharing).  
- Contact form (Firebase Functions).  
- Dashboard/visualization on Tools page.  

---
