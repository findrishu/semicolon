// State variables
let array = [];

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
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Priyanshu, yahan hum 2 bars ko compare karne ke liye yellow (comparing) class add kar rahe hain
            bars[j].classList.add('comparing');
            bars[j + 1].classList.add('comparing');
            await sleep(getDelay());

            if (array[j] > array[j + 1]) {
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

// Priyanshu, jab pura HTML load ho jata hai browser mein, tab yeh line ke andar ka code chalta hai.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Priyanshu, yeh line 'pre' aur 'code' tags ke block ko html mein dhundti hai aur uspe 
    // highlight.js chalati hai taaki keywords ko colors mil jayein (syntax highlighting).
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });

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
