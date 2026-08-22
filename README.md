# DSA Visualizer (semicolon;)

## Project Overview

The **DSA Visualizer** (project codename: *semicolon;*) is an interactive, web-based educational application designed to dynamically illustrate the execution of fundamental Data Structures and Algorithms (DSA). By translating abstract sorting operations into real-time visual animations, the application provides a robust pedagogical tool for computer science students and educators. 

The primary objective of this project is to bridge the cognitive gap between theoretical algorithmic complexity and practical software implementation. Users can observe state changes—such as array partitioning, element comparisons, and positional swaps—rendered alongside synchronized C-language reference code.

---

## Key Features and Capabilities

- **Dynamic Visualization Engine:** Real-time, step-by-step graphical rendering of sorting algorithms.
- **Synchronized Code Execution:** An integrated reference panel displaying syntax-highlighted C code that dynamically aligns with the current algorithmic state.
- **Algorithm Library:** Comprehensive implementations of Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.
- **Asymptotic Complexity Metrics:** Real-time display of Big-O time and space complexity evaluations for the active algorithm.
- **Interactive State Controls:** User-adjustable parameters governing the magnitude of the dataset (array size) and the execution velocity (animation speed).
- **Responsive Interface:** A cohesive, hardware-accelerated dark-mode design system engineered for optimal visibility and minimal cognitive load.
- **Zero-Configuration Deployment:** The application requires no local compilation, build processes, or external dependencies, running natively in modern web browsers.

---

## Technical Architecture

The application is purposefully built on core web technologies to demonstrate proficiency in fundamental frontend development without reliance on high-level abstractions.

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 | Establishes semantic document structure and DOM hierarchy. |
| **Presentation** | CSS3 | Implements the design system, flexible layouts, and state transition animations. |
| **Logic** | Vanilla JavaScript | Orchestrates asynchronous execution, DOM manipulation, and core algorithm implementations. |
| **Syntax Highlighting** | highlight.js | External CDN library for rendering formatted reference code. |
| **Typography** | Google Fonts | Utilizes *Poppins*, *Inter*, and *Fira Code* for optimized readability. |
| **Version Control** | Git / GitHub | Facilitates iterative development and collaborative engineering workflows. |
| **Deployment** | GitHub Pages | Provides highly available static asset hosting. |

For a comprehensive justification of architectural decisions, refer to [TECH_STACK.md](TECH_STACK.md).

---

## Repository Structure

```text
DSA Visualisation Project/
├── index.html                  # Application entry point and primary DOM structure
├── style.css                   # Global stylesheet and animation definitions
├── script.js                   # Application logic and asynchronous algorithm execution
├── README.md                   # Primary project documentation (current file)
├── COLLEGE_REPORT.md           # Formal academic progress and status report
├── TECH_STACK.md               # Architectural decision records and technology rationale
├── PROJECT_TRACKER.md          # Development milestone and feature tracking
├── 01-project-architecture.md  # Detailed documentation of file interdependencies
├── 02-git-workflow.md          # Repository contribution and version control standards
└── 03-app-workflow.md          # Comprehensive state machine and execution flow
```

---

## Execution Workflow

1. **Initialization:** Upon load, the application procedurally generates a randomized numerical dataset.
2. **Configuration:** The user selects a target algorithm and configures execution parameters.
3. **Execution:** Invocation of the algorithm disables global UI controls to prevent state corruption.
4. **Animation Phase:** The asynchronous engine evaluates the dataset, rendering comparisons and mutations visually.
5. **Termination:** Upon achieving a fully sorted state, the interface unlocks, permitting subsequent executions.

---

## Installation and Usage Instructions

The DSA Visualizer is designed as a standalone static web application. It does not require a local server or runtime environment (e.g., Node.js, Python).

### Local Execution

1. Clone the repository to the local filesystem:
   ```bash
   git clone https://github.com/findrishu/semicolon.git
   ```
2. Navigate to the project directory.
3. Open `index.html` in a modern, standard-compliant web browser.

### Live Deployment

The application is continuously deployed and accessible via GitHub Pages.

---

## Contribution Guidelines

Contributions to the codebase are managed via standard Git workflows. Please review [02-git-workflow.md](02-git-workflow.md) prior to submitting pull requests.

1. Fork the repository.
2. Branch from `main` (`git checkout -b feature/module-name`).
3. Commit discrete, logical changes (`git commit -m "feat: implement localized state management"`).
4. Push to the remote branch (`git push origin feature/module-name`).
5. Initiate a formal Pull Request for peer review.

---

## License

This software is released as an open-source project, intended primarily for educational and academic utilization.
