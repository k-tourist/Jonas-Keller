# Vercel Deployment Guide

## The Problem
Your portfolio is showing raw code instead of the website because Vercel needs proper configuration to build the React application.

## Quick Fix for Vercel

### Step 1: Repository Setup
1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository

### Step 2: Configure Build Settings
In Vercel dashboard, set these build settings:

- **Framework Preset:** Other
- **Build Command:** `cd client && npm install && npx vite build`
- **Output Directory:** `client/dist`
- **Install Command:** `npm install`

### Step 3: Environment Variables (if needed)
- No environment variables required for this static portfolio

### Step 4: Deploy
Click "Deploy" and Vercel will build your site properly.

## Alternative: Manual Build & Upload

If the automatic build fails, you can build locally and deploy:

```bash
# 1. Build the frontend only
cd client
npm install
npx vite build

# 2. Upload the client/dist folder to Vercel
```

## Expected Result
After deployment, you'll see your portfolio website with:
- Hero section with floating animations
- Career timeline
- Skills with progress bars
- Project gallery
- Contact form

The issue you encountered (seeing source code) happens when Vercel doesn't know how to build the React app. The configuration above fixes that.