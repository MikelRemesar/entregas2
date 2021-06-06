'use strict';
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const norepetidos = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let estarepetido = false;
    for (let j = 0; j < norepetidos.length; j++) {
        if (norepetidos[j] === name) {
            estarepetido = true;
            break;
        }
    }
    if (!estarepetido) {
        norepetidos.push(name);
    }
}

console.log(norepetidos);
