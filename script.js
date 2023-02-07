let player1 = createPlayer(prompt("Player 1 Name"), "x", "active");
let player2 = createPlayer(prompt("Player 2 Name"), "o", "");
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
p1.innerHTML = player1.username;
p2.innerHTML = player2.username;

function createPlayer(username, symbol, status) {
  return {
    username: username,
    symbol: symbol,
    status: status,
    getPlayerInfo() {
      return username + " using " + symbol + " " + status;
    },
  };
}
const gameboard = (() => {
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");

  let cells = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

  cells.forEach(function (symbolInput) {
    symbolInput.addEventListener("click", function () {
      if (player1.status === "active") {
        this.innerHTML = "x";
        player1.status = "";
        player2.status = "active";
        gameControl();
      } else if (player2.status === "active") {
        this.innerHTML = "o";
        player1.status = "active";
        player2.status = "";
        gameControl();
      }
    });
  });
  return cells;
})();

// Game control object. Handle functions like ask for player name, assess gameboard to check for full board/winner, invoke initialization function to reset the board?

gameControl = function () {
  // Check rows for winner
  if (a1.innerHTML === "x" && a2.innerHTML === "x" && a3.innerHTML === "x") {
    alert("X is the winner!");
    initilize();
  } else if (
    b1.innerHTML === "x" &&
    b2.innerHTML === "x" &&
    b3.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    c1.innerHTML === "x" &&
    c2.innerHTML === "x" &&
    c3.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    a1.innerHTML === "o" &&
    a2.innerHTML === "o" &&
    a3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  } else if (
    b1.innerHTML === "o" &&
    b2.innerHTML === "o" &&
    b3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  } else if (
    c1.innerHTML === "o" &&
    c2.innerHTML === "o" &&
    c3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();

    // Check columns for winner
  } else if (
    a1.innerHTML === "x" &&
    b1.innerHTML === "x" &&
    c1.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    a2.innerHTML === "x" &&
    b2.innerHTML === "x" &&
    c2.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    a3.innerHTML === "x" &&
    b3.innerHTML === "x" &&
    c3.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    a1.innerHTML === "o" &&
    b1.innerHTML === "o" &&
    c1.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  } else if (
    a2.innerHTML === "o" &&
    b2.innerHTML === "o" &&
    c2.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  } else if (
    a3.innerHTML === "o" &&
    b3.innerHTML === "o" &&
    c3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();

    // Check Diagonals for winner
  } else if (
    a1.innerHTML === "x" &&
    b2.innerHTML === "x" &&
    c3.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    c1.innerHTML === "x" &&
    b2.innerHTML === "x" &&
    a3.innerHTML === "x"
  ) {
    alert("X is the winner!");
    initilize();
  } else if (
    a1.innerHTML === "o" &&
    b2.innerHTML === "o" &&
    c3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  } else if (
    c1.innerHTML === "o" &&
    b2.innerHTML === "o" &&
    a3.innerHTML === "o"
  ) {
    alert("O is the winner!");
    initilize();
  }
};
gameControl();

function initilize() {
  gameboard.forEach((element) => (element.innerHTML = ""));
  player1 = createPlayer(prompt("Player 1 Name"), "x", "active");
  player2 = createPlayer(prompt("Player 2 Name"), "o", "");
  p1.innerHTML = player1.username;
  p2.innerHTML = player2.username;
}
