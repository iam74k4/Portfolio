const fs = require('fs');
const path = require('path');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');

const manifest = {
  name: 'Portfolio Website',
  short_name: 'Portfolio',
  description: 'Modern portfolio website showcasing projects and skills',
  start_url: `${basePath}/`,
  scope: `${basePath}/`,
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#6366f1',
  orientation: 'portrait-primary',
  icons: [
    {
      src: `${basePath}/icon-192.svg`,
      sizes: '192x192',
      type: 'image/svg+xml',
      purpose: 'any maskable',
    },
    {
      src: `${basePath}/icon-512.svg`,
      sizes: '512x512',
      type: 'image/svg+xml',
      purpose: 'any maskable',
    },
  ],
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✅ Generated manifest.json with basePath:', basePath || '(empty)');

