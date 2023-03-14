/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function tablaMultiplicar(num) {
  //Armar la tabla
  document.write('<table><thead>');
  document.write(`<tr><th>Tabla de Multiplicar del ${num}</th></tr>`);
  document.write('<tbody>');
  for (let i = 1; i <= 10; i++) {
    document.write('<tr>');
    document.write(`<td>${num} X ${i} = </td>`);
    document.write('<td>' + num * i + '</td>');
    document.write('</tr>');
  }
  document.write('</tbody>');
}

let numero = '';
do {
  numero = prompt('Ingrese el número a multiplicar:');
} while (isNaN(numero) || numero.length === 0);

tablaMultiplicar(parseInt(numero));
