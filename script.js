let array = []; //corrected on 17 aug - declared array properly here (was an undeclared implicit global before)

const algoCodes = {
    'bubble': [
        "void bubbleSort(int arr[], int n) {",
        "    for (int i = 0; i < n-1; i++) {",
        "        for (int j = 0; j < n-i-1; j++) {",
        "            if (arr[j] > arr[j+1]) {",
        "                swap(&arr[j], &arr[j+1]);",
        "            }",
        "        }",
        "    }",
        "}"
    ],
    'selection': [
        "void selectionSort(int arr[], int n) {",
        "    for (int i = 0; i < n-1; i++) {",
        "        int min_idx = i;",
        "        for (int j = i+1; j < n; j++) {",
        "            if (arr[j] < arr[min_idx])",
        "                min_idx = j;",
        "        }",
        "        swap(&arr[min_idx], &arr[i]);",
        "    }",
        "}"
    ],
    'insertion': [
        "void insertionSort(int arr[], int n) {",
        "    for (int i = 1; i < n; i++) {",
        "        int key = arr[i];",
        "        int j = i - 1;",
        "        while (j >= 0 && arr[j] > key) {",
        "            arr[j + 1] = arr[j];",
        "            j = j - 1;",
        "        }",
        "        arr[j + 1] = key;",
        "    }",
        "}"
    ],
    'merge': [
        "// Merge Sort implementation",
        "void mergeSort(int arr[], int l, int r) {",
        "    if (l < r) {",
        "        int m = l + (r - l) / 2;",
        "        mergeSort(arr, l, m);",
        "        mergeSort(arr, m + 1, r);",
        "        merge(arr, l, m, r);",
        "    }",
        "}"
    ],
    'quick': [
        "// Quick Sort implementation",
        "void quickSort(int arr[], int low, int high) {",
        "    if (low < high) {",
        "        int pi = partition(arr, low, high);",
        "        quickSort(arr, low, pi - 1);",
        "        quickSort(arr, pi + 1, high);",
        "    }",
        "}"
    ],
    'stack': [
        "// Stack operations",
        "void push(int val) {",
        "    stack[++top] = val;",
        "}",
        "int pop() {",
        "    return stack[top--];",
        "}"
    ],
    'queue': [
        "// Queue operations",
        "void enqueue(int val) {",
        "    queue[rear++] = val;",
        "}",
        "int dequeue() {",
        "    return queue[front++];",
        "}"
    ],
    'linkedlist': [
        "// Linked List insert",
        "void insertEnd(Node** head, int val) {",
        "    Node* new_node = createNode(val);",
        "    if (*head == NULL) *head = new_node;",
        "    else {",
        "        Node* last = *head;",
        "        while (last->next != NULL)",
        "            last = last->next;",
        "        last->next = new_node;",
        "    }",
        "}"
    ],
    'tree': [
        "// Tree Inorder Traversal",
        "void inorder(Node* root) {",
        "    if (root != NULL) {",
        "        inorder(root->left);",
        "        print(root->data);",
        "        inorder(root->right);",
        "    }",
        "}"
    ]
};

function renderCode(algo) {
    const codeLines = algoCodes[algo] || ["// Code not found"];
    const container = document.getElementById('reference-code-container');
    if (!container) return;
    container.innerHTML = '';
    codeLines.forEach((line, idx) => {
        const div = document.createElement('div');
        div.id = `code-line-${idx}`;
        div.className = "code-line";
        const codeEl = document.createElement('code');
        codeEl.className = "language-c";
        codeEl.textContent = line || " ";
        hljs.highlightElement(codeEl);
        div.appendChild(codeEl);
        container.appendChild(div);
    });
}

function setActiveLine(idx) {
    document.querySelectorAll('.code-line').forEach(el => el.classList.remove('active'));
    if (idx !== null && idx !== undefined) {
        const line = document.getElementById(`code-line-${idx}`);
        if (line) line.classList.add('active');
        if (line) line.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Tushar, we will now bind the animation delay to the slider input.
function getDelay() {
    const speedSlider = document.getElementById('speed-slider');
    const speed = speedSlider ? parseInt(speedSlider.value) : 100;
    return 1010 - speed; // High speed value = Low delay
}

// Tushar, utility functions to handle asynchronous delays and DOM element swapping for animations.
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function swap(el1, el2) {
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

let array = [];
let comparisons = 0;
let swaps = 0;

function updateCounters() {
    const compEl = document.getElementById('comparisons-count');
    const swapEl = document.getElementById('swaps-count');
    if (compEl) compEl.textContent = comparisons;
    if (swapEl) swapEl.textContent = swaps;
}

// Tushar, this function generates a new array populated with random integers.
function generateRandomArray() {
    array = []; //corrected on 17 aug - now reassigns the properly declared module-level `array` instead of leaking a global
    comparisons = 0;
    swaps = 0;
    updateCounters();
    const sizeSlider = document.getElementById('size-slider');
    const arraySize = sizeSlider ? parseInt(sizeSlider.value) : 20;
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 80) + 10);
    }
}

