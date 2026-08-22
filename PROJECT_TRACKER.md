# Project Tracker — DSA Visualizer

This document serves as the formal tracking mechanism for the developmental milestones and feature implementations of the DSA Visualizer project.

**Last Updated:** 22 August 2026

---

## 1. Completed Development Objectives ✅

The following functional modules have been successfully engineered, tested, and integrated into the production environment.

| UID | Functional Requirement | Technical Implementation Details |
|---|---|---|
| 01 | **User Interface Architecture** | Implementation of a dark-mode GUI leveraging CSS custom properties for cohesive theme management. |
| 02 | **State Generation** | Algorithmic generation of randomized numerical arrays with dynamic scaling capabilities. |
| 03 | **Visualization Rendering** | Dynamic mapping of array scalar values to proportional vertical DOM nodes (bars). |
| 04 | **Asynchronous Controller** | Implementation of `Promise`-based `sleep()` and `swap()` utility functions for animation pacing. |
| 05 | **Bubble Sort Implementation** | Visual integration of adjacent element comparisons and subsequent height mutations. |
| 06 | **Selection Sort Implementation** | Algorithmic tracking and visual indication of the current minimum array value. |
| 07 | **Insertion Sort Implementation** | Visualization of dynamic sub-array shifting and key element insertion. |
| 08 | **Merge Sort Implementation** | Recursive partitioning visualization and in-place topological shifts during the merge phase. |
| 09 | **Quick Sort Implementation** | Partition-exchange sorting visualization featuring dynamic pivot highlighting. |
| 10 | **Velocity Modulation** | Real-time slider control bound to the asynchronous delay coefficient. |
| 11 | **Magnitude Modulation** | Real-time slider control governing the absolute size ($N$) of the generated dataset. |
| 12 | **Algorithm Selector** | Dropdown interface routing execution to the selected algorithmic heuristic. |
| 13 | **Code Synchronization** | Reactive side-panel executing DOM-based syntax highlighting in tandem with algorithm progression. |
| 14 | **State Locking Mechanism** | Global disabling of interactive UI elements during execution to prevent race conditions. |
| 15 | **Complexity Analysis Metrics** | Dynamic rendering of the theoretical Big-$O$ time and space complexities for the active algorithm. |
| 16 | **Production Deployment** | Successful continuous deployment of static assets to the GitHub Pages production environment. |

---

## 2. Pending Development Objectives 🔲

The following modules are scheduled for subsequent development iterations to expand the platform's pedagogical utility.

| UID | Functional Requirement | Technical Implementation Details |
|---|---|---|
| 17 | **Data Structure Traversals** | Visualization engines for non-linear structures (Linked Lists, Stacks, Queues, Binary Trees). |
| 18 | **Quantitative Metrics** | Empirical step counter to track absolute comparisons and memory swaps during runtime. |
| 19 | **Responsive Layout Optimization** | Advanced media query implementation to ensure interface fidelity on mobile viewport dimensions. |

---

## 3. Source Code Index

| Filename | Structural Purpose |
|---|---|
| `index.html` | Application entry point; defines the semantic DOM hierarchy, controls, and visualization containers. |
| `style.css` | Global stylesheet defining the layout paradigms, design system, and state-based transition animations. |
| `script.js` | Core application logic, event handlers, algorithmic implementations, and DOM mutation controllers. |
