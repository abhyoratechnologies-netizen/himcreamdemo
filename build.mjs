
import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

// Copy public assets
await cp('public', 'dist', { recursive: true });

// Build React application
await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  jsx: 'automatic',
  minify: true,
  outfile: 'dist/app.js',
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});

// Read development HTML
let html = await readFile('index.html', 'utf8');

// Replace Vite development entry with production bundle
html = html.replace(
  '<script type="module" src="/src/main.tsx"></script>',
  '<script defer src="/app.js"></script>'
);

// Copy production HTML
await writeFile('dist/index.html', html);

console.log('Production build completed successfully!');
