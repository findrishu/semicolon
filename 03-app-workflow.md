# Application Execution Workflow

This document provides a comprehensive technical overview of the application's runtime execution, detailing the state machine transitions from initialization through algorithmic termination.

## 1. Complete Runtime State Machine

The interaction model is designed to provide deterministic, linear control over algorithmic evaluation while preventing race conditions through strict UI state management.

```mermaid
flowchart TD
    A["DOM Initialization: User requests index.html"] --> B["Asset Resolution: Client fetches HTML, CSS, JS, Fonts, and highlight.js"]
    B --> C["State Instantiation: System generates a randomized initial dataset"]
    C --> D["User Input Phase: Configuration of execution parameters"]

    D --> D1["Magnitude Adjustment (N): User modulates the dataset size scalar"]
    D --> D2["Temporal Adjustment: User modulates the asynchronous delay coefficient"]
    D --> D3["Algorithm Selection: User determines the specific sorting heuristic"]

    D1 --> E["Execution Trigger: User invokes the 'Play' event"]
    D2 --> E
    D3 --> E

    E --> F["State Lock: Global application of 'disabled' attributes to UI controls"]
    F --> G["Algorithm Invocation: Selected heuristic begins evaluation"]

    G --> H["Evaluation State: Active comparison between element indices"]
    H --> I{"Does topological order require mutation?"}
    I -- "Affirmative" --> J["Mutation State: System updates DOM heights to reflect data swap"]
    I -- "Negative" --> K["Iterator Advancement: Proceed to subsequent array indices"]
    J --> K
    K --> L{"Is dataset fully sorted?"}
    L -- "Negative" --> H
    L -- "Affirmative" --> M["Termination State: Final validation and rendering of sorted state"]

    M --> N["State Unlock: Removal of 'disabled' attributes from UI controls"]
    N --> O["Reset Phase: System awaits invocation for subsequent generation and sorting"]
```

## 2. Visual Semantic Encoding

The visualization relies on a strict trichromatic encoding system to visually communicate the current state of algorithmic evaluation, effectively minimizing cognitive overload:

| State Indicator | Technical Semantic |
|---|---|
| 🟡 **Evaluation State (Yellow)** | Represents the active logical comparison between two discrete elements within the array space. |
| 🔴 **Mutation State (Red)** | Indicates an active positional swap occurring as a result of the preceding evaluation phase. |
| 🟢 **Sorted State (Green)** | Signifies that an element has mathematically achieved its final, absolute position within the sorted subset. |

## 3. Synchronized Code Telemetry

A critical component of the pedagogical design is the synchronized code reference panel. Through programmatic DOM manipulation, the application highlights specific syntax-colored lines of C reference code synchronously with the visual animation. This functionality establishes a direct cognitive bridge between abstract programmatic instructions (e.g., iterative loops, conditional statements) and their tangible geometric effects on the dataset.
