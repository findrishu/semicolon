# Application Workflow — DSA Visualizer

This document explains how the application works from start to finish, in plain English.

## Complete User Flow

```mermaid
flowchart TD
    A["🌐 User opens index.html in browser"] --> B["📦 Page loads: HTML, CSS, JS, Fonts, highlight.js"]
    B --> C["🎲 A default random array is generated and shown as bars"]
    C --> D["🎛️ User adjusts settings"]

    D --> D1["📏 Size slider → changes number of bars"]
    D --> D2["⚡ Speed slider → changes animation speed"]
    D --> D3["📋 Dropdown → selects sorting algorithm"]

    D1 --> E["▶️ User clicks Play"]
    D2 --> E
    D3 --> E

    E --> F["🔒 All controls get disabled during sorting"]
    F --> G["⚙️ Selected algorithm starts running"]

    G --> H["🟡 Comparing: two bars turn yellow"]
    H --> I{"Need to swap?"}
    I -- "Yes" --> J["🔴 Swapping: bars turn red and swap heights"]
    I -- "No" --> K["Move to next pair"]
    J --> K
    K --> L{"Sorting done?"}
    L -- "No" --> H
    L -- "Yes" --> M["🟢 All bars turn green — sorted!"]

    M --> N["🔓 Controls re-enabled"]
    N --> O["🔁 User can generate new array and run again"]

    style A fill:#6366f1,color:#fff
    style M fill:#22c55e,color:#000
    style O fill:#6366f1,color:#fff
```

## What the Colors Mean

| Color | Meaning |
|---|---|
| 🟡 **Yellow** | These two bars are being compared right now |
| 🔴 **Red** | These bars are being swapped |
| 🟢 **Green** | This bar is in its final sorted position |

## Code Panel (Side Panel)

While the bars are animating, the C language reference code on the right side highlights the exact line that matches the current step. This helps connect the visual animation with actual code logic.
