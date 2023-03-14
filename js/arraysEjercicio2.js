/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades = [];
let ciudad = '';
do {
  ciudad = prompt('Introduce un nombre de ciudad: ');
  if (ciudad != null) {
    ciudad.toUpperCase();
    ciudades.push(ciudad);
  }
} while (ciudad != null);

console.log(ciudades);

document.write('<h2>Listado de Ciudades</h2>');
document.write('<ul>');
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]}</li>`);
}
document.write('</ul>');

// a) Mostrar la longitud del Arreglo
document.write('<h2>Mostrar la longitud del Arreglo</h2>');
document.write(
  `La longitud del Arreglo es: <strong>${ciudades.length}</strong>`
);
document.write('<hr>');

// b) Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(
  '<h2>Mostrar en el documento web los ítems de las posiciones primera, tercera y última.</h2>'
);
document.write(
  `<p>La Ciudad en la primera posición del arreglo es: <strong>${ciudades[0]}</strong></p>`
);
document.write(
  `<p>La Ciudad en la tercera posición del arreglo es: <strong>${ciudades[2]}</strong></p>`
);
document.write(
  `La Ciudad en la última posición del arreglo es: <strong>${
    ciudades[ciudades.length - 1]
  }</strong>`
);
document.write('<hr>');

//c) Añade en última posición la ciudad de París.
document.write(
  '<h2>Añade en última posición la ciudad de París y mostrar listado de ciudades.</h2>'
);
ciudades.push('París');
document.write('<ul>');
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]}</li>`);
}
document.write('</ul>');
document.write('<hr>');

//d) Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(
  '<h2>Escribe por pantalla el elemento que ocupa la segunda posición.</h2>'
);
document.write(
  `<p>El elemento que ocupa la segunda posición es: <strong>${ciudades[1]}</strong></p>`
);
document.write('<hr>');

//e) Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona';

document.write(
  '<h2>Sustituye el elemento que ocupa la segunda posición por la ciudad de "Barcelona" y mostrar el listado de ciudades.</h2>'
);
document.write('<ul>');
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]}</li>`);
}
document.write('</ul>');
