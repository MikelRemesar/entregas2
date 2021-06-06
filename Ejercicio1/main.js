/*'use strict';
const x = prompt('¿Cuántos usuarios deseas generar?');

function getUser(numusers) {
    const incompleteurl = 'https://randomuser.me/api/?results=';
    const url = incompleteurl + numusers;

    fetch(url)
        .then((response) => response.json())
        .then((JSON) => console.log(JSON));
        
}
getUser(x);*/

'use strict';
const x = prompt('¿Cuántos usuarios deseas generar?');
const users = [];
users.length = x;
function getUser(numusers) {
    const incompleteurl = 'https://randomuser.me/api/?results=';
    const url = incompleteurl + numusers;

    fetch(url)
        .then((response) => response.json())
        .then((users) => console.log(users));
}

getUser(x);