// Tushar, implements the Bubble Sort logic, animating bars based on their computed heights.
async function bubbleSort() {
    setActiveLine(0);
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length - 1; i++) {
        setActiveLine(1);
        await sleep(getDelay()/2);
        for (let j = 0; j < array.length - i - 1; j++) {
            setActiveLine(2);
            // Tushar, appending the 'comparing' class (yellow) to visualize the active comparison of two elements.
            bars[j].classList.add('comparing');
            bars[j + 1].classList.add('comparing');
            await sleep(getDelay());

            setActiveLine(3);
            comparisons++; updateCounters();
            if (array[j] > array[j + 1]) {
                setActiveLine(4);
                // Tushar, if the primary element is greater, append the 'swapping' class (red) and exchange their heights.
                bars[j].classList.add('swapping');
                bars[j + 1].classList.add('swapping');
                
                // Swap data logic
                swaps++; updateCounters();
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
                // Swap visual bars on screen
                await swap(bars[j], bars[j + 1]);
                await sleep(getDelay());
                
                bars[j].classList.remove('swapping');
                bars[j + 1].classList.remove('swapping');
            }
            
            bars[j].classList.remove('comparing');
            bars[j + 1].classList.remove('comparing');
        }
        // Tushar, mark the element as 'sorted' (green) once it reaches its final asymptotic position.
        bars[array.length - 1 - i].classList.add('sorted');
    }
    // Tushar, the remaining first element is inherently in its correct sorted position.
    bars[0].classList.add('sorted');
    setActiveLine(null);
}

// Tushar, implementation of the Selection Sort algorithm.
async function selectionSort() {
    setActiveLine(0);
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length; i++) {
        setActiveLine(1);
        let minIdx = i;
        setActiveLine(2);
        bars[i].classList.add('comparing');
        await sleep(getDelay());

        for (let j = i + 1; j < array.length; j++) {
            setActiveLine(3);
            bars[j].classList.add('comparing');
            await sleep(getDelay());

            setActiveLine(4);
            comparisons++; updateCounters();
            if (array[j] < array[minIdx]) {
                setActiveLine(5);
                if (minIdx !== i) {
                    bars[minIdx].classList.remove('swapping'); // Purana minimum hataya
                }
                minIdx = j;
                bars[minIdx].classList.add('swapping'); // Naya minimum (red)
            }
            
            if (j !== minIdx) {
                bars[j].classList.remove('comparing');
            }
        }

        if (minIdx !== i) {
            setActiveLine(7);
            bars[i].classList.add('swapping');
            
            // Swap data logic
            swaps++; updateCounters();
            let temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
            
            await swap(bars[i], bars[minIdx]);
            await sleep(getDelay());
            
            bars[minIdx].classList.remove('swapping');
        }
        
        bars[i].classList.remove('comparing');
        bars[i].classList.remove('swapping');
        bars[i].classList.add('sorted');
    }
    setActiveLine(null);
}

// Tushar, implementation of the Insertion Sort algorithm.
async function insertionSort() {
    setActiveLine(0);
    const bars = document.getElementsByClassName('array-bar');
    // Pehle element ko sorted maan lete hain, isliye i = 1 se shuru karenge
    for (let i = 1; i < array.length; i++) {
        setActiveLine(1);
        let key = array[i];
        let keyHeight = bars[i].style.height;
        let j = i - 1;
        setActiveLine(2);
        setActiveLine(3);
        
        bars[i].classList.add('swapping'); // Highlight the element to be inserted
        await sleep(getDelay());

        while (j >= 0) {
            comparisons++; updateCounters();
            if (array[j] > key) {
                setActiveLine(4);
                bars[j].classList.add('comparing');
                await sleep(getDelay());
                
                setActiveLine(5);
                swaps++; updateCounters();
                array[j + 1] = array[j];
                bars[j + 1].style.height = bars[j].style.height;
                
                setActiveLine(6);
                bars[j].classList.remove('comparing');
                j = j - 1;
            } else {
                break;
            }
        }
        setActiveLine(8);
        array[j + 1] = key;
        bars[j + 1].style.height = keyHeight;
        
        // Remove swapping class
        for (let k = 0; k <= i; k++) {
            bars[k].classList.remove('swapping');
        }
    }
    // Sorting poori hone ke baad sabko green (sorted) kar denge
    for(let k = 0; k < array.length; k++) {
        bars[k].classList.add('sorted');
    }
    setActiveLine(null);
}

