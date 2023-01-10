import hamburgerMenu from "./ej1-menu-hamburgueza.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta-regresiva.js";
import scrollTopBtn from "./btn-scoll.js";
import darkMode from "./tema-oscuro.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./prueba-responsive.js";
import userDeviceInfo from "./deteccion-dispositivos.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "cuenta-regresiva",
    "Oct 12, 2023 00:00:00",
    "Feliz Cumpleaños Yadín"
  );
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/zx6s-ayVPjA" target="_blank" >Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/zx6s-ayVPjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/Eu2ZwnqWYtU1AfU68" target="_blank" >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.58580363605358!2d-82.28966547850362!3d22.973312685056023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd63d7280f2557%3A0x22cb1662acc7ed55!2sIglesia%20palotinos%20Managua!5e0!3m2!1ses-419!2scu!4v1673122368732!5m2!1ses-419!2scu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkMode(".dark-mode-btn", "dark-mode");
