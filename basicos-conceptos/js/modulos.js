import saludar, { PI } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo Modulos.Js");
saludar();
console.log(PI);
console.log(aritmetica.sumar(2, 3));

/* function runaFuerza(base = 0, nivelActual = 1, incremento = 7) {
  if (nivelActual < 11) {
    let suma = base + incremento;
    base = suma;
    nivelActual++;
    incremento = incremento + 2;
    runaFuerza(base, nivelActual, incremento);
  } else {
    console.log(`El maximo nivel de la runa es '${base} ${incremento}'`);
  }
}

runaFuerza(9, 1, 7); */
