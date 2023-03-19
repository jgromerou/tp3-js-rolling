/*
1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function parImpar(num) {
  document.write(
    num % 2 === 0
      ? `<p>El número: <strong>${num}</strong> es par.</p>`
      : `<p>El número: <strong>${num}</strong> es impar.</p>`
  );
}

document.write('<h2>Números par o impar</h2>');
document.write('<hr>');
parImpar(8);
parImpar(11);
parImpar(1);
parImpar(2004);
