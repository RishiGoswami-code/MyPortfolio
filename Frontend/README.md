# ⚡ Full-Stack Portfolio Website

A modern, high-performance **full-stack portfolio website** built with **React + Vite** on the frontend and **Node.js + Express** on the backend — all maintained in a **single monorepo**.

This project showcases not just design, but **engineering discipline, scalability, and real-world architecture**.

---

## Tech Stack

### Frontend
-  **React**
-  **Vite** (blazing-fast bundler)
-  CSS / Tailwind / Styled Components (choose what you use)
-  Axios / Fetch API

### Backend
-  **Node.js**
-  **Express.js**
-  Environment-based configuration
-  REST APIs

### Tooling & DevOps
-  NPM / PNPM
-  Concurrently (for running FE + BE together)
-  ESLint & Prettier
-  (Optional) Jest / Supertest

---

##  Project Structure

```bash
portfolio/
│
├── Frontend/                 # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
│
├── server/                 # Backend (Node + Express)
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json            # Root scripts
├── README.md
└── .gitignore
