# Project Architecture — DSA Visualizer

This document shows how the different files in this project connect and work together.

## How the Files Connect

```mermaid
flowchart TD
    A["🌐 index.html"]
    B["🎨 style.css"]
    C["⚙️ script.js"]
    D["📦 highlight.js (CDN)"]
    E["🔤 Google Fonts (CDN)"]

    A -- "loads styles from" --> B
    A -- "loads logic from" --> C
    A -- "loads library" --> D
    A -- "loads fonts" --> E
    C -- "reads user input from" --> A
    C -- "updates bars & code panel in" --> A
    D -- "colors the C code in" --> A

    style A fill:#6366f1,color:#fff
    style B fill:#ec4899,color:#fff
    style C fill:#eab308,color:#000
    style D fill:#22c55e,color:#000
    style E fill:#3b82f6,color:#fff
```

## What Each File Does

| File | Role |
|---|---|
| `index.html` | The main page — has the buttons, sliders, visualization area, and code panel |
| `style.css` | Controls how everything looks — dark theme, bar colors, animations |
| `script.js` | The brain — generates arrays, runs sorting algorithms, animates the bars |

## The Core Pattern

Every sorting algorithm in this project follows the same 3-step pattern:

```mermaid
flowchart LR
    A["1️⃣ Generate Array"] --> B["2️⃣ Run Algorithm"]
    B --> C["3️⃣ Animate Each Step"]

    style A fill:#6366f1,color:#fff
    style B fill:#eab308,color:#000
    style C fill:#22c55e,color:#000
```

1. **Generate** — Create a random array and draw it as bars on screen
2. **Run** — Execute the sorting algorithm step by step
3. **Animate** — At each step, change bar colors and heights so the user can see what's happening
