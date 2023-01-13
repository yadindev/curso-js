const d = document;

export default function sortear(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];
    // console.log(winner, $players, random);
    return `El ganador es ${winner.textContent}`;
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(`El ganador es ${result}`);
    }
  });
}
