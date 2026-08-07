# Application Workflow — DSA Visualizer

This document outlines the high-level functional workflow of the Data Structures and Algorithms Visualizer. It provides a simple and professional step-by-step breakdown of how the application processes user inputs, executes algorithms, and renders animations.

## 1. Initialization and Setup
* **Application Load**: The browser loads the core structure (`index.html`), styling (`style.css`), and operational logic (`script.js`).
* **Dependency Loading**: Syntax highlighting libraries and fonts are initialized.
* **State Reset**: The application sets up empty arrays or default data structures ready for user interaction.

## 2. User Input & Configuration
* **Data Generation**: The user chooses to generate a new dataset (e.g., a random array of numbers) or enters custom data.
* **Algorithm Selection**: The user selects the desired algorithm (e.g., Bubble Sort, Merge Sort, etc.) from the control panel.
* **Speed Configuration**: The user optionally adjusts the playback speed of the upcoming animation.

## 3. Algorithm Execution & State Capture
* **Pre-computation**: Instead of animating during the actual algorithm execution, JavaScript runs the selected algorithm entirely in the background.
* **State Recording**: At every critical step (such as a comparison, a swap, or an insertion), the application captures a "snapshot" (state) of the data structure.
* **Completion**: Once the algorithm completes its sorting or data manipulation, a chronological array of states is finalized. 

## 4. Animation Rendering
* **Playback Initiation**: The user clicks the "Play" button.
* **Sequential Rendering**: The application loops through the recorded states array using a timing function (`setInterval` or `requestAnimationFrame`).
* **UI Updates**: 
  * The height/position of bars in the visualization area are updated.
  * Colors are changed dynamically to indicate actions:
    * **Yellow**: Elements being compared.
    * **Red**: Elements being swapped.
    * **Green**: Elements in their final, sorted position.
* **Code Highlighting**: Concurrently, the relevant line of C/C++ code in the side panel is highlighted to map the visual action to actual code logic.

## 5. Completion & Post-execution
* **Final State**: Once all states have been rendered, the entire visualization area signals completion (e.g., all bars turn green).
* **Reset**: The system readies itself for a new generation or a different algorithm selection, ensuring a smooth repetitive learning loop without requiring a page refresh.
