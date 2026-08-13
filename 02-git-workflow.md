# Git Workflow — DSA Visualizer

This document explains how we use Git and GitHub to manage code changes in this project.

## Branch Strategy

We use a simple branching model: `main` is the stable branch, and each new feature gets its own branch.

```mermaid
gitGraph
    commit id: "initial setup"
    branch feature/sorting
    checkout feature/sorting
    commit id: "bubble sort"
    commit id: "selection sort"
    commit id: "insertion sort"
    commit id: "merge + quick sort"
    checkout main
    merge feature/sorting
    commit id: "code highlighting"
    commit id: "project report"
```

## Daily Workflow (Step by Step)

This is what each team member does when they sit down to code:

```mermaid
flowchart TD
    A["🟣 Start Working"] --> B["Pull latest code from GitHub"]
    B --> C["Create a new branch for your feature"]
    C --> D["Write code"]
    D --> E["Test in browser"]
    E --> F{"Working?"}
    F -- "No" --> D
    F -- "Yes" --> G["Commit your changes"]
    G --> H["Push branch to GitHub"]
    H --> I["Open a Pull Request"]
    I --> J["Teammate reviews it"]
    J --> K{"Approved?"}
    K -- "No, needs changes" --> D
    K -- "Yes" --> L["Merge into main"]
    L --> M["🟢 Done for the day"]

    style A fill:#6366f1,color:#fff
    style L fill:#22c55e,color:#000
    style M fill:#22c55e,color:#000
```

## Simple Rules

- **Never push directly to `main`** — always use a feature branch
- **One feature = one branch** — keeps things organized
- **Always pull before starting** — avoids merge conflicts
- **Write clear commit messages** — example: `feat: add insertion sort algorithm`
