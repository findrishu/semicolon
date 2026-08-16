# semicolon;

> **Code. Learn. Build. Repeat.**

Welcome to **semicolon;** — a collaborative space where ideas become code!

---

## 🚀 About the Project

**DSA Visualizer** is an interactive web application that helps you *see* how sorting algorithms work — step by step, through animations.

Instead of reading dry theory, you can watch bars swap, highlight, and sort themselves in real time. Built for students learning DSA for the first time or anyone who learns better by *seeing* concepts in action.

### ✨ Key Features

- 🎨 **Dark-mode UI** with a sleek gradient header and smooth animations
- 📊 **Visualization area** — watch sorting algorithms animate bar-by-bar
- 💻 **Reference code panel** — syntax-highlighted C code shown alongside the animation
- ⏱️ **Complexity Display** — real-time Big-O time and space complexity
- 🔘 **Generate Array** and **Play** controls to drive the visualizer
- ⚡ **Zero build step** — just open `index.html` in a browser and go

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 | Semantic markup |
| **Styling** | CSS3 | Dark theme, animations, responsive layout |
| **Logic** | Vanilla JavaScript | Algorithm logic, DOM manipulation, animation control |
| **Code Highlighting** | highlight.js (CDN) | Syntax coloring for C reference snippets |
| **Fonts** | Google Fonts | Poppins, Inter, Fira Code, JetBrains Mono |
| **Version Control** | Git + GitHub | Collaboration, PRs, branching |
| **Hosting** | GitHub Pages | Free static deployment |

> No frameworks, no build tools, no npm — by design. See [TECH_STACK.md](TECH_STACK.md) for the reasoning.

---

## 📂 Project Structure

```
DSA Visualisation Project/
├── index.html                  # Main HTML — open this in your browser
├── style.css                   # Dark-mode design system & animations
├── script.js                   # Algorithm logic & UI event handlers
├── README.md                   # You are here
├── COLLEGE_REPORT.md           # Formal project progress report
├── TECH_STACK.md               # Why we chose each technology
├── PROJECT_TRACKER.md          # Feature completion tracker
├── 01-project-architecture.md  # How the project files connect
├── 02-git-workflow.md          # Git branching & contribution guide
└── 03-app-workflow.md          # Step-by-step application flow
```

---

## 🔄 How It Works

```mermaid
flowchart LR
    A["🎲 Generate Array"] --> B["▶️ Click Play"]
    B --> C["⚙️ Algorithm Sorts Step by Step"]
    C --> D["🟢 Sorted!"]

    style A fill:#6366f1,color:#fff
    style C fill:#eab308,color:#000
    style D fill:#22c55e,color:#000
```

1. Click **Generate Array** — random bars appear on screen
2. Select an algorithm (Bubble, Selection, Insertion, Merge, or Quick Sort)
3. Click **Play** — watch the bars compare (yellow), swap (red), and settle (green)
4. The C code panel highlights the matching line at each step

---

## 💻 How to Run

```bash
# 1. Clone the repo
git clone https://github.com/findrishu/semicolon.git

# 2. Open in browser
# Just double-click index.html — no server needed!
```

That's it. No `npm install`, no config files, no terminal wizardry.

---

## 🤝 Contributing

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a **Pull Request**

Please read [02-git-workflow.md](02-git-workflow.md) for our branching conventions.

---

## 📜 License

This project is open source and available for educational use.

---

<p align="center">
  <b>semicolon;</b> — Small commits. Big impact.
</p>
