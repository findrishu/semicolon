# Sorting Module — Logic Flowchart

## General Pattern (applies to all sorting algorithms)

```mermaid
flowchart TD
    A["User enters/generates array"] --> B["Select algorithm<br/>(Bubble/Insertion/Selection/Merge/Quick)"]
    B --> C["Run algorithm in JS<br/>but DON'T animate yet"]
    C --> D["At every comparison/swap,<br/>push a snapshot into states[]"]
    D --> E{"Array fully sorted?"}
    E -->|No| C
    E -->|Yes| F["states[] array is complete"]
    F --> G["User clicks Play"]
    G --> H["Loop through states[]<br/>one at a time (setInterval)"]
    H --> I["Render current state:<br/>update bar heights + colors"]
    I --> J["Highlight matching line<br/>in C Code Panel"]
    J --> K{"More states left?"}
    K -->|Yes, not paused| H
    K -->|Paused| L["Wait for Play/Step click"]
    K -->|No| M["Show 'Sorted!' animation<br/>(all bars turn green)"]

    style A fill:#6366f1,color:#fff
    style F fill:#eab308,color:#000
    style M fill:#22c55e,color:#000
```

## Bubble Sort — Specific Logic

```mermaid
flowchart TD
    A["i = 0"] --> B{"i < n-1 ?"}
    B -->|No| Z["Done — array sorted"]
    B -->|Yes| C["j = 0"]
    C --> D{"j < n-i-1 ?"}
    D -->|No| E["i++"]
    E --> B
    D -->|Yes| F["Compare arr[j] and arr[j+1]<br/>(mark YELLOW — comparing)"]
    F --> G{"arr[j] > arr[j+1] ?"}
    G -->|Yes| H["Swap them<br/>(mark RED — swapping)"]
    G -->|No| I["No swap"]
    H --> J["j++"]
    I --> J
    J --> D

    style A fill:#6366f1,color:#fff
    style F fill:#eab308,color:#000
    style H fill:#ef4444,color:#fff
    style Z fill:#22c55e,color:#000
```

## Color Legend (used consistently across all algorithms)
| Color | Meaning |
|---|---|
| 🟡 Yellow | Elements currently being compared |
| 🔴 Red | Elements being swapped |
| 🟢 Green | Sorted / finalized position |
| 🔵 Blue | Current line highlighted in C code panel |
