//**6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

//Ejemplo:

//Input:
//lado A = 24
//lado B = 5

let ladoA=parseInt(prompt('ingrese valor para el ladoA'));
let ladoB=parseInt(prompt('ingrese valor para el ladoB'));

function rectángulo(ladoA, ladoB){


let perimetro=(2*(ladoA+ladoB))

document.write(`Lado A= ${ladoA}`);
document.write(`Lado B= ${ladoB}`);
document.write(`Perimetro= ${perimetro}`);
}

rectángulo(ladoA,ladoB
);