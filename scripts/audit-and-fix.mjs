import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const ROOT = process.cwd();
const SITE_URL = process.env.SITE_URL || 'https://mojaf-sa.com';
const FIX_MODE = process.argv.includes('--fix');
const IGNORE_DIRS = new Set(['node_modules', 'dist', '.git', '.next', 'build']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function toSlugFromHtmlPath(htmlPath) {
  const rel = path.relative(ROOT, htmlPath).split(path.sep).join('/');
  let p = '/' + rel.replace(/(^\.*\/+)+/, '');
  p = p.replace(/\/index\.html$/i, '/').replace(/\.html$/i, '');
  p = p.replace(/\/+/g, '/').toLowerCase();
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}

function canonicalForFile(htmlPath) {
  const slug = toSlugFromHtmlPath(htmlPath);
  const url = new URL(slug, SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/');
  return url.toString();
}

function ensureOneCanonical(dom, htmlPath) {
  const doc = dom.window.document;
  const links = doc.querySelectorAll('link[rel=\"canonical\"]');
  let changed = false;

  if (links.length > 1) {
    for (let i = 1; i < links.length; i++) {
      links[i].remove();
      changed = true;
    }
  }
  if (links.length === 0) {
    const link = doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalForFile(htmlPath));

    let head = doc.querySelector('head');
    if (!head) {
      head = doc.createElement('head');
      const html = doc.querySelector('html') || doc.documentElement;
      if (html.firstChild) html.insertBefore(head, html.firstChild);
      else html.appendChild(head);
    }
    head.appendChild(link);
    changed = true;
  } else {
    const first = links[0];
    const desired = canonicalForFile(htmlPath);
    const current = (first.getAttribute('href') || '').trim();
    if (current !== desired) {
      first.setAttribute('href', desired);
      changed = true;
    }
  }
  return changed;
}

function detectDuplicateTitles(dom) {
  const titles = dom.window.document.querySelectorAll('title');
  return titles.length > 1 ? titles.length : 0;
}

function main() {
  const all = walk(ROOT).filter(f => f.toLowerCase().endsWith('.html'));
  const slugToFiles = new Map();

  let changedFiles = 0;
  let pagesWithDupTitles = 0;

  for (const file of all) {
    const slug = toSlugFromHtmlPath(file);
    if (!slugToFiles.has(slug)) slugToFiles.set(slug, []);
    slugToFiles.get(slug).push(file);

    const html = fs.readFileSync(file, 'utf8');
    const dom = new JSDOM(html);

    let changed = ensureOneCanonical(dom, file);
    const dupTitlesCount = detectDuplicateTitles(dom);
    if (dupTitlesCount > 1) pagesWithDupTitles++;

    if (changed && FIX_MODE) {
      fs.writeFileSync(file, dom.serialize(), 'utf8');
      changedFiles++;
    }
  }

  const dupSlugEntries = [...slugToFiles.entries()].filter(([, files]) => files.length > 1);

  console.log('=== SEO Audit Report ===');
  console.log(`Scanned HTML files: ${all.length}`);
  console.log(`Pages with duplicate <title>: ${pagesWithDupTitles}`);
  if (dupSlugEntries.length) {
    console.log('\nDuplicate page slugs detected (same URL intent):');
    for (const [slug, files] of dupSlugEntries) {
      console.log(`  ${slug}`);
      files.forEach(f => console.log(`    - ${path.relative(ROOT, f)}`));
    }
  } else {
    console.log('No duplicate slugs detected.');
  }

  if (FIX_MODE) {
    console.log(`\nAuto-fixes applied (canonical normalization): ${changedFiles}`);
  } else {
    console.log('\nRun with --fix to write changes.');
  }

  process.exit(0);
}

main();
