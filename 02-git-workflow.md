# Version Control and Repository Workflow

This document outlines the standardized Git and GitHub workflows utilized for source code management, collaboration, and continuous integration within the DSA Visualizer project.

## 1. Branching Strategy

The repository adheres to a strict feature-branching methodology to maintain the stability of the production environment. The `main` branch serves as the definitive, stable release candidate. All active development occurs on isolated, task-specific feature branches.

```mermaid
gitGraph
    commit id: "Repository Initialization"
    branch feature/sorting-algorithms
    checkout feature/sorting-algorithms
    commit id: "feat: implement bubble sort"
    commit id: "feat: implement selection sort"
    commit id: "feat: implement insertion sort"
    commit id: "feat: implement merge and quick sort"
    checkout main
    merge feature/sorting-algorithms
    commit id: "feat: integrate external syntax highlighting"
    commit id: "docs: publish formal project report"
```

## 2. Standard Operating Procedure (SOP) for Development

Collaborators must adhere to the following procedural workflow to ensure code integrity and minimize integration conflicts:

```mermaid
flowchart TD
    A["Initialize Development Session"] --> B["Synchronize local repository (git pull origin main)"]
    B --> C["Instantiate isolated feature branch"]
    C --> D["Iterative Development and Implementation"]
    D --> E["Local Quality Assurance and Browser Testing"]
    E --> F{"Are tests passing?"}
    F -- "Negative" --> D
    F -- "Affirmative" --> G["Commit discrete changes logically"]
    G --> H["Push feature branch to remote origin"]
    H --> I["Initiate formal Pull Request (PR)"]
    I --> J["Peer Review phase"]
    J --> K{"Is PR Approved?"}
    K -- "Negative (Revisions Requested)" --> D
    K -- "Affirmative" --> L["Merge into main branch"]
    L --> M["Development Cycle Concluded"]
```

## 3. Governance and Best Practices

To ensure a cohesive and conflict-free development environment, the following engineering rules are strictly enforced:

1. **Restricted Commits:** Direct commits to the `main` branch are prohibited. All modifications must be introduced via feature branches.
2. **Granular Branching:** Adopt a one-to-one mapping between branches and functional requirements (e.g., one branch per algorithm or distinct feature).
3. **Synchronization Protocol:** Developers must execute a remote pull prior to commencing any local modifications to preemptively mitigate merge conflicts.
4. **Semantic Commits:** Commit messages must adhere to conventional commit standards, providing clear, imperative documentation of the changes (e.g., `feat: implement recursive merge sort partitioning`).
