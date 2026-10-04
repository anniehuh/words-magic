# Words Magic (LinguaPals Kids) 🚀✨

A fun, interactive trilingual language adventure app for kids (Korean 한국어, Mandarin 中文, and Spanish Español) featuring interactive flashcards, audio pronunciation, matching games, and AI card creation.

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed on your computer:

1. **Node.js** (v18 or higher recommended; v20 or v22 LTS is ideal)
   - Download & install from: [nodejs.org](https://nodejs.org/)
   - Check in terminal:
     ```bash
     node -v
     npm -v
     ```
2. **Git**
   - Download from: [git-scm.com](https://git-scm.com/)

---

## 🚀 Quick Start (Run Locally)

### 1. Open Terminal or Command Prompt
- **Mac / Linux**: Open the **Terminal** app.
- **Windows**: Open **PowerShell**, **Command Prompt (cmd)**, or **Git Bash**.

### 2. Clone the Repository
Run the following command to download the code to your computer:
```bash
git clone https://github.com/anniehuh/words-magic.git
```

### 3. Enter the Project Folder
```bash
cd words-magic
```

### 4. Install Dependencies
Run npm install to download all required packages:
```bash
npm install
```

### 5. Start the App
Start the local full-stack development server:
```bash
npm run dev
```

### 6. Open in Your Browser
Once the terminal displays `LinguaPals Kids server running on http://localhost:3000`, open your web browser (Chrome, Safari, Edge, or Brave) and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔑 Optional: Configure Gemini AI Key (For Custom Card Creation)

All 420+ built-in flashcards, kid voice audio playback, games, and quizzes work immediately out of the box without any API key!

If you want to use the **"+ Add Words"** feature to generate new custom cards with Google Gemini AI:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. Create a file named `.env` in the root folder of the project:
   ```bash
   cp .env.example .env
   ```
3. Open `.env` and paste your key:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
4. Restart the server (`Ctrl + C` then `npm run dev`).

---

## 🌐 Run Anywhere via GitHub Pages (Like your korean-kids-app!)

You can host Words Magic directly on GitHub Pages so you can access it on any phone, iPad, or computer with a public URL like:
👉 **`https://anniehuh.github.io/words-magic/`**

### How to Enable GitHub Pages:
1. Go to your repository on GitHub: **`https://github.com/anniehuh/words-magic`**
2. Click **Settings** (tab at the top right of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, choose:
   - Select **GitHub Actions** from the dropdown menu.
5. Push the latest code (including the `.github/workflows/deploy.yml` workflow file) to your `main` branch:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
6. Click the **Actions** tab on GitHub. You will see the **"Deploy Words Magic to GitHub Pages"** workflow running.
7. Once finished (~1-2 minutes), your app will be live at:
   👉 **`https://anniehuh.github.io/words-magic/`**

---

## 📦 Available Scripts

- `npm run dev`: Starts the local development server (Express backend + Vite frontend) on port 3000 with hot reloading.
- `npm run build`: Compiles the React TypeScript frontend into production-ready assets in the `dist` folder.
- `npm start`: Runs the production server using the built frontend.
- `npm run lint`: Checks TypeScript types across the codebase.

---

## ❓ Common Troubleshooting

- **Port 3000 already in use?**
  You can run on a different port by setting the `PORT` variable:
  - Mac / Linux: `PORT=3001 npm run dev`
  - Windows (PowerShell): `$env:PORT=3001; npm run dev`
- **Dependencies installation issue?**
  Try running `npm install --legacy-peer-deps` or ensure your Node version is 18+.
