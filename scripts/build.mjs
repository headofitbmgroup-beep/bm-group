import { sites, GROUP } from '../sites.mjs';
import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const verticals = Object.values(sites).filter(s => !s.isMain);

for (const s of Object.values(sites)) {
  const out = `sites/${s.dir}`; mkdirSync(out, { recursive: true });
  copyFileSync('shared/styles.css', `${out}/styles.css`); copyFileSync('shared/main.js', `${out}/main.js`);
  const nav = s.isMain
    ? `<a href="#verticals">Our Businesses</a><a href="#about">About</a><a class="btn" href="#contact">Contact</a>`
    : `<a href="https://${GROUP.domain}">BM Group</a><a href="#services">Services</a><a class="btn" href="#contact">Contact</a>`;
  const body = s.isMain
    ? `<section id="verticals"><div class="wrap"><h2 class="reveal">Our Businesses</h2><div class="grid">${verticals.map(v => `<a class="card reveal" href="https://${v.domain}"><span class="dom">${v.domain}</span><h3>${esc(v.title)}</h3><p>${esc(v.sub)}</p><span class="go">Visit site →</span></a>`).join('')}</div></div></section>`
    : `<section id="services"><div class="wrap"><h2 class="reveal">What we do</h2><div class="grid">${s.features.map(f => `<div class="card reveal"><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></div>`).join('')}</div></div></section>`;
  const stats = s.stats.length ? `<section><div class="wrap stats">${s.stats.map(x => `<div class="stat reveal"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('')}</div></section>` : '';
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(s.title)}</title><meta name="description" content="${esc(s.sub)}"><link rel="canonical" href="https://${s.domain}/">
<meta property="og:title" content="${esc(s.title)}"><meta property="og:description" content="${esc(s.sub)}"><meta name="theme-color" content="${s.accent}">
<link rel="stylesheet" href="styles.css"><style>:root{--accent:${s.accent}}</style></head><body>
<header><div class="wrap"><a class="logo" href="/">${esc(s.title.replace('BM ', ''))} <span>·</span> BM</a><nav>${nav}</nav></div></header>
<main><section class="hero"><div class="wrap"><div class="kicker">${esc(s.kicker)}</div><h1>${esc(s.headline)}</h1><p class="sub">${esc(s.sub)}</p>
<div class="cta"><a class="btn" href="#${s.isMain ? 'verticals' : 'contact'}">${s.isMain ? 'Explore our businesses' : 'Get a quote'}</a><a class="btn ghost" href="#about">About</a></div></div></section>
${stats}${body}
<section id="about"><div class="wrap"><h2 class="reveal">About</h2><p class="sub reveal">${esc(s.about)}</p></div></section>
<section id="contact"><div class="wrap"><h2>Contact</h2><form id="contactform" data-to="${GROUP.email}"><input name="name" placeholder="Name" required><input name="email" type="email" placeholder="Email" required><textarea name="message" rows="4" placeholder="Message" required></textarea><button class="btn">Send</button></form>
<p class="sub">${esc(GROUP.phone)} · ${esc(GROUP.email)} · ${esc(GROUP.address)}</p></div></section></main>
<footer><div class="wrap"><span>© ${new Date().getFullYear()} ${esc(GROUP.name)}</span><span>${verticals.concat(sites.main).filter(v => v !== s).map(v => `<a href="https://${v.domain}">${esc(v.title)}</a>`).join(' · ')}</span></div></footer>
<script src="main.js"></script></body></html>`;
  writeFileSync(`${out}/index.html`, html);
  writeFileSync(`${out}/vercel.json`, JSON.stringify({ cleanUrls: true }, null, 2) + '\n');
}
console.log('built', Object.keys(sites).join(', '));
