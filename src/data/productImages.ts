/**
 * NOORÉ Luxury Modest Fashion Image Strategy
 * Provides responsive Unsplash image variants and ultra-reliable luxury SVG fallback generation.
 */

export interface ProductImageSet {
  main: string;
  secondary: string;
  gallery: string[];
  alt: string;
}

/**
 * Optimizes an Unsplash URL with width, format, and quality parameters
 */
export function getOptimizedImageUrl(url: string, width: number = 800, quality: number = 80): string {
  if (!url || !url.includes('unsplash.com')) return url;
  
  // Extract base URL before query parameters
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/**
 * Generates responsive srcset string for high-DPI displays and responsive mobile screens
 */
export function getSrcSet(url: string): string {
  if (!url || !url.includes('unsplash.com')) return '';
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&w=400&q=75 400w, ${baseUrl}?auto=format&fit=crop&w=800&q=80 800w, ${baseUrl}?auto=format&fit=crop&w=1200&q=85 1200w, ${baseUrl}?auto=format&fit=crop&w=1600&q=85 1600w`;
}

/**
 * Generates an elegant SVG luxury fallback in case an image fails to load or device is offline
 */
export function getLuxuryFallbackSvg(title: string, category: string): string {
  const cleanTitle = (title || 'NOORÉ Atelier').replace(/"/g, '&quot;');
  const cleanCat = (category || 'Haute Modesty').toUpperCase().replace(/"/g, '&quot;');
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1067" width="100%" height="100%">
    <rect width="100%" height="100%" fill="#F4F1EA"/>
    <rect x="24" y="24" width="752" height="1019" fill="none" stroke="#E5DEC9" stroke-width="1.5"/>
    <circle cx="400" cy="460" r="140" fill="#EBE5D8" opacity="0.6"/>
    <text x="400" y="475" font-family="serif" font-size="80" font-weight="300" text-anchor="middle" fill="#111111" letter-spacing="8">N</text>
    <text x="400" y="580" font-family="sans-serif" font-size="16" font-weight="600" text-anchor="middle" fill="#111111" letter-spacing="6">NOORÉ</text>
    <text x="400" y="615" font-family="sans-serif" font-size="12" font-weight="400" text-anchor="middle" fill="#887F71" letter-spacing="4">${cleanCat}</text>
    <text x="400" y="660" font-family="serif" font-size="22" font-style="italic" text-anchor="middle" fill="#333333">${cleanTitle}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

