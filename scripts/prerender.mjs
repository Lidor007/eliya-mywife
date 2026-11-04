import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const html = await readFile(path, 'utf8');
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) throw new Error('Missing prerender root');
const markup = render();
if (!markup.includes('<h1') || !markup.includes('id="about"')) {
  throw new Error('Prerendered page content is incomplete');
}
await writeFile(path, html.replace(placeholder, () => '<div id="root">' + markup + '</div>'));
console.log('Prerendered complete Hebrew page for crawlers and visitors without JavaScript.');
