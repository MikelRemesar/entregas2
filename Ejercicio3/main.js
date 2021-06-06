//Pendiente optimizar//

'use strict';
const input = prompt(
    'Inserte el valor decimal o binario que desee transformar en su equivalente:'
);
let num = parseInt(input);
const operacion = prompt(
    'Inserte la  operación: (1) Decimal a binario (2) Binario a Decimal'
);
if (operacion === '1') {
    const dectobin = num.toString(2);
    console.log(dectobin);
} else if (operacion === '2') {
    function bintodec(bin) {
        let acc = 0;
        let binario = Array.from(input);
        for (let i = 0; i < binario.length; i++) {
            let currNum = binario[i];
            if (currNum === '1') {
                acc = acc + 2 ** (binario.length - i - 1);
            }
        }
        console.log(acc);
    }
    bintodec(num);
} else {
    console.log('La operación seleccionada no es válida');
}
