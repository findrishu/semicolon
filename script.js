// State variables
let array = [];

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

// Priyanshu, ab hum delay ko slider se control karenge
function getDelay() {
    const speedSlider = document.getElementById('speed-slider');
    const speed = speedSlider ? parseInt(speedSlider.value) : 100;
    return 1010 - speed; // High speed value = Low delay
}

// Priyanshu, yeh helper functions hain jo animation mein delay aur swap laane ke kaam aayenge
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function swap(el1, el2) {
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Priyanshu, yeh function naya array banata hai random numbers (10 se 90) ke sath
function generateRandomArray() {
    array = [];
    const sizeSlider = document.getElementById('size-slider');
    const arraySize = sizeSlider ? parseInt(sizeSlider.value) : 20;
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 80) + 10);
    }
}

// Priyanshu, yeh function Bubble Sort algorithm ka logic hai jo bars ko height ke hisaab se sort karega
async function bubbleSort() {
    setActiveLine(0);
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length - 1; i++) {
        setActiveLine(1);
        await sleep(getDelay()/2);
        for (let j = 0; j < array.length - i - 1; j++) {
            setActiveLine(2);
            // Priyanshu, yahan hum 2 bars ko compare karne ke liye yellow (comparing) class add kar rahe hain
            bars[j].classList.add('comparing');
            bars[j + 1].classList.add('comparing');
            await sleep(getDelay());

            setActiveLine(3);
            if (array[j] > array[j + 1]) {
                setActiveLine(4);
                // Priyanshu, agar pehla bar bada hai toh red (swapping) class laga ke height swap karenge
                bars[j].classList.add('swapping');
                bars[j + 1].classList.add('swapping');
                
                // Swap data logic
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
        // Priyanshu, jo bar apni sahi jagah par aa gaya use green (sorted) kar denge
        bars[array.length - 1 - i].classList.add('sorted');
    }
    // Priyanshu, sabse pehla bar bach gaya, toh wo bhi sorted hi hoga!
    bars[0].classList.add('sorted');
    setActiveLine(null);
}

// Priyanshu, yeh Selection Sort ka logic hai
async function selectionSort() {
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        bars[i].classList.add('comparing');
        await sleep(getDelay());

        for (let j = i + 1; j < array.length; j++) {
            bars[j].classList.add('comparing');
            await sleep(getDelay());

            if (array[j] < array[minIdx]) {
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
            bars[i].classList.add('swapping');
            
            // Swap data logic
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
}

// Priyanshu, yeh Insertion Sort ka logic hai
async function insertionSort() {
    const bars = document.getElementsByClassName('array-bar');
    // Pehle element ko sorted maan lete hain, isliye i = 1 se shuru karenge
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let keyHeight = bars[i].style.height;
        let j = i - 1;
        
        bars[i].classList.add('swapping'); // Highlight the element to be inserted
        await sleep(getDelay());

        while (j >= 0 && array[j] > key) {
            bars[j].classList.add('comparing');
            await sleep(getDelay());
            
            array[j + 1] = array[j];
            bars[j + 1].style.height = bars[j].style.height;
            
            bars[j].classList.remove('comparing');
            j = j - 1;
        }
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
}

// Priyanshu, yeh Merge Sort ka logic hai
async function mergeSort() {
    await mergeSortHelper(0, array.length - 1);
    const bars = document.getElementsByClassName('array-bar');
    for (let k = 0; k < array.length; k++) {
        bars[k].classList.add('sorted');
    }
}

async function mergeSortHelper(start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSortHelper(start, mid);
    await mergeSortHelper(mid + 1, end);
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

// Priyanshu, yeh Quick Sort ka logic hai
async function quickSort() {
    await quickSortHelper(0, array.length - 1);
    const bars = document.getElementsByClassName('array-bar');
    for (let k = 0; k < array.length; k++) {
        bars[k].classList.add('sorted');
    }
}

async function quickSortHelper(start, end) {
    if (start < end) {
        let pivotIndex = await partition(start, end);
        await quickSortHelper(start, pivotIndex - 1);
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

        if (array[j] < pivot) {
            i++;
            if (i !== j) {
                bars[i].classList.add('swapping');
                bars[j].classList.add('swapping');
                
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

// Priyanshu, jab pura HTML load ho jata hai browser mein, tab yeh line ke andar ka code chalta hai.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Priyanshu, code block render aur highlight karne ke liye hum function use karenge.
    const algorithmSelect = document.getElementById('algorithm-select');
    if (algorithmSelect) {
        renderCode(algorithmSelect.value);
        algorithmSelect.addEventListener('change', () => {
            renderCode(algorithmSelect.value);
        });
    }

    console.log("DSA Visualizer connected successfully. Hello Priyanshu!");
    
    // Priyanshu, HTML mein jo elements hain, unhe hum yahan Javascript mein variable bana rahe hain
    const generateBtn = document.getElementById('generate-btn');
    const playBtn = document.getElementById('play-btn');
    const visualizationArea = document.getElementById('visualization-area');
    const sizeSlider = document.getElementById('size-slider');
    const speedSlider = document.getElementById('speed-slider');
    const algorithmSelect = document.getElementById('algorithm-select');

    // Jab size slider move ho toh array turant update hona chahiye
    sizeSlider.addEventListener('input', () => {
        generateRandomArray();
        renderArray();
    });

    // Priyanshu, yeh function numbers ko screen par vertical bars ki tarah draw karta hai
    function renderArray() {
        visualizationArea.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            const bar = document.createElement('div');
            bar.classList.add('array-bar');
            bar.style.height = `${array[i] * 3}px`;
            visualizationArea.appendChild(bar);
        }
    }

    // Priyanshu, jab koi "Generate Array" button pe click karega toh yeh naya array banake dikhayega
    generateBtn.addEventListener('click', () => {
        generateRandomArray();
        renderArray();
    });

    // Priyanshu, jab koi "Play" button pe click karega toh sorting start hogi
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
        }

        
        // Sorting poori ho gayi, ab controls wapis enable kar do
        playBtn.disabled = false;
        generateBtn.disabled = false;
        sizeSlider.disabled = false;
        speedSlider.disabled = false;
        algorithmSelect.disabled = false;
    });

    // Priyanshu, page load hote hi pehli baar ek array apne aap ban jaye aur dikhe
    generateRandomArray();
    renderArray();
});
