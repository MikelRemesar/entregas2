'user strict';
const parrafos = document.querySelectorAll('p');
for (const parrafo of parrafos) {
    let par = parrafo.innerHTML;
    let parArr = par.split(/[\s,\.,\"]+/);

    parArr.forEach((palabra) => {
        if (palabra.length > 5) {
            par = par.split(palabra).join(`<u>${palabra}</u>`);
        }
    });

    parrafo.innerHTML = par;
}