// Tushar, implementation of the Merge Sort algorithm.
async function mergeSort() {
    await mergeSortHelper(0, array.length - 1);
    const bars = document.getElementsByClassName('array-bar');
    for (let k = 0; k < array.length; k++) {
        bars[k].classList.add('sorted');
    }
    setActiveLine(null);
}

async function mergeSortHelper(start, end) {
    setActiveLine(1);
    if (start >= end) return;
    setActiveLine(2);
    const mid = Math.floor((start + end) / 2);
    setActiveLine(3);
    await sleep(getDelay()/2);
    setActiveLine(4);
    await mergeSortHelper(start, mid);
    setActiveLine(5);
    await mergeSortHelper(mid + 1, end);
    setActiveLine(6);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    const bars = document.getElementsByClassName('array-bar');
    let start2 = mid + 1;

    if (array[mid] <= array[start2]) {
        return;
    }

    while (start <= mid && start2 <= end) {
        bars[start].classList.add('comparing');
        bars[start2].classList.add('comparing');
        await sleep(getDelay());
        
        comparisons++; updateCounters();
        if (array[start] <= array[start2]) {
            bars[start].classList.remove('comparing');
            bars[start2].classList.remove('comparing');
            start++;
        }
        else {
            let value = array[start2];
            let index = start2;

            bars[start].classList.add('swapping');
            bars[index].classList.add('swapping');
            await sleep(getDelay());

            while (index !== start) {
                swaps++; updateCounters();
                array[index] = array[index - 1];
                bars[index].style.height = bars[index - 1].style.height;
                index--;
            }
            array[start] = value;
            bars[start].style.height = `${value * 3}px`;

            bars[start].classList.remove('swapping');
            bars[start2].classList.remove('swapping');
            bars[start].classList.remove('comparing');
            bars[start2].classList.remove('comparing');

            start++;
            mid++;
            start2++;
        }
    }
}

// Tushar, implementation of the Quick Sort algorithm.
async function quickSort() {
    await quickSortHelper(0, array.length - 1);
    const bars = document.getElementsByClassName('array-bar');
    for (let k = 0; k < array.length; k++) {
        bars[k].classList.add('sorted');
    }
    setActiveLine(null);
}

async function quickSortHelper(start, end) {
    setActiveLine(1);
    if (start < end) {
        setActiveLine(2);
        let pivotIndex = await partition(start, end);
        setActiveLine(3);
        await sleep(getDelay()/2);
        setActiveLine(4);
        await quickSortHelper(start, pivotIndex - 1);
        setActiveLine(5);
        await quickSortHelper(pivotIndex + 1, end);
    }
}

async function partition(start, end) {
    const bars = document.getElementsByClassName('array-bar');
    let pivot = array[end];
    bars[end].classList.add('comparing');
    
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        bars[j].classList.add('comparing');
        await sleep(getDelay());

        comparisons++; updateCounters();
        if (array[j] < pivot) {
            i++;
            if (i !== j) {
                bars[i].classList.add('swapping');
                bars[j].classList.add('swapping');
                
                swaps++; updateCounters();
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;

                await swap(bars[i], bars[j]);
                await sleep(getDelay());
                
                bars[i].classList.remove('swapping');
                bars[j].classList.remove('swapping');
            }
        }
        bars[j].classList.remove('comparing');
    }
    
    i++;
    if (i !== end) {
        bars[i].classList.add('swapping');
        bars[end].classList.add('swapping');

        swaps++; updateCounters();
        let temp = array[i];
        array[i] = array[end];
        array[end] = temp;

        await swap(bars[i], bars[end]);
        await sleep(getDelay());

        bars[i].classList.remove('swapping');
        bars[end].classList.remove('swapping');
    }
    bars[end].classList.remove('comparing');
    
    return i;
}

