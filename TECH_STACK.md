# Tech Stack — DSA Visualizer

## Frontend (Core)
| Tech | Purpose |
|---|---|
| **HTML5** | Structure, semantic markup |
| **CSS3** | Styling, animations (transitions/keyframes for bar movement, node fade-in/out) |
| **JavaScript (Vanilla, no framework)** | All logic — sorting algorithms, DS operations, state array generation, animation control |

## Reference Layer
| Tech | Purpose |
|---|---|
| **C** | Static reference code snippets (not executed — displayed syntax-highlighted in side panel) |

## Libraries (CDN-based, no build tools/npm needed)
| Library | Purpose |
|---|---|
| **highlight.js** | C code syntax highlighting |
| **Google Fonts** | Poppins/Space Grotesk (headings), Inter (body), Fira Code/JetBrains Mono (code panel) |

## Version Control & Hosting
| Tool | Purpose |
|---|---|
| **Git + GitHub** | Collaboration, branching, PR-based workflow |
| **GitHub Pages** | Free static deployment (no backend/server needed) |

## Why No Framework or Build Tools
- Adds unnecessary complexity for a college project without real benefit
- Faculty/evaluators can see fundamentals clearly in raw HTML/CSS/JS
- Deploys directly to GitHub Pages — no build step, no config

## Explicitly NOT Using
- **Backend (Node/Express)** — everything is client-side, no server logic needed
- **Database** — no data persistence required
- **CSS Framework (Bootstrap/Tailwind)** — custom design system already defined in branding guidelines
