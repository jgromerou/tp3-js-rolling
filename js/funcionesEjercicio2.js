/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function esMayuscula(letra) {
  return letra === letra.toUpperCase();
}

function esMinuscula(letra) {
  return letra === letra.toLowerCase();
}
function comprobarMayusMinusAmbas(cadenaTexto) {
  let letraMayuscula = 0;
  let letraMinuscula = 0;
  for (
    let indiceCadena = 0;
    indiceCadena < cadenaTexto.length;
    indiceCadena++
  ) {
    let letraActual = cadenaTexto.charAt(indiceCadena);
    if (esMayuscula(letraActual)) {
      letraMayuscula++;
    } else if (esMinuscula(letraActual)) {
      letraMinuscula++;
    } else {
      alert('No es una letra');
    }
  }

  if (cadenaTexto.length !== 0) {
    if (letraMayuscula === cadenaTexto.length) {
      return document.write(
        `<p>La Cadena de texto: ${cadenaTexto} está formada solo por letras Mayúsculas.</p>`
      );
    }

    if (letraMinuscula === cadenaTexto.length) {
      return document.write(
        `<p>La Cadena de texto: ${cadenaTexto} está formada solo por letras Minúsculas.</p>`
      );
    }
    return document.write(
      `<p>La Cadena de texto: ${cadenaTexto} está formada por letras Mayúsculas y minúsculas.</p>`
    );
  } else {
    return document.write(`<p>La Cadena de texto está vacía.</p>`);
  }
}

document.write(
  '<h2>Comprobar si las cadenas de textos sólo tienen Mayúsculas, Minúsculas o ambas</h2>'
);
document.write('<hr>');
comprobarMayusMinusAmbas('');
document.write('<hr>');
comprobarMayusMinusAmbas('ROLLING CODE');
document.write('<hr>');
comprobarMayusMinusAmbas('rolling');
document.write('<hr>');
comprobarMayusMinusAmbas('Pato');
