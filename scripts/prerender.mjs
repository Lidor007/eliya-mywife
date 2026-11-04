import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const output = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error('Missing prerender root');
function inject(html, path) {
  const markup = render(path);
  const marker = path === '/guide2' ? 'id="guide-main"' : 'id="about"';
  if (!markup.includes('<h1') || !markup.includes(marker)) throw new Error('Incomplete page: ' + path);
  return html.replace(placeholder, () => '<div id="root">' + markup + '</div>');
}
await writeFile(new URL('index.html', output), inject(template, '/'));

const origin = 'https://eliya-mywife.vercel.app';
const guideUrl = origin + '/guide2';
const title = 'החיים ממשיכים. ומה איתך? | מדריך במתנה מאלייה';
const description = 'מדריך מעשי במתנה: חמש עצירות לכתיבה, לחיבור לקול הפנימי ולבחירת צעד קטן. כ־20 דקות, ללא הרשמה. אפשר לכתוב, לשמור ולהדפיס.';
let guide = template.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
function meta(attribute, name, content) {
  const pattern = new RegExp('<meta ' + attribute + '="' + name + '" content="[^"]*"\\s*\\/?' + '>');
  if (!pattern.test(guide)) throw new Error('Missing metadata: ' + name);
  guide = guide.replace(pattern, () => '<meta ' + attribute + '="' + name + '" content="' + content + '" />');
}
meta('name', 'description', description);
meta('property', 'og:title', title);
meta('property', 'og:description', description);
meta('property', 'og:url', guideUrl);
meta('property', 'og:type', 'article');
meta('name', 'twitter:title', title);
meta('name', 'twitter:description', description);
guide = guide.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, '<link rel="canonical" href="' + guideUrl + '" />');
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'Article','@id':guideUrl+'#guide',url:guideUrl,headline:title,description,inLanguage:'he-IL',isAccessibleForFree:true,author:{'@type':'Person',name:'אלייה',url:origin+'/#about'},publisher:{'@type':'Person',name:'אלייה',url:origin+'/'},image:origin+'/eliya-share.jpg',mainEntityOfPage:guideUrl},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'אלייה',item:origin+'/'},{'@type':'ListItem',position:2,name:'מדריך לחיבור פנימה',item:guideUrl}]}
  ]
};
guide = guide.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => '<script type="application/ld+json">' + JSON.stringify(schema).replace(/</g,'\\u003c') + '</script>');
await writeFile(new URL('guide2.html', output), inject(guide, '/guide2'));
console.log('Prerendered Hebrew home and /guide2 pages, with separate SEO metadata.');
