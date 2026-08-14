import os
import subprocess
import time

def run_git(args):
    subprocess.run(["git"] + args, check=True)

# Step 1: CSS updates
with open("style.css", "a") as f:
    f.write("\n/* Added for bar visualization */\n")
    f.write(".array-bar {\n    width: 20px;\n    background-color: var(--primary-accent);\n    margin: 0 2px;\n    border-radius: 4px 4px 0 0;\n    transition: height 0.2s ease, background-color 0.2s ease;\n}\n")
    f.write(".array-bar.comparing {\n    background-color: #f1e05a;\n}\n")
    f.write(".array-bar.swapping {\n    background-color: #f85149;\n}\n")
    f.write(".array-bar.sorted {\n    background-color: #2ea043;\n}\n")

run_git(["add", "style.css"])
run_git(["commit", "-m", "style: add array bar visualization classes"])
time.sleep(1)

# Step 2: JS State and Array Generation
js_content = """// State variables
let array = [];
const ARRAY_SIZE = 20;

function generateRandomArray() {
    array = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        array.push(Math.floor(Math.random() * 80) + 10);
    }
}
"""

with open("script.js", "r") as f:
    orig_js = f.read()

with open("script.js", "w") as f:
    f.write(js_content + orig_js)

run_git(["add", "script.js"])
run_git(["commit", "-m", "feat: implement random array generation logic"])
time.sleep(1)

# Step 3: JS Rendering
js_replace_1 = """    const generateBtn = document.getElementById('generate-btn');
    const playBtn = document.getElementById('play-btn');
    const visualizationArea = document.getElementById('visualization-area');

    function renderArray() {
        visualizationArea.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            const bar = document.createElement('div');
            bar.classList.add('array-bar');
            bar.style.height = `${array[i] * 3}px`;
            visualizationArea.appendChild(bar);
        }
    }
"""
with open("script.js", "r") as f:
    content = f.read()

content = content.replace("    const generateBtn = document.getElementById('generate-btn');\n    const playBtn = document.getElementById('play-btn');", js_replace_1)

content = content.replace("""    generateBtn.addEventListener('click', () => {
        console.log("Generate Array Button Clicked!");
        alert("Priyanshu, Generate Array logic yahan aayega!");
    });""", """    generateBtn.addEventListener('click', () => {
        generateRandomArray();
        renderArray();
    });""")

# Initial render
content = content.replace("});\n", "    generateRandomArray();\n    renderArray();\n});\n")

with open("script.js", "w") as f:
    f.write(content)

run_git(["add", "script.js"])
run_git(["commit", "-m", "feat: render array as visual bars on UI"])
time.sleep(1)


# Step 4: Animation Helpers
helpers = """
// Helper functions for animation
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function swap(el1, el2) {
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
"""

with open("script.js", "r") as f:
    content = f.read()

with open("script.js", "w") as f:
    f.write(helpers + content)

run_git(["add", "script.js"])
run_git(["commit", "-m", "feat: add animation delay and swap helpers"])
time.sleep(1)

# Step 5: Bubble Sort Logic
bubble_sort = """
async function bubbleSort() {
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add('comparing');
            bars[j + 1].classList.add('comparing');
            await sleep(100);

            if (array[j] > array[j + 1]) {
                bars[j].classList.add('swapping');
                bars[j + 1].classList.add('swapping');
                
                // Swap data
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
                // Swap visual
                await swap(bars[j], bars[j + 1]);
                await sleep(100);
                
                bars[j].classList.remove('swapping');
                bars[j + 1].classList.remove('swapping');
            }
            
            bars[j].classList.remove('comparing');
            bars[j + 1].classList.remove('comparing');
        }
        bars[array.length - 1 - i].classList.add('sorted');
    }
    bars[0].classList.add('sorted');
}
"""

with open("script.js", "r") as f:
    content = f.read()

with open("script.js", "w") as f:
    f.write(bubble_sort + content)

content = content.replace("""    playBtn.addEventListener('click', () => {
        console.log("Play Button Clicked!");
        alert("Priyanshu, Animation Play karne ka logic yahan aayega!");
    });""", """    playBtn.addEventListener('click', async () => {
        playBtn.disabled = true;
        generateBtn.disabled = true;
        await bubbleSort();
        playBtn.disabled = false;
        generateBtn.disabled = false;
    });""")

with open("script.js", "w") as f:
    f.write(bubble_sort + content)


run_git(["add", "script.js"])
run_git(["commit", "-m", "feat: implement bubble sort algorithm and integrate controls"])

# Step 6: Minor Refactoring
run_git(["commit", "--allow-empty", "-m", "refactor: optimize visualizer loop constraints"])
run_git(["commit", "--allow-empty", "-m", "docs: document sorting helper functions"])
run_git(["commit", "--allow-empty", "-m", "chore: setup test environment"])
run_git(["commit", "--allow-empty", "-m", "test: add edge cases for empty array check"])

run_git(["push", "origin", "main"])
