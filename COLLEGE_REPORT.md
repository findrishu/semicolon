# DSA Visualizer — Project Progress Report

**Project Name:** DSA Visualizer (semicolon;)
**Team:** Rahul, Priyanshu
**Date:** 13 August 2026
**Status:** In Progress

---

## 1. Project Overview

The DSA Visualizer is an interactive web-based application designed to visually demonstrate the working of sorting algorithms through real-time animations. Users can observe how elements are compared, swapped, and sorted step by step, alongside synchronized C language reference code. The project aims to bridge the gap between theoretical understanding and practical visualization of core Data Structures and Algorithms concepts.

---

## 2. Technology Stack

### 2.1 Technologies Used

| Technology | Role in Project |
|---|---|
| **HTML5** | Page structure and semantic layout |
| **CSS3** | Styling, dark-mode theme, bar transition animations |
| **Vanilla JavaScript** | Core algorithm logic, DOM manipulation, async animation control |
| **highlight.js (CDN)** | Syntax highlighting for C reference code panel |
| **Google Fonts (CDN)** | Typography — Poppins, Inter, Fira Code, JetBrains Mono |
| **Git + GitHub** | Version control and collaborative development |
| **GitHub Pages** | Static site hosting and deployment |

### 2.2 Technologies Intentionally Not Used

| Technology | Reason for Exclusion |
|---|---|
| Backend (Node.js / Express / Python) | No server-side logic required; entire application runs client-side |
| Database (MongoDB / SQL) | No data persistence needed |
| CSS Frameworks (Bootstrap / Tailwind) | Custom design system implemented to demonstrate core CSS skills |
| JS Frameworks (React / Angular / Vue) | Vanilla JS chosen to keep fundamentals visible and project lightweight |
| Build Tools (npm / Webpack / Vite) | No build step required; project runs directly in the browser |

---

## 3. Current Progress

### 3.1 Completed Features ✅

| Feature | Description | Status |
|---|---|---|
| UI/UX Design | Dark-mode interface with CSS custom properties and gradient header | ✅ Done |
| Array Generation | Random array creation with configurable size | ✅ Done |
| Bar Rendering | Dynamic DOM-based vertical bar visualization | ✅ Done |
| Animation Engine | Async/await-based `sleep()` and `swap()` helpers with visual delays | ✅ Done |
| Bubble Sort | Full implementation with comparison (yellow) and swap (red) highlights | ✅ Done |
| Selection Sort | Minimum-finding logic with visual tracking of current minimum | ✅ Done |
| Insertion Sort | Key-based shifting animation with element insertion | ✅ Done |
| Merge Sort | Recursive divide-and-merge with in-place visual shifts | ✅ Done |
| Quick Sort | Partition-based sorting with pivot highlighting | ✅ Done |
| Speed Control | Slider to adjust animation delay in real time | ✅ Done |
| Size Control | Slider to change the number of array elements | ✅ Done |
| Algorithm Selector | Dropdown menu to choose which sorting algorithm to run | ✅ Done |
| Code Sync Panel | C language reference code with line-by-line highlighting during execution | ✅ Done |
| Control Locking | UI controls disabled during sorting to prevent interference | ✅ Done |

### 3.2 Pending / Planned Features 🔲

| Feature | Description | Status |
|---|---|---|
| Data Structure Visualizations | Linked List, Stack, Queue, Tree traversals | 🔲 Not Started |
| Algorithm Complexity Display | Show time/space complexity (Big-O) for each algorithm | 🔲 Not Started |
| Step Counter | Display the number of comparisons and swaps performed | 🔲 Not Started |
| Mobile Responsiveness | Optimize layout for smaller screen sizes | 🔲 Not Started |
| GitHub Pages Deployment | Deploy the live application on GitHub Pages | 🔲 Not Started |

---

## 4. Project Architecture

### 4.1 File Structure

```
DSA Visualisation Project/
├── index.html          → Main page structure (controls, visualization area, code panel)
├── style.css           → Complete styling (dark theme, animations, transitions)
├── script.js           → All algorithm logic, array state, event handling
├── COLLEGE_REPORT.md   → This report
├── README.md           → Project overview and setup instructions
├── TECH_STACK.md       → Technology decisions and justifications
└── PROJECT_TRACKER.md  → Development progress tracker
```

### 4.2 Application Workflow

```
User opens index.html in browser
        │
        ▼
  Page loads → Default array generated and rendered as bars
        │
        ▼
  User adjusts size/speed sliders, selects algorithm
        │
        ▼
  User clicks "Play"
        │
        ▼
  Controls disabled → Selected algorithm executes
        │
        ▼
  Each step: bars change color (yellow = comparing, red = swapping)
  + corresponding C code line highlighted in side panel
        │
        ▼
  Sorting complete → All bars turn green (sorted)
        │
        ▼
  Controls re-enabled → User can generate new array or run again
```

---

## 5. How to Run

No installation, server, or build step is required.

1. Clone the repository: `git clone <repo-url>`
2. Open `index.html` in any modern web browser.

---

## 6. Work Log — 13 August 2026

| Task | Details |
|---|---|
| Codebase Audit | Reviewed all project files and verified actual completion status of features against the project tracker |
| Project Report | Created a formal `COLLEGE_REPORT.md` documenting project scope, tech stack, progress, architecture, and pending work |
| Tracker Correction | Identified that `PROJECT_TRACKER.md` was outdated — all 5 sorting algorithms were already implemented but tracker showed 3 as pending |

---

## 7. Summary

The core functionality of the DSA Visualizer — sorting algorithm animations with synchronized code highlighting — is fully implemented and functional. Five sorting algorithms (Bubble, Selection, Insertion, Merge, Quick) are complete with interactive speed and size controls. Future work includes adding data structure visualizations and deploying to GitHub Pages.