// Data Structure Animations
async function animateStack() {
    setActiveLine(0);
    const vizArea = document.getElementById('visualization-area');
    vizArea.innerHTML = '';
    vizArea.style.display = 'flex';
    vizArea.style.flexDirection = 'column-reverse';
    vizArea.style.alignItems = 'center';
    vizArea.style.justifyContent = 'flex-start';
    vizArea.style.paddingTop = '20px';

    for (let i = 0; i < 5; i++) {
        setActiveLine(1);
        const val = Math.floor(Math.random() * 80) + 10;
        const box = document.createElement('div');
        box.className = 'ds-box';
        box.textContent = val;
        vizArea.appendChild(box);
        box.classList.add('comparing');
        await sleep(getDelay());
        box.classList.remove('comparing');
    }
    await sleep(getDelay());
    for (let i = 0; i < 5; i++) {
        setActiveLine(4);
        const boxes = document.getElementsByClassName('ds-box');
        if (boxes.length > 0) {
            boxes[boxes.length - 1].classList.add('swapping');
            await sleep(getDelay());
            vizArea.removeChild(boxes[boxes.length - 1]);
        }
    }
    setActiveLine(null);
    vizArea.style = '';
}

async function animateQueue() {
    setActiveLine(0);
    const vizArea = document.getElementById('visualization-area');
    vizArea.innerHTML = '';
    vizArea.style.display = 'flex';
    vizArea.style.flexDirection = 'row';
    vizArea.style.alignItems = 'center';
    vizArea.style.justifyContent = 'center';

    for (let i = 0; i < 5; i++) {
        setActiveLine(1);
        const val = Math.floor(Math.random() * 80) + 10;
        const box = document.createElement('div');
        box.className = 'ds-box';
        box.textContent = val;
        vizArea.appendChild(box);
        box.classList.add('comparing');
        await sleep(getDelay());
        box.classList.remove('comparing');
    }
    await sleep(getDelay());
    for (let i = 0; i < 5; i++) {
        setActiveLine(4);
        const boxes = document.getElementsByClassName('ds-box');
        if (boxes.length > 0) {
            boxes[0].classList.add('swapping');
            await sleep(getDelay());
            vizArea.removeChild(boxes[0]);
        }
    }
    setActiveLine(null);
    vizArea.style = '';
}

async function animateLinkedList() {
    setActiveLine(0);
    const vizArea = document.getElementById('visualization-area');
    vizArea.innerHTML = '';
    vizArea.style.display = 'flex';
    vizArea.style.flexDirection = 'row';
    vizArea.style.alignItems = 'center';
    vizArea.style.justifyContent = 'center';

    for (let i = 0; i < 4; i++) {
        const val = Math.floor(Math.random() * 80) + 10;
        const node = document.createElement('div');
        node.className = 'ds-node';
        node.textContent = val;
        vizArea.appendChild(node);
        if (i < 3) {
            const arrow = document.createElement('div');
            arrow.className = 'ds-arrow';
            arrow.textContent = '→';
            vizArea.appendChild(arrow);
        }
    }
    await sleep(getDelay());

    setActiveLine(1);
    const nodes = document.getElementsByClassName('ds-node');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add('comparing');
        await sleep(getDelay());
        nodes[i].classList.remove('comparing');
    }
    
    setActiveLine(2);
    const arrow = document.createElement('div');
    arrow.className = 'ds-arrow comparing';
    arrow.textContent = '→';
    vizArea.appendChild(arrow);
    const newNode = document.createElement('div');
    newNode.className = 'ds-node swapping';
    newNode.textContent = 'NEW';
    vizArea.appendChild(newNode);
    await sleep(getDelay());
    arrow.classList.remove('comparing');
    newNode.classList.remove('swapping');
    setActiveLine(null);
    vizArea.style = '';
}

async function animateTree() {
    setActiveLine(0);
    const vizArea = document.getElementById('visualization-area');
    vizArea.innerHTML = '';
    vizArea.style.display = 'flex';
    vizArea.style.flexDirection = 'column';
    vizArea.style.alignItems = 'center';
    vizArea.style.justifyContent = 'center';
    
    const treeHTML = `
        <div class="tree-container">
            <div class="tree-row"><div class="ds-node" id="tn-1">1</div></div>
            <div class="tree-row"><div class="ds-node" id="tn-2">2</div><div class="ds-node" id="tn-3">3</div></div>
            <div class="tree-row"><div class="ds-node" id="tn-4">4</div><div class="ds-node" id="tn-5">5</div><div class="ds-node" id="tn-6">6</div><div class="ds-node" id="tn-7" style="visibility:hidden;">7</div></div>
        </div>
    `;
    vizArea.innerHTML = treeHTML;
    
    const order = ['tn-4', 'tn-2', 'tn-5', 'tn-1', 'tn-6', 'tn-3'];
    setActiveLine(1);
    for (const id of order) {
        const node = document.getElementById(id);
        if (node) {
            node.classList.add('comparing');
            await sleep(getDelay());
            node.classList.remove('comparing');
            node.classList.add('sorted');
        }
    }
    setActiveLine(null);
    vizArea.style = '';
}

