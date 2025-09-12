// Ensure the script runs after the HTML document has been completely loaded.
document.addEventListener('DOMContentLoaded', () => {

    // Get references to DOM elements
    const countDisplay = document.getElementById('count');
    const incdBtn = document.getElementById('increment');
    const decdBtn = document.getElementById('decrement');

    // Initialize counter value
    let count = 0;

    // Handle increment button click
    incdBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    // Handle decrement button click
    decdBtn.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });
})