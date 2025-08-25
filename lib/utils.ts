import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path for assets - needed for GitHub Pages deployment
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/bold' : ''
}

// Helper to get properly prefixed asset URLs
export function getAssetUrl(path: string): string {
  // Don't prefix external URLs or URLs that already have the basePath
  if (path.startsWith('http') || path.startsWith('/bold/')) {
    return path
  }
  
  // Add basePath to relative URLs
  const basePath = getBasePath()
  return basePath + path
}
