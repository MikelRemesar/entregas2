'use strict';
//Obtenemos la fecha en la que se accede a la página
const initialTime = new Date().getTime();
//Creamos intervalo de repetición
const print = setInterval(() => cronometro(), 5000);
//Funcion que se va a repetir dentro del intervalo
function cronometro() {
    //Cogemos la hora de cada repetición del intervalo
    const actualTime = new Date().getTime();
    //Hallamos diferencia entre la actual y la de entrada
    let diff = parseInt((actualTime - initialTime) / 1000);
    //Declaramos las variables dia,minutos,horas y sus auxiliares de formato
    let mm = 0;
    let hh = 0;
    let dd = 0;
    let auxM = 0;
    let auxH = 0;
    let auxS = 0;
    //Bucles para aumentar cada vez que se llegue a 60 segundos,minutos,horas
    for (diff; diff >= 60; diff -= 60) {
        mm++;
    }
    for (mm; mm >= 60; mm -= 60) {
        hh++;
    }
    for (hh; hh >= 24; hh -= 24) {
        dd++;
    }
    //Condiciones de formato casos inferiores a 10 segundos,minutos,horas
    mm < 10 ? (auxM = '0' + mm) : (auxM = mm);
    hh < 10 ? (auxH = '0' + hh) : (auxH = hh);
    diff < 10 ? (auxS = '0' + diff) : (auxS = diff);
    //Impresión resultados por pantalla
    console.log(dd + ' dias ' + auxH + ':' + auxM + ':' + auxS);
}
