# 🙋‍♀️ Portfolio by Rafia Shahid

A sleek, responsive React + Vite portfolio website showcasing skills, projects, and background, with interactive 3D elements and contact functionality.

## 📌 Table of Contents

* [Demo](#-demo)
* [Key Features](#-key-features)
* [Tech Stack](#-tech-stack)
* [Getting Started](#-getting-started)
* [Folder Structure](#-folder-structure)
* [Customize](#-customize)
* [Deployment](#-deployment)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🎥 Demo

Live site: (https://mrsrafiashahid.vercel.app/)

---

## ✨ Key Features

* **Dark-themed responsive design** using Tailwind CSS
* **3D animated robot** via `@react-three/fiber` + `@react-three/drei`, lazy-loaded for performance
* **Contact form** integrated with EmailJS for real-time messaging
* **Testimonials**, **About**, **Skills**, **Projects**, and **Footer** sections
* Smooth animated transitions and lazy-loading using React Spring and Suspense

---

## 🛠 Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Framer Motion
* **3D Models:** react-three-fiber, drei components
* **Email Integration:** EmailJS
* **Linting & Formatting:** ESLint
* **Animation:** React Spring, GSAP

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v16+
* npm or Yarn

### Steps

1. **Clone repo**

   ```bash
   git clone https://github.com/MrsRafiaShahid/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or yarn install
   ```

3. **Configure environment**
   Make a `.env` file in the project root:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run locally**

   ```bash
   npm run dev
   # or yarn dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 📁 Folder Structure

```
Portfolio/
├─ src/
│  ├─ components/       # Reusable components & UI sections
│  ├─ canvas/           # 3D model files
│  ├─ pages/            # Top-level pages (e.g., Contact.jsx)
│  ├─ constants/        # Static data (testimonials, skills, etc.)
│  └─ hooks/            # Reusable logic hooks (e.g., useAlert)
├─ public/              # Static assets (images, favicon)
├─ vite.config.js       # Vite build configuration
└─ README.md            # This documentation
```

---

## 🎨 Customize

* **Personal Info, Skills, Testimonials, Projects**: update files in `src/constants/`
* **3D Model Settings**: edit `AnimateRobot.jsx`,`Computer.jsx`,`BallCanvas.jsx` (position, scale, rotation)
* **Theme & Color**: Tailwind config or theme provider
* **Email Form**: update service/template IDs in `.env`

---

## 🚀 Deployment

1. Push to GitHub
2. Host on platforms like Vercel, Netlify,Render or GitHub Pages
3. Set environment variables (`VITE_EMAILJS_*`) in your deployment settings
4. Vercel / Netlify /Render will automatically run `npm run build`

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome! Feel free to open an issue or submit a PR.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

