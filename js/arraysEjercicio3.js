/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
const nroTiradasDados = 50;
let dado1 = 0;
let dado2 = 0;
let resultado = 0;
let sumaTiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let tirada = 0; tirada < nroTiradasDados; tirada++) {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);
  resultado = dado1 + dado2;
  console.log(`posicion: ${tirada} y ${resultado}`);
  switch (resultado) {
    case 2:
      sumaTiradas[0]++;
      break;
    case 3:
      sumaTiradas[1]++;
      break;
    case 4:
      sumaTiradas[2]++;
      break;
    case 5:
      sumaTiradas[3]++;
      break;
    case 6:
      sumaTiradas[4]++;
      break;
    case 7:
      sumaTiradas[5]++;
      break;
    case 8:
      sumaTiradas[6]++;
      break;
    case 9:
      sumaTiradas[7]++;
      break;
    case 10:
      sumaTiradas[8]++;
      break;
    case 11:
      sumaTiradas[9]++;
      break;
    case 12:
      sumaTiradas[10]++;
      break;
    default:
      alert(`Número fuera del rango entre 2 y 12`);
      break;
  }
}
document.write('<h2>Tiradas de 2 dados 50 veces</h2>');
document.write('<h2>Listado de Apariciones de suma de dados entre 2 y 12</h2>');
document.write('<ul>');
for (let indicePos = 0; indicePos < sumaTiradas.length; indicePos++) {
  document.write(
    `<li>Suma que fueron iguales a <strong>${
      indicePos + 2 // corresponde a la suma igual a 2 en la tirada en la posición 0 del array.
    }</strong> aparecieron <strong>${sumaTiradas[indicePos]} `
  );
  if (sumaTiradas[indicePos] === 1) {
    document.write('</strong>vez</li>');
  } else {
    document.write('</strong>veces</li>');
  }
}
document.write('</ul>');
