// Initialize highlight.js when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Apply syntax highlighting to all <pre><code> blocks
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });

    console.log("DSA Visualizer connected successfully.");
    
    // Future logic for array generation, sorting, and UI controls will go here.
});
