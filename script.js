
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

// Helper functions for animation
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function swap(el1, el2) {
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
// State variables
let array = [];
const ARRAY_SIZE = 20;

function generateRandomArray() {
    array = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        array.push(Math.floor(Math.random() * 80) + 10);
    }
}
// Priyanshu, jab pura HTML load ho jata hai browser mein, tab yeh line ke andar ka code chalta hai.
// Taaki JavaScript kisi element ko dhunde toh error na aaye kyuki element pehle hi load ho chuka hai.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Priyanshu, yeh line 'pre' aur 'code' tags ke block ko html mein dhundti hai aur uspe 
    // highlight.js chalati hai taaki keywords ko colors mil jayein (syntax highlighting).
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
        generateRandomArray();
    renderArray();
});

    // Priyanshu, yeh line check karne ke liye hai ki file sahi se link hui hai ya nahi.
    // Console mein F12 daba ke dekhoge toh ye text likha hua dikhega.
    console.log("DSA Visualizer connected successfully. Hello Priyanshu!");
    
    // Priyanshu, aaj jo buttons add kiye hain HTML mein, unhe yahan Javascript mein dhundh rahe hain
    const generateBtn = document.getElementById('generate-btn');
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


    // Priyanshu, jab koi "Generate Array" button pe click karega toh yeh code chalega
    generateBtn.addEventListener('click', () => {
        generateRandomArray();
        renderArray();
        generateRandomArray();
    renderArray();
});

    // Priyanshu, jab koi "Play" button pe click karega toh yeh code chalega
    playBtn.addEventListener('click', () => {
        console.log("Play Button Clicked!");
        alert("Priyanshu, Animation Play karne ka logic yahan aayega!");
        generateRandomArray();
    renderArray();
});

    // Priyanshu, aage chal ke array banana, swap karna aur sorting animations yahan likhi jayengi!
    generateRandomArray();
    renderArray();
});
