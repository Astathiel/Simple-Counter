document.addEventListener('DOMContentLoaded', () => {

    const countDisplay = document.getElementById('count');
    const incdBtn = document.getElementById('increment');
    const decdBtn = document.getElementById('decrement');

    let count = 0;

    incdBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    decdBtn.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });
})