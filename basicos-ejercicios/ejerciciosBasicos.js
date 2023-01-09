/* 1) Programa una funcion que cuente el numero de caracteres de una cadena de texto 
EJEMPLO miFuncion('Hola Mundo') devolvera 10*/

//Con funcion declarada
function contarCaracteres(cadena = "") {
  return console.log(
    `La cadena '${cadena}' tiene '${cadena.length}' caracteres`
  );
}
//Con funcion expresada
/* const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena '${cadena}' tiene '${cadena.length}' caracteres`); */

// contarCaracteres("Hola Mundo");

/* 2) Programa una funcion que te devuelva el texto recortado segun el numero de 
caracteres indicados
EJEMPLO  miFuncion('Hola Mundo', 4) devolvera 'Hola' */

const recortarTexto = (cadena = "", indice = undefined) =>
  !cadena
    ? console.warn("No ha ingresado una cadena")
    : indice === undefined
    ? console.warn("No ha ingresado un indice")
    : console.info(`${cadena.slice(0, indice)}`);

// recortarTexto("Hola Mundo", 4);

/* 3) Programa una funcion que dada una String te devuelva un Array de textos
separados por cierto caracter
EJEMPLO miFuncion('hola que tal',' ') devolvera ['hola', 'que', 'tal'] */

const cadenaAArray = (cadena = "", cortador = "") =>
  !cadena
    ? console.warn("No ha ingresado una cadena")
    : !cortador
    ? console.warn("No ingresaste un cortador")
    : console.log(cadena.split(cortador));

// cadenaAArray("hola que tal", " ");

/* 4) Programa una funcion que repita el texto X veces
EJEMPLO miFuncion('Hola Mundo', 3) devolvera 'Hola Mundo Hola Mundo Hola Mundo */

const repetirTexto = (cadena = "", repetidor = undefined) =>
  !cadena
    ? console.warn("No ha ingresado una cadena")
    : !repetidor
    ? console.warn("No ha ingresado un repetidor")
    : console.log(`${cadena.repeat(repetidor)}`);

// repetirTexto("Hola Mundo", 3);

/* 5) Programa una funcion que invierta las palabras de una cadena de texto
EJEMPLO miFuncion('Hola Mundo') => "odnuM aloH" */

const invertirTexto = (cadena = "") =>
  !cadena
    ? console.warn("No escribiste una cadena")
    : console.info(cadena.split("").reverse().join(""));

// invertirTexto("odnuM aloH");

/* 6) Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo
EJEMPLO miFuncion("Hola mundo adios mundo", "mundo") => 2 */

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.log("No ingresaste una cadena");

  if (!texto) return console.log("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(
    `La palabra ${texto} se repite ${contador} veces en la cadena "${cadena}"`
  );
};

// textoEnCadena("Hola mundo adios mundo", "mundo");

/* 7) Programa una funcion que valide si una palabra o frase dada es un palindromo(que se lee ingual en 
  ambos sentido) EJEMPLO miFuncion("salas") => tue */

const palindromo = (cadena = "") => {
  return console.log(cadena.split("").reverse().join("") === cadena);
};

// palindromo("salas");
/* 8) Programa una funcion que elimine cierto patron de caracteres de un texto dado 
EJEMPLO miFuncion("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz") => 1,2,3,4,5 */

const eliminarPatron = (cadena = "", patron = "") =>
  !cadena
    ? console.warn("No ha ingresado una cadena")
    : !patron
    ? console.log("No ha ingresado un patron")
    : console.log(cadena.replace(new RegExp(patron, "ig"), ""));

// eliminarPatron("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz");

/* 9) Programa una funcion que obtenga un numero aleatorio entre 501 y 600 */

const numeroAleatorio = () =>
  console.log(Math.round(Math.random() * 100) + 500);

// numeroAleatorio();

/* 10) Programa una funcion que reciba un numero y evalue si es capicua o no(que se lee igual en un sentido
  que en otro) EJEMPLO miFuncion(2002) => true */

const capicua = (numero = 0) => {
  if (!numero) return console.log("No ingresaste un numero");

  if (typeof numero != "number") return console.warn("No es un numero");

  return console.log(
    numero.toString().split("").reverse().join("") === numero.toString()
  );
};

// capicua(2225222);

/* 11) Programauna funcion que calcule el factorial de un numero (El factorial de un numero n se define como 
  el producto de todos los numeros desde 1 hasta n) EJEMPLO miFuncion(5) => 120 */

const factorial = (numero = 0) => {
  if (!numero) return console.log("No ingresaste un numero");
  let element = 1;
  for (let i = 1; i <= numero; i++) {
    element = element * i;
  }
  return console.warn(`El factorial de ${numero} es ${element}`);
};

// factorial(10);

/* 12) Programa una funcion que determine si un numero es primo(divisible solo por si mismo y 1)
EJEMPLO miFuncion(7) => true */

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un numero`);

  if (numero === 0) return console.error("El numero no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El numero ${numero}, NO ES PRIMO`)
    : console.log(`El numero ${numero}, SI ES PRIMO`);
};

// numeroPrimo(19);

/* 13) Programa una funcion que determine si un numero es par o impar 
EJEMPLO miFuncion(29) => impar */

const parImpar = (numero = undefined) =>
  numero % 2 === 0 ? console.log("Es par") : console.log("Es impar");

// parImpar(5);

/* 14) Programa una funcion para convertir grados Celsius a Fahrenheit y viceversa
EJEMPLO miFuncion(0,"C") => 32F */

const covertirCelciusAFahrenheit = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn("No ingresaste un grado");

  if (typeof grados !== "number")
    return console.error(`El valor ${grados} no es un numero`);

  if (unidad === undefined) return console.warn("No ingresaste la unidad");

  if (typeof unidad !== "string")
    return console.error(
      `El valor ${unidad} ingresado no es una cadena de texto`
    );

  if (unidad.length !== 1 || !/C|F/.test(unidad))
    return console.warn("El valor de unidad no es reconocido");

  if (unidad === "C")
    return console.info(`${grados}C = ${Math.round(grados * (9 / 5) + 32)}F`);

  if (unidad === "F")
    return console.info(`${grados}C = ${Math.round(((grados - 32) * 5) / 9)}C`);
};

// covertirCelciusAFahrenheit(32, "F");

/* 15) Programa una funcion para convertir numero de base binaria a decimal y viceversa
EJEMPLO miFuncion(100,2) => 4 base 10 */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un numero`);

  if (base === undefined) return console.warn("No ingresaste un numero");

  if (typeof base !== "number")
    return console.error(`El valor ${base} no es un numero`);

  if (base === 2) {
    return console.log(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10)
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
};

// convertirBinarioDecimal(100, 2);
// convertirBinarioDecimal(114, 10);

/* 16) Programa una funcion que devuelva el monto final despues de aplcar un descuento a
una cantidad dada EJEMPLO miFuncion(1000,20) =>800 */

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste un numero");

  if (typeof monto !== "number")
    return console.error(`El valor ${monto} no es un numero`);

  if (monto === 0 || Math.sign(monto) === -1)
    return console.error(`El monto no puede ser 0 o negativo`);

  return console.info(
    `El descuento de ${descuento}% en ${monto} queda en ${
      monto - (monto * descuento) / 100
    }`
  );
};

// aplicarDescuento(500, 25);
// aplicarDescuento(1000, 20);

/* 17) Programa una funcion que dada una fecha valida determine cuantos años han pasado 
hasta el dia de hoy EJEMPLO miFuncion(1984,4,23) => 35 años */

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn(`No ingresaste una fecha`);

  if (!(fecha instanceof Date))
    return console.error(`El valor que ingresaste no es una fecha válida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    anioEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / anioEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

// calcularAnios();
// calcularAnios({});
// calcularAnios(new Date());
// calcularAnios(new Date(1996, 10, 12));
// calcularAnios(new Date(2050, 10, 12));

/* 18) Programa una funcion que dada una cadena de texto cuente el numero de vocales y consonantes
EJEMPLO miFuncion("Hola mundo") => Vocales 4 Consonantes 5 */

const contarLetras = (cadena = "") => {
  if (!cadena) return console.log("No ingresaste una cadena de texto");

  if (typeof cadena != "string")
    return console.error(`El valor ${cadena} no es una cadena de texto`);

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiou]/.test(letra)) {
      vocales++;
    }

    if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

// contarLetras("hola");

/* 19) Programa una funcion que valide que un texto sea un nombre valido
EJEMPLO miFuncion("Yadin Dominguez") => true */

const validarNombre = (nombre = "") => {
  if (!nombre) return console.log("No ingresaste un nombre");

  if (typeof nombre != "string")
    return console.error(`El valor ${nombre} no es una cadena de texto`);

  let expReg = /^[A-Za-z\s]+$/g.test();

  return expReg
    ? console.info(`${nombre}, es un nombre valido`)
    : console.warn(`${nombre}, NO es un nombre valido`);
};

// validarNombre();
// validarNombre("Yadin Dominguez Sanchez");

/* 20) Programa una funcion que valide que un texto sea un email valido 
EJEMPLO miFuncion("ydominguez@gmail.com") => true */

const validarEmail = (email = "") => {
  if (!email) return console.log("No ingresaste un email");

  if (typeof email != "string")
    return console.error(`El valor ${email} no es una cadena de texto`);

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`${email}, es un email valido`)
    : console.warn(`${email}, NO es un email valido`);
};

// validarEmail("zxsd@gmail.com");

/* 21) Programa una funcion que dado un array numerico devuelve otro array con los numero elevados al cuadrado
EJEMPLO miFuncion([1,2,3]) => [1,4,9] */

const arrayAlCuadrado = (arreglo = undefined) => {
  if (arreglo === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arreglo instanceof Array))
    return console.warn(`No ingresaste un arreglo`);

  if (arreglo.length === 0)
    return console.warn(`El arreglo no puede ser vacio`);

  for (let numero of arreglo) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }

  const newArr = arreglo.map((el) => el * el);

  return console.info(
    `Arreglo original: [${arreglo}],\nArreglo al cuadrado [${newArr}]`
  );
};

// arrayAlCuadrado([1, 2, 3, 4, 5, 6]);
// arrayAlCuadrado([1, 2, 3, "pepe", 5, 6]);

/* 22) Programa una funcion que dado un array devuelva el numero mas alto y el mas bajo de dicho array
 */

const numeroAltoyBajo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arr instanceof Array)) return console.warn(`No ingresaste un arreglo`);

  if (arr.length === 0) return console.warn(`El arreglo no puede ser vacio`);

  for (let numero of arr) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }
  let numeroBajo, numeroAlto;

  return console.log(
    `El maximo es ${Math.max(...arr)} y el minimo es ${Math.min(...arr)}`
  );
};

// numeroAltoyBajo([1, 2, 3, 4, 5, 6]);

/* 23) Programa una funcion que dado un array de numero devuelva un objeto con dos arrglos en el primero almacena numeros pares
y en el segundo los impares */

const arrParImpar = (arreglo = undefined) => {
  if (arreglo === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arreglo instanceof Array))
    return console.warn(`No ingresaste un arreglo`);

  if (arreglo.length === 0)
    return console.warn(`El arreglo no puede ser vacio`);

  for (let numero of arreglo) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }

  return console.log({
    pares: arreglo.filter((num) => num % 2 === 0),
    impare: arreglo.filter((num) => num % 2 === 1),
  });
};

// arrParImpar([1, 2, 3, 4, 5, 6]);

/* 24) Programa una funcion que dado un arreglo de numeros devuelva un objeto con dos arreglos
el primero tendra los numero ordenados en forma ascendente y el segundo descendiente */

const arrOrdenados = (arreglo = undefined) => {
  if (arreglo === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arreglo instanceof Array))
    return console.warn(`No ingresaste un arreglo`);

  if (arreglo.length === 0)
    return console.warn(`El arreglo no puede ser vacio`);

  for (let numero of arreglo) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }

  return console.log({
    ascendetemente: arreglo.map((el) => el).sort(),
    descendientemente: arreglo
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// arrOrdenados([5, 1, 2, 8, 9, 3, 0, 4, 6, 7]);

/* 25) Programa una funcion que dado un arreglo de elementos elimine los duplicados */

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arr instanceof Array)) return console.warn(`No ingresaste un arreglo`);

  if (arr.length === 0) return console.warn(`El arreglo no puede ser vacio`);

  return console.info({
    arr,
    sinDuplicadosConFilter: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
    sinDuplicadosConSet: [...new Set(arr)],
  });
};

// quitarDuplicados(["x", 1, 2, "x", 1, "p"]);

/* 26) Programa ua funcion que dado un arreglo de numeros obtega el promedio */

const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn(`No ingresaste un arreglo de numeros`);

  if (!(arr instanceof Array)) return console.warn(`No ingresaste un arreglo`);

  if (arr.length === 0) return console.warn(`El arreglo no puede ser vacio`);

  return console.log(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join("+")} es ${total / arr.length}`;
      } else return total;
    })
  );
};

// promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* 27) */
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
  }
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor != "string")
      return console.error(
        `${propiedad} "${valor}" ingresado no es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(`${propiedad} '${valor}' excede el
    numero de caracteres permitidos (${longitud})`);

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor != "number")
      return console.error(`${propiedad} "${valor}" ingresado no es un numero`);

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(`IMDB id "${id}" no es valido , debe tener 9 caracteres, los 2 primeros letras minusculas
        los 7 restantes numeros`);
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de estreno "${estreno}" no es valido ,debe ser numero de 4 digitos`
        );
      }
    }
  }
}

const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Titulo de la Peli",
  director: "Director de la Peli",
  estreno: 2022,
});
