# Tanisha Verma — Portfolio Website 🌸

Welcome to the source repository for Tanisha Verma's personal portfolio website. This is a highly customized, responsive portfolio built around the **"Enchanted Garden Watercolor"** design theme, highlighting work in AI engineering, Agentic AI, and Computer Vision.

---

## 🎨 Theme & Design Philosophy

Inspired by 19th-century nature journals and botanical watercolor illustrations, this website translates organic layouts and delicate aesthetics into a premium digital interface:

*   **Color Palette:** Morning garden pastel colors on a soft cream background (`#FAF7F2`):
    *   **Lilac (`#C9B8E8`):** Primary branding & accents.
    *   **Baby Blue (`#B8D4E8`):** Secondary tech & highlight accents.
    *   **Soft Pink (`#F2C4CE`):** Highlights and card accents.
    *   **Mint Green (`#B8E8D4`):** Timelines & success states.
*   **Typography:**
    *   *Headings:* **Playfair Display** (elegant editorial serif).
    *   *Body:* **Lato** (clean, highly readable modern sans-serif).
    *   *Accents & Handwritten details:* **Dancing Script** (decorative script for journal labels).
*   **Animations:** Smooth custom keyframe animations representing floating petals, drifting leaves (`FloatingBotanicals.tsx`), and responsive card bloomed states.

---

## 🛠️ Tech Stack

### **Frontend**
*   **React 19** & **TypeScript**
*   **Vite** (dev server and build tool)
*   **Tailwind CSS v4** (utilizing the new `@import "tailwindcss"` engine)
*   **wouter** (minimal, high-performance router)
*   **Radix UI** (accessible primitive components)
*   **Lucide React** (icons library)

### **Backend & Deployment**
*   **Express** (serves compiled static assets in production)
*   **esbuild** (bundles the backend Node server)

---

## 📁 Project Structure

```text
├── client/
│   ├── public/              # Static assets (including __manus__ logs scripts)
│   ├── src/
│   │   ├── components/      # UI components (PageLayout, Navigation, FloatingBotanicals)
│   │   │   └── ui/          # Radix UI wrapper primitives (buttons, inputs, dialogs, etc.)
│   │   ├── contexts/        # ThemeContext (light / dark handling)
│   │   ├── hooks/           # Custom hooks (mobile-view detection, compositions)
│   │   ├── lib/
│   │   │   ├── portfolioData.ts  # Master data file (Experiences, Projects, timeline, certifications)
│   │   │   └── utils.ts     # Tailwind merge utility
│   │   ├── pages/           # Page views (Home, About, Projects, ProjectDetail, Contact, Resume, GitHub)
│   │   ├── App.tsx          # Main router switchboard
│   │   ├── const.ts         # Runtime configuration utils
│   │   ├── index.css        # Core design tokens, gradients, animations, and Tailwind imports
│   │   └── main.tsx         # React root renderer
│   └── index.html           # Main HTML entry point (references Google Fonts & Umami scripts)
├── server/
│   └── index.ts             # Express static production server
├── shared/
│   └── const.ts             # Shared Constants
├── patches/                 # Module patches (e.g. wouter resolution patch)
├── package.json             # Commands, scripts, dependencies
├── tsconfig.json            # TypeScript compile options (includes path aliases @/*)
└── vite.config.ts           # Development proxy server middleware and bundler configs
```

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) installed. This project uses `pnpm` as its package manager.

### **1. Install Dependencies**
If you do not have `pnpm` installed globally, run it via `npx`:
```bash
npx pnpm install
```

### **2. Run Development Server**
Start the Vite development server locally at [http://localhost:3000](http://localhost:3000):
```bash
npx pnpm dev
```

### **3. Build for Production**
Compile the React frontend bundle and build the Express server code into the `dist/` directory:
```bash
npx pnpm build
```

### **4. Start Production Server**
Run the production Express web server to host the built files:
```bash
npx pnpm start
```

---

## 💡 Configuration & Environment Variables

Create a `.env` file in the root directory to configure analytics and API keys:

```ini
# Google Maps API Integration (Optional)
VITE_FRONTEND_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Umami Analytics integration
VITE_ANALYTICS_ENDPOINT=https://your-analytics-domain.com
VITE_ANALYTICS_WEBSITE_ID=your-website-uuid
```

---

## ⚠️ Important Deployment Note (Production Assets)

*   **Vite Proxy (`/manus-storage`):**
    During local development, the Vite server routes requests starting with `/manus-storage/...` to a remote CDN via `vitePluginStorageProxy` to fetch images like the monogram logo and garden backgrounds.
*   **Deployment requirement:**
    Before deploying to production, make sure to download the visual assets (logo, hero backgrounds, about backgrounds) and save them locally under `client/public/assets/`, and update the image tags in the page components so they render correctly without requiring the dev proxy server.
