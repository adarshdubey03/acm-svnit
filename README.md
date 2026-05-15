# ACM SVNIT 

## Project Description

### Overview
The ACM SVNIT website is designed to be a high-end, responsive, and visually striking platform that reflects our commitment to advancing computing as a science and profession. It provides seamless access to chapter resources, event registrations, and community updates.

### Architecture
The project is built using modern web technologies to ensure performance, maintainability, and a stellar user experience:
* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (v4)
* **Animations:** Framer Motion
* **Icons:** Lucide React & React Icons
* **Deployment:** Vercel 

### Design Choices
The entire application adopts a **"Corporate Tech"** design language. We implemented a unified aesthetic relying heavily on subtle dotted borders (`border-dotted border-primary/40`), rounded pill-shaped headers, and a dark-mode-first approach. 
* **Single-Page Application (SPA) Flow:** The homepage utilizes a seamless scroll-based navigation system with anchor tags (`#events`, `#projects`, `#team`), allowing users to glide through content effortlessly.
* **Component Isolation:** Features like the `BlogSection` and `TeamSection` are fully modular. We also implemented dedicated dynamic routing (e.g., `/blog/[slug]`) for distraction-free reading environments when a user clicks into an article.
* **Minimalist Contact & Footer:** Instead of loud, glowing elements, we opted for clean, airy, and professional aesthetics for the communication sections, emphasizing usability and class.

---

## Future Scope

Our roadmap for expanding this platform includes:
1. **CMS Integration:** Migrating hardcoded data (`src/data/`) to a headless CMS (like Sanity or Contentful) to allow non-technical committee members to update events and blogs instantly.
2. **Member Dashboard:** A secure login portal using NextAuth.js for chapter members to track their event participations, access exclusive resources, and view their certificates.
3. **Automated Event Registration:** Integrating a backend database (PostgreSQL) and mailing service (Resend) to handle RSVP ticketing directly on the site.
4. **MDX Blog Engine:** Upgrading the current static blog data structure to `MDX` or `Contentlayer` for rich-text article formatting and code-snippet rendering.
5. **Interactive Gallery:** A Masonry-style media gallery to visually document past hackathons like Dotslash and Echelon.

---

## Skills Matrix

| Domain   | Technologies / Frameworks / Tools |
|----------|-----------------------------------|
| Frontend | PHP, React.js, Next.js, Tailwind CSS, Framer Motion, TypeScript, HTML/CSS |
| Backend  | Node.js, Express.js, PostgreSQL, Prisma, MongoDB, Mongoose |
| AI       | Prompt Engineering, OpenAI API, Gemini API |
| ML       | - |
| DevOps   | Git, GitHub Actions, Docker, Vercel, Railway, Postman, Bruno, Laragon |
| Other    | C/C++, System Design, RESTful APIs|
