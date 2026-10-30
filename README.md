# NithishKumar S - Full-Stack Portfolio

A portfolio website crafted for **NithishKumar S**, Full-Stack Software Engineer with 1.9+ years of experience at **Radpro Infotech**. The portfolio showcases real-world production systems analyzed directly from your repositories:
- **Frontend Monorepo (`ezapps`)**: Flutter 3.x, Melos, EzBroker, EzKart, EzKart Admin, Store Billing POS (ESC/POS thermal printing), Typeahead search components.
- **Backend Service (`ez_pos_local_service`)**: Go (Golang), Gin, Bleve full-text search engine with prefix autocomplete, bbolt offline database, Windows background service daemon, dynamic reporting engine (HTML to PDF via wkhtmltopdf), automated Meta WhatsApp Cloud API messaging, and intelligent Document AI (Gemini API, Google Vision, Ollama, Surya OCR).

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
# In c:\code\Nithish_portfolio
pnpm dev
# or
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

### 2. Build for Production
```bash
pnpm run build
# or
npm run build
```
Production assets are generated in the `/dist` directory, ready to deploy instantly to Vercel, Netlify, or GitHub Pages.

---

## 🛠️ How to Customize Your Details

All profile information, project details, skills, and contact links are centralized in a single configuration file:

📁 **`src/data/portfolioData.js`**

You can easily update:
- **`personal`**: Name, role, tagline, experience duration, company, email, location, and social links (GitHub, LinkedIn).
- **`skills`**: Add or adjust proficiency levels for Flutter, Go, AI/OCR, and databases.
- **`projects`**: Add more project cards, screenshots, or live demo URLs.
- **`experience`**: Update career highlights, dates, or achievements.
- **`codeHighlights`**: Swap out code snippets in Go or Dart to showcase your newest architecture.

---

## 🎨 Design System & Theme
- **Theme**: Modern Dark Tech & Glassmorphism
- **Color Palette**: Cyber Cyan (`#06b6d4`), Emerald (`#10b981`), Deep Slate (`#090d16`), Slate Glow (`#172033`)
- **Typography**: `Inter` for clean prose, `Fira Code` for code & technical metrics
- **Framework**: React 18, Vite 5, Tailwind CSS 3.4, Lucide Icons

