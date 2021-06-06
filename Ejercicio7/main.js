'user strict';
const puzzle = document.querySelector('.puzzle');

const addbutton = document.querySelector('.add');
addbutton.addEventListener('click', (e) => create());
function create() {
    let elementNode = document.createElement('div');

    elementNode.style.backgroundColor = `rgb(${Math.random() * 255},${
        Math.random() * 255
    },${Math.random() * 255})`;
    elementNode.setAttribute('class', 'block');
    puzzle.appendChild(elementNode);
}

setInterval(() => {
    let divs = document.querySelectorAll('.puzzle > div');
    for (const div of divs) {
        div.style.backgroundColor = `rgb(${Math.random() * 255},${
            Math.random() * 255
        },${Math.random() * 255})`;
    }
}, 1000);
