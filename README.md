# MINGZI corporate site

Multi-page static website for the MINGZI brand. It contains the supplied product-page visuals as rasterized website assets only; the original PDF/PPT files are intentionally excluded.

## Pages

- `index.html` - home
- `collections.html` - product overview
- `jewelry.html` - couture jewelry
- `smart-watch.html` - smart watch collection
- `brand.html` - brand and company
- `contact.html` - collaboration directions

## Publishing and source protection boundary

The repository is intended to remain **private**. GitHub Actions deploys only the website artifact to GitHub Pages.

This makes the GitHub source repository non-public, but no static website can prevent a visitor's browser from receiving the rendered HTML, CSS, JavaScript, and images required to display a page. The site therefore uses sensible deterrents (no original decks, no exposed source repo, and disabled image drag/context menu) but must not be represented as download-proof or cryptographically access-controlled.

For genuine access control, place the published site behind an identity-aware service such as Cloudflare Access and use server-side authorization.

## Contact channel

The supplied material does not contain a confirmed public email, phone number, or official social account. `contact.html` intentionally does not invent one. Add an approved contact channel before using the page for live lead collection.
