# BM Group UAE: multi-domain sites

One static site per domain. Clicking a vertical on the main site goes to that vertical's own domain.

| Folder | Domain | Notes |
|---|---|---|
| `sites/main` | bmgroupuae.com | Group site, links out to each vertical |
| `sites/shade` | bmshadeuae.com | Shade vertical |
| `sites/media` | bmmediauae.com | Media vertical |
| `sites/furniture` | bmfurnitureuae.com | Retail e-commerce (catalogue + cart; checkout emails the order, no payment gateway yet) |
| `sites/labfurniture` | bmlabfurnitureuae.com | Lab furniture vertical |

Out of scope (not built): kinuae.com, bmraja.com, bmgrpuae.com, gillimediauae.com, radiogilli.com, bmshade.com.

## Editing
All copy, products, colours and domains live in `sites.mjs`. Shared styling is in `shared/`.
Run `node scripts/build.mjs` to regenerate `sites/*` (output is committed, so Vercel needs no build step).

**Copy is placeholder.** It must be replaced with the exact content from https://www.bmgroupuae.com/ (the site was unreachable from the build environment).

## Deploy (Vercel)
Create 5 Vercel projects from this repo. For each: set **Root Directory** to the folder above, Framework "Other", no build command, then add the domain under Settings → Domains and point DNS at Vercel (GoDaddy: A `76.76.21.21` for the apex, CNAME `www` → `cname.vercel-dns.com`).
