const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  // console.log(e.keyCode);

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      x--;
      break;
    case 38:
      e.preventDefault();
      y++;
      break;
    case 39:
      e.preventDefault();
      x++;
      break;
    case 40:
      e.preventDefault();
      y--;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}pxpx)`;
}

export function shortcuts(e) {
  /*   console.log(e);
  console.log(e.key);
  console.log(e.keyCode); */

  if (e.altKey === true && e.key === "a") {
    alert("Hola");
  }
  if (e.ctrlKey === true && e.key === "m") {
    prompt("Hola");
  }
}
