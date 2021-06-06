const pantalla = document.getElementById('hms');
pantalla.innerHTML = '00:00:00';

const buttonstart = document.querySelector('.start');
buttonstart.addEventListener('click', (e) => start());
const buttonstop = document.querySelector('.stop');
buttonstop.addEventListener('click', (e) => stop());
const buttonreset = document.querySelector('.reiniciar');
buttonreset.addEventListener('click', (e) => reset());
let h = 0;
let m = 0;
let s = 0;
let funcionando = false;
let id;
function start() {
    if (funcionando === false) {
        id = setInterval(escribir, 1000);
        buttonstart.removeEventListener('click', start);
        funcionando = true;
    }
    console.log(funcionando);
}
function escribir() {
    let hAux, mAux, sAux;
    s++;
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    if (h > 24) {
        h = 0;
    }

    if (s < 10) {
        sAux = '0' + s;
    } else {
        sAux = s;
    }
    if (m < 10) {
        mAux = '0' + m;
    } else {
        mAux = m;
    }
    if (h < 10) {
        hAux = '0' + h;
    } else {
        hAux = h;
    }

    document.getElementById('hms').innerHTML = hAux + ':' + mAux + ':' + sAux;
}
function stop() {
    if (funcionando === true) {
        clearInterval(id);
        funcionando = false;
    }
    console.log(funcionando);
}
function reset() {
    pantalla.innerHTML = '00:00:00';
    h = 0;
    m = 0;
    s = 0;
}
