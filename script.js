// State variables
let array = [];
const ARRAY_SIZE = 20;

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
    for (let i = 0; i < ARRAY_SIZE; i++) {
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
            await sleep(100);

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
                await sleep(100);
                
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

// Priyanshu, jab pura HTML load ho jata hai browser mein, tab yeh line ke andar ka code chalta hai.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Priyanshu, yeh line 'pre' aur 'code' tags ke block ko html mein dhundti hai aur uspe 
    // highlight.js chalati hai taaki keywords ko colors mil jayein (syntax highlighting).
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });

    console.log("DSA Visualizer connected successfully. Hello Priyanshu!");
    
    // Priyanshu, HTML mein jo buttons hain, unhe hum yahan Javascript mein variable bana rahe hain
    const generateBtn = document.getElementById('generate-btn');
    const playBtn = document.getElementById('play-btn');
    const visualizationArea = document.getElementById('visualization-area');

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

    // Priyanshu, jab koi "Play" button pe click karega toh Bubble Sort start hoga
    playBtn.addEventListener('click', async () => {
        // Play click hote hi buttons disable kar do taaki beech mein koi disturb na kare
        playBtn.disabled = true;
        generateBtn.disabled = true;
        
        await bubbleSort();
        
        // Sorting poori ho gayi, ab buttons wapis enable kar do
        playBtn.disabled = false;
        generateBtn.disabled = false;
    });

    // Priyanshu, page load hote hi pehli baar ek array apne aap ban jaye aur dikhe
    generateRandomArray();
    renderArray();
});
