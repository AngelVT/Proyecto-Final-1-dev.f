const columns = document.getElementsByClassName('column');
let counter = 0;
let counterB = window.innerHeight;
const limit = window.innerHeight - (window.innerHeight/100 * 10);
const pasos = 50;

columns[1].style.top = counterB + 'px';
columns[3].style.top = counterB + 'px';

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        counter = Math.min(counter + pasos, limit);
        counterB = Math.max(counterB - pasos, 0);
    }
    if (event.deltaY < 0) {
        counter = Math.max(counter - pasos, 0);
        counterB = Math.min(counterB + pasos, limit);
    }

        columns[0].style.top = counter + 'px';
        columns[2].style.top = counter + 'px';
        columns[1].style.top = counterB + 'px';
        columns[3].style.top = counterB + 'px';
});