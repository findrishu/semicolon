// Priyanshu, jab pura HTML load ho jata hai browser mein, tab yeh line ke andar ka code chalta hai.
// Taaki JavaScript kisi element ko dhunde toh error na aaye kyuki element pehle hi load ho chuka hai.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Priyanshu, yeh line 'pre' aur 'code' tags ke block ko html mein dhundti hai aur uspe 
    // highlight.js chalati hai taaki keywords ko colors mil jayein (syntax highlighting).
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });

    // Priyanshu, yeh line check karne ke liye hai ki file sahi se link hui hai ya nahi.
    // Console mein F12 daba ke dekhoge toh ye text likha hua dikhega.
    console.log("DSA Visualizer connected successfully. Hello Priyanshu!");
    
    // Priyanshu, aage chal ke array banana, swap karna aur sorting animations yahan likhi jayengi!
});
