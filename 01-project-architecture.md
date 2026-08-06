# Project Architecture — DSA Visualizer

This diagram shows how the pieces of the app connect to each other.

```mermaid
graph TD
    A["index.html<br/>(Landing Page)"] --> B["main.js<br/>(Navbar + Shared Utils)"]

    A --> C["Sorting Module"]
    A --> D["Stack/Queue Module"]
    A --> E["Linked List Module"]
    A --> F["Tree Module"]
    A --> G["Graph Module (stretch)"]

    C --> C1["sorting.html"]
    C --> C2["sorting.js"]
    C2 --> H["State Array Generator<br/>(records every step)"]

    D --> D1["stack-queue.html"]
    D --> D2["stack-queue.js"]
    D2 --> H

    E --> E1["linkedlist.html"]
    E --> E2["linkedlist.js"]
    E2 --> H

    F --> F1["tree.html"]
    F --> F2["tree.js"]
    F2 --> H

    H --> I["Animation Engine<br/>(setInterval / requestAnimationFrame)"]
    I --> J["Visualization Area<br/>(bars / nodes / boxes)"]
    I --> K["C Code Panel<br/>(renderCodePanel function)"]

    K --> L["/c-code/*.c<br/>(static reference snippets)"]

    J --> M["Playback Controls<br/>(Play / Pause / Step / Speed)"]
    K --> M

    style A fill:#6366f1,color:#fff
    style H fill:#eab308,color:#000
    style I fill:#22c55e,color:#000
    style K fill:#3b82f6,color:#fff
```

## Key Idea
Every module (Sorting, Linked List, Tree, etc.) follows the **same core pattern**:
1. Take input → generate a **state array** (list of "snapshots" of every step)
2. Feed the state array into the shared **Animation Engine**
3. Animation Engine updates both the **Visualization Area** and the **C Code Panel** in sync

This is why building the C Code Panel once (shared component) and reusing it everywhere saves a lot of duplicate work.
