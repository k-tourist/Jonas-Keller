# Alex Thompson - Portfolio Website

A modern, animated portfolio showcasing 10 years of Full Stack Developer experience.

## 🚀 Vercel Deployment Instructions

### Option 1: Simple Frontend-Only Deployment

1. **Fork/Clone this repository to your GitHub account**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select "Other" as framework preset

3. **Configure Build Settings:**
   - **Build Command:** `cd client && npx vite build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `npm install`

4. **Deploy!**

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Build the frontend
cd client && npx vite build && cd ..

# Deploy
vercel --prod
```

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express backend (for local dev)
├── shared/          # Shared types/schemas
└── vercel.json      # Vercel deployment config
```

## ✨ Features

- Modern dark theme with glass morphism effects
- Smooth scroll animations and hover effects
- Responsive design for all devices
- Interactive timeline showcasing career progression
- Skills visualization with animated progress bars
- Project gallery with tech stack highlights
- Contact form with social links

## 🎨 Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **UI Components:** Radix UI, Lucide React icons
- **Animations:** CSS animations, Intersection Observer
- **Build:** Vite
- **Deployment:** Vercel