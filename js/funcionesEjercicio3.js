/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function calcularPerimetro(l1, l2) {
  let resultado = 0;
  resultado = 2 * (l1 + l2);
  document.write(
    `<p>El perimetro de un rectángulo de lados ${l1} y ${l2} es igual a ${resultado}.</p>`
  );
}

let lado1 = '';
let lado2 = '';
do {
  lado1 = prompt('Ingrese el valor del primer lado de un rectángulo:');
} while (isNaN(lado1) || lado1.length === 0);

do {
  lado2 = prompt('Ingrese el valor del segundo lado de un rectángulo:');
} while (isNaN(lado2) || lado2.length === 0);

document.write(
  '<h2>Cálculo del perímetro de un rectangulo ingresado por el usuario:'
);
calcularPerimetro(parseFloat(lado1), parseFloat(lado2));
