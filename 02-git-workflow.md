# Git Workflow — DSA Visualizer

## Branch Strategy

```mermaid
gitGraph
    commit id: "initial setup"
    branch feature/landing-page
    checkout feature/landing-page
    commit id: "navbar + branding"
    checkout main
    merge feature/landing-page

    branch feature/sorting
    checkout feature/sorting
    commit id: "bubble sort"
    commit id: "merge/quick sort"

    checkout main
    branch feature/linkedlist
    checkout feature/linkedlist
    commit id: "linked list ops"

    checkout main
    merge feature/sorting
    merge feature/linkedlist

    branch feature/tree
    checkout feature/tree
    commit id: "BST + traversal"
    checkout main
    merge feature/tree

    commit id: "final polish + deploy"
```

## Day-to-Day Flow (what each person actually does)

```mermaid
flowchart TD
    A["Start of session"] --> B["git checkout main<br/>git pull origin main"]
    B --> C["git checkout -b feature/xyz<br/>(or switch to existing branch)"]
    C --> D["Write code for your module"]
    D --> E["Test locally in browser"]
    E --> F{"Working?"}
    F -->|No| D
    F -->|Yes| G["git add .<br/>git commit -m 'feat: ...'"]
    G --> H["git push origin feature/xyz"]
    H --> I["Open Pull Request on GitHub"]
    I --> J["Teammate reviews PR"]
    J --> K{"Approved?"}
    K -->|Changes needed| D
    K -->|Yes| L["Merge into main"]
    L --> M["Update MEMORY.md<br/>(what was done, what's next)"]
    M --> N["End of session"]

    style A fill:#6366f1,color:#fff
    style L fill:#22c55e,color:#000
    style N fill:#6366f1,color:#fff
```

## Rules Recap
- Never commit directly to `main`
- One feature = one branch = one PR
- Always `git pull` before starting new work
- Update `MEMORY.md` at the end of every session
