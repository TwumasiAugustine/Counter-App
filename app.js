const count = document.getElementById('count');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

increment.addEventListener('click', () => {
    count.innerHTML = parseInt(count.innerHTML) + 1;
});
decrement.addEventListener('click', () => {
    count.innerHTML = parseInt(count.innerHTML) - 1;
});
reset.addEventListener('click', () => {
    count.innerHTML = 0;
});