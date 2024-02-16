const counterDisplay = document.querySelector('.counter-display');
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const resetBtn = document.querySelector('.reset-btn');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
});