/* console.log("Hola como esta la cosa");

setTimeout(() => {
  console.log(`Esto se ejecutara al cabo de 3s`);
}, 3000);

setInterval(() => {
  console.log(`Ejecutando un setInterval, esto se ejecuta indefinidamente
  cada cierto intervalo de tiempo`);
}, 1000); */

/* setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000); */

/* let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 3000);

clearTimeout(temporizador); */

//NUNCA USAR MUCHAS CALLBACKS ANIDADAS PORQUE PUEDE GENERAR PROBLEMAS

/* function cuadradoCallBack(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallBack(0, (value, result) => {
  console.log("Inicia CallBack");
  console.log(`CallBack: ${value}, ${result}`);
}); */

//PROMESAS

/* function cuadradoPromesa(value) {
  if (typeof value !== "number") {
    return Promise.reject(`ERROR, el valor ${value} no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromesa("0")
  .then((objeto) => {
    console.log("Inicia la promesa");
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
    return cuadradoPromesa(1);
  })
  .then((objeto) => {
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
    return cuadradoPromesa(2);
  })
  .then((objeto) => {
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
    return cuadradoPromesa(3);
  })
  .then((objeto) => {
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
    return cuadradoPromesa(4);
  })
  .then((objeto) => {
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
    return cuadradoPromesa(5);
  })
  .then((objeto) => {
    console.log(`Promesa ${objeto.value}, ${objeto.result}`);
  })
  .catch((err) => console.error(err)); */

//Async - Await

/* function cuadradoPromesa(value) {

  if (typeof value !== "number") {
    return Promise.reject(`ERROR, el valor ${value} no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function functionAsyncronaDeclarada() {
  try {
    console.log("Inicio de Async Function");
    let obj = await cuadradoPromesa(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromesa(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromesa(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromesa(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromesa(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromesa(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin de Async Function");
  } catch (error) {
    console.error(error);
  }
}

functionAsyncronaDeclarada();
 */

/* Las propiedades dinamicas se asignan con []  */
/* 
const objUsuarios = {
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor aleatorio",
};
const usuarios = ["Yadin", "Pepe", "lelo", "juan"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios); */