const algoComplexities = {
    'bubble': { time: 'O(n²)', space: 'O(1)' },
    'selection': { time: 'O(n²)', space: 'O(1)' },
    'insertion': { time: 'O(n²)', space: 'O(1)' },
    'merge': { time: 'O(n log n)', space: 'O(n)' },
    'quick': { time: 'O(n log n)', space: 'O(log n)' },
    'stack': { time: 'O(1)', space: 'O(n)' },
    'queue': { time: 'O(1)', space: 'O(n)' },
    'linkedlist': { time: 'O(n)', space: 'O(n)' },
    'tree': { time: 'O(n)', space: 'O(n)' }
};

function renderComplexity(algo) {
    const complexity = algoComplexities[algo] || { time: '-', space: '-' };
    const timeEl = document.getElementById('time-complexity');
    const spaceEl = document.getElementById('space-complexity');
    if (timeEl) timeEl.textContent = complexity.time;
    if (spaceEl) spaceEl.textContent = complexity.space;
}

// Tushar, this event listener ensures the script executes only after the DOM is fully parsed.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Tushar, utilizing a function to systematically render and apply syntax highlighting to the code block.
    const algorithmSelect = document.getElementById('algorithm-select');
    if (algorithmSelect) {
        renderCode(algorithmSelect.value);
        renderComplexity(algorithmSelect.value);
        algorithmSelect.addEventListener('change', () => {
            renderCode(algorithmSelect.value);
            renderComplexity(algorithmSelect.value);
            generateRandomArray();
            renderArray();
        });
    }

    console.log("DSA Visualizer connected successfully. Hello Tushar!");
    
    // Tushar, caching DOM element references into JavaScript variables for efficient access.
    const generateBtn = document.getElementById('generate-btn');
    const playBtn = document.getElementById('play-btn');
    const sizeSlider = document.getElementById('size-slider');
    const speedSlider = document.getElementById('speed-slider');
    const visualizationArea = document.getElementById('visualization-area'); //corrected on 17 aug - this was missing, causing a ReferenceError in renderArray() and blocking the whole page

    // Jab size slider move ho toh array turant update hona chahiye
    sizeSlider.addEventListener('input', () => {
        generateRandomArray();
        renderArray();
    });

    // Tushar, this function renders the numerical array as vertical DOM elements (bars) on the screen.
    function renderArray() {
        visualizationArea.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            const bar = document.createElement('div');
            bar.classList.add('array-bar');
            bar.style.height = `${array[i] * 3}px`;
            visualizationArea.appendChild(bar);
        }
    }

    // Tushar, event listener to trigger the generation and rendering of a new random array.
    generateBtn.addEventListener('click', () => {
        generateRandomArray();
        renderArray();
    });

    // Tushar, event listener to initiate the sorting sequence when the 'Play' button is activated.
    playBtn.addEventListener('click', async () => {
        // Play click hote hi controls disable kar do taaki beech mein koi disturb na kare
        playBtn.disabled = true;
        generateBtn.disabled = true;
        sizeSlider.disabled = true;
        speedSlider.disabled = true;
        algorithmSelect.disabled = true;
        
        const selectedAlgo = algorithmSelect.value;
        if (selectedAlgo === 'bubble') {
            await bubbleSort();
        } else if (selectedAlgo === 'selection') {
            await selectionSort();
        } else if (selectedAlgo === 'insertion') {
            await insertionSort();
        } else if (selectedAlgo === 'merge') {
            await mergeSort();
        } else if (selectedAlgo === 'quick') {
            await quickSort();
        } else if (selectedAlgo === 'stack') {
            await animateStack();
        } else if (selectedAlgo === 'queue') {
            await animateQueue();
        } else if (selectedAlgo === 'linkedlist') {
            await animateLinkedList();
        } else if (selectedAlgo === 'tree') {
            await animateTree();
        }

        
        // Sorting poori ho gayi, ab controls wapis enable kar do
        playBtn.disabled = false;
        generateBtn.disabled = false;
        sizeSlider.disabled = false;
        speedSlider.disabled = false;
        algorithmSelect.disabled = false;
    });

    // Tushar, automatically generate and render an initial array upon page load.
    //corrected on 17 aug - this now works end-to-end: visualizationArea is properly declared above,
    //so as soon as the page loads, a random array is generated AND rendered as bars automatically
    generateRandomArray();
    renderArray();
});

//corrected 1 bug 2 more things that is mentioned 
//added the array that shows up as soon as we get into the page.

//RAHUL: ab tu isme kuch aisa add kar jo saath saath ek basic theory bhi deta rahe try to make it more understandable
//abhi isme or topics mat add kar but explanation add kar, itll be much better.
