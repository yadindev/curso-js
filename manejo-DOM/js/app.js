// console.info(`Hola mundo`);

// Pequeño codigo para que el navegador diga mi nombre por voz
/* let saludo = "Hola mi nombre es Yadín Domínguez Sánchez";
const saludar = (saludo) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(saludo));
};
saludar(saludo); */

/* console.log("*************** Elementos del DOM ***************");
//Todos los elementos del DOM
console.log(document);
//La cabecera del HTML
console.log(document.head);
//El cuerpo del HTML
console.log(document.body);
//Solo el elemento del html
console.log(document.documentElement);
console.log(document.characterSet);
console.log(document.title);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000); */

/* **************** Selectores de elementos del DOM **************** */

/* Este selector es el mas utilizado para buscar por el iD del elemento
console.log(document.getElementById('menu'));

Este selector devuelve la el primer nodo que concida con el argumento
console.log(document.querySelector('a'));

Este selector devuelve la lista de nodos que coicidan con el argumento
console.log(document.querySelectorAll("img"));

Imprimir en consola el html de todos los codigos 
document.querySelectorAll("a").forEach((el) => console.log(el)); */

/* **************** DOM Atributos y Data-Atributes **************** */

// Para acceder a un atributo simplemente se le especifica con la notacion de punto
/* console.log(document.documentElement.lang);

//Otra forma de hacer lo mismo es utilizando la propiedad getAtributte
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href")); */

/* **************** Estilos y Variables CSS **************** */

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor; */

// const $card = document.querySelector(".card");
// console.log($card);

/* **************** DOM Texto y HTML **************** */

// const $whatIsDOM = document.getElementById("que-es");
// let text = `
//  <p>El Modelo de Objetos del Documento (<b><i>DOM-Document Object Model</i></b>)
//   es una API para documentos HTML y XML</p>
//    <p>
//   Este provee una representacion estructural del documento, permitiendo modificar
//   su contenido y su presentacion visual mediante codigo JS
//  </p>
//  <p>
//   <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
//  </p>
// `;
// $whatIsDOM.innerText = text;
// //Para agregar solo texto se usa textContent
// $whatIsDOM.textContent = text;
// //Para argregar html se usa el innerHTML
// $whatIsDOM.innerHTML = text;
// //Para reemplazar la etiqueta por otra se usa outerHTML(react)
// $whatIsDOM.outerHTML = text;

//Formas de recorrer el DOM
/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

/* **************** Crear Elementos y Fragmentos **************** */
//Para crear un elemento estatico
//Primero se crean variables con el contenido html del elemento
//Luego se le va a agregando cada componente encapsuladolos
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

$img.style.backgroundColor = "red";
$img.style.width = "200px";
$img.style.height = "200px";
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
// $figure.setAttribute("class", "card"  );
$figure.classList.add("card"); */

//Para agregar elementos dinamicamente
//Se recorre los datos y se crean los elementos de la forma anterior
/* const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<br><hr><br>");
document.write(`<h3>Estaciones del Año</h3>`);

document.body.appendChild($ul);
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
}); */

//Otra manera de hacerlo es inyectando el codigo en el innerHTML

/* const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $lista = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($lista);
$lista.innerHTML = "";
continentes.forEach((el) => ($lista.innerHTML += `<li>${el}</li>`));
 */
//Esta es la manera correcta usando fragmentoss

/* const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "sepetiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
  $ul3 = document.createElement("ul");
$fragmento = document.createDocumentFragment();
meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragmento.appendChild($li);
});

document.write("Meses del año");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3); */

/* **************** Templates **************** */
/* El uso de templates para replicar segmentos de codigo esta muy utilizado en svelt y vuejs
en react se aplica de otra forma */

/* const $card = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$card.appendChild($fragment); */

/* **************** Modificando Elementos de Forma antigua **************** */
/* Esta es la forma en la que antiguamente se hacia para agregar un elemento que no solo sea
al final del ultimo nodo como sucede con el metodo anterior */

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card"); */
// $cards.replaceChild($newCard, $cards.children[2]);

/* **************** Modificando Elementos de Forma Actual **************** */
/*Los metodos son los siguientes
insertAdjacentElement(position,el) //Este es el basico
insertAdjacentHTML(position,html) //Este se le pasa directamente el codigo html
insertAdjacentText(position, text) //Se le pasa el codigo como una cadena

Las posiciones son las siguientes
beforebegin(hermano anterior) //Antes de la etiqueta contenedora
afterbegin(primer hijo) // Primer nodo dentro del contenedor
beforeend(ultimo hijo) // Ulrimo nodo del contnedor
afterend(hermano siguiente) //Despues de la etiqueta contenedora

*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any"/>
//   <figcaption>Any</figcaption>
// `;
let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any"/>
  <figcaption></figcaption>
`;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard)
 */

/* **************** Manejadores de Eventos **************** */

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico");
// $eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  // alert("Hola Mundo Manejador de Eventos Semanticos");

  console.log(e.target);
  // console.log(Event);
};
//Esta es la forma correcta de Manejar eventos Multipls

const $eventoMultiple = document.getElementById("evento-multiple");
/* $eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de elementos multiples");
  console.log(e.type);
  console.log(e.target);
}); */

/* Pasar parametros a los eventos */
$eventoMultiple.addEventListener("click", saludar);
$eventoMultiple.addEventListener("click", () => saludar());

//Remover eventos
const $eventoRemover = document.getElementById("evento-remover");
const removerDobleClick = (e) => {
  alert(`Removiendo el evento ${e.type}`);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick);

/* *****************Flujos de eventos****************  */
// const $divEventos = document.querySelectorAll(".eventos-flujo div");
// console.log($divEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

// $divEventos.forEach((div) => {
//   //Fse de bubuja es sin especificar con el tercer parametro en false
//   /*   div.addEventListener("click", flujoEventos);
//   div.addEventListener("click", flujoEventos, false); */
//   //Fase de captura
//   // div.addEventListener("click", flujoEventos, true);

//   div.addEventListener("click", flujoEventos);
// });

/* Detener la propagacion usando preventDefault */

// $divEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos);
// });
// const $linkEventos = document.querySelector(".eventos-flujo a");

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola como estas");
//   e.preventDefault();
//   e.stopPropagation();
// });

/* Delegacion de Eventos */

// document.addEventListener("click", (e) => {
//   console.log("Click en", e.target);
//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Hola como estas");
//     e.preventDefault();
//   }
//   if (e.target.matches(".eventos-flujo div")) {
//     flujoEventos(e);
//   }
// });

/* ***************** BOM: Browser Object Model ****************  */

/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********Console Resize*********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);

  console.log(e);
});
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********Console Scroll*********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
}); */

/* const confirmacion = window.confirm("Confirmacion");
console.log(confirmacion);
const pront = window.prompt();
console.log(pront); */

/* const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");
let ventana;
$btnAbrir.addEventListener("click", (e) => {
  ventana = open("#");
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  print();
});
 */
/* ***************Objetos Importantes del DOM****************** */

console.log("******* Objeto URL (location) *******");
console.log(location);
//En este objeto estan todos los datos de la web y quien accede a ella
console.log(history);
//Este objeto contiene el registro de todos los movimientos de la web en cuestio
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.userAgent);
