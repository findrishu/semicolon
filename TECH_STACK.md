# Technological Infrastructure and Rationale

This document provides a formal breakdown of the technology stack utilized in the DSA Visualizer project, alongside the architectural rationale guiding these selections.

## 1. Core Frontend Technologies

The application relies strictly on fundamental web technologies to maximize performance, ensure cross-compatibility, and maintain architectural transparency.

| Technology | Architectural Implementation |
|---|---|
| **HTML5** | Provides the semantic structural foundation of the application interface, ensuring standard compliance and DOM integrity. |
| **CSS3** | Manages the visual presentation layer, including a robust dark-mode design system. Utilizes hardware-accelerated CSS transitions and keyframe animations for performant rendering of DOM mutations. |
| **Vanilla JavaScript** | Serves as the primary logic and execution engine. Implements standard sorting algorithms, manages application state, orchestrates DOM manipulation, and utilizes asynchronous Promises for precise animation control. |

## 2. Reference Implementation Layer

| Technology | Purpose |
|---|---|
| **C Language** | Serves as the static reference implementation. C is chosen for its fundamental role in academic computer science curricula, providing a low-level programmatic context for the visual animations. |

## 3. External Dependencies (CDN-Based)

To maintain a zero-configuration environment while enhancing functionality, external libraries are integrated strictly via Content Delivery Networks (CDNs).

| Library | Functional Role |
|---|---|
| **highlight.js** | A lightweight syntax parser utilized to apply standardized color formatting to the static C reference code, improving code readability and comprehension. |
| **Google Fonts** | Supplies the typographic assets for the application, specifically employing *Poppins* and *Inter* for interface clarity, and *Fira Code* / *JetBrains Mono* for fixed-width code display. |

## 4. Version Control and Deployment Infrastructure

| Utility | Architectural Role |
|---|---|
| **Git & GitHub** | Facilitates source code versioning, branch-based feature isolation, and collaborative engineering workflows. |
| **GitHub Pages** | Provides immediate, continuous deployment of the static assets to a production environment without requiring server provisioning. |

## 5. Architectural Justifications for Excluded Technologies

The deliberate decision to avoid modern frameworks and build tools is rooted in the pedagogical objectives of the project:

- **Avoidance of JavaScript Frameworks (e.g., React, Angular):** Utilizing Vanilla JS ensures that the core algorithmic logic and DOM manipulation remain completely transparent. Abstractions like Virtual DOMs would obfuscate the direct relationship between algorithmic steps and visual updates, which is counterproductive for an educational tool.
- **Exclusion of Backend Services (e.g., Node.js, Express):** The application’s computational requirements are entirely client-side. Implementing a server architecture would introduce unnecessary latency, complexity, and deployment overhead without providing functional benefits.
- **Omission of CSS Frameworks (e.g., Tailwind, Bootstrap):** Implementing a bespoke CSS design system demonstrates foundational proficiency in cascading styles, responsive design, and CSS variables, aligning with academic evaluation criteria.
- **Zero Build Configuration:** Bypassing tools like Webpack or Vite ensures that the source code remains immediately executable in any standard web browser, minimizing the barrier to entry for end-users and evaluators.
