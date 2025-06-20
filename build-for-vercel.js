#!/usr/bin/env node

// Simple build script for Vercel deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for Vercel...');

// Run Vite build
execSync('npx vite build', { stdio: 'inherit' });

// Copy dist/public to vercel output directory if needed
if (fs.existsSync('dist/public')) {
  console.log('Build completed successfully');
} else {
  console.error('Build failed - dist/public not found');
  process.exit(1);
}