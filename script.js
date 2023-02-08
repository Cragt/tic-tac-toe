let player1 = createPlayer("Player 1 Name", "✕", "active");
let player2 = createPlayer("Player 2 Name", "O", "");
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
p1.innerHTML = player1.username + " - " + player1.symbol;
p2.innerHTML = player2.username + " - " + player2.symbol;

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
      if (this.innerHTML === "") {
        if (player1.status === "active") {
          this.innerHTML = "✕";
          player1.status = "";
          player2.status = "active";
          gameControl();
        } else if (player2.status === "active") {
          this.innerHTML = "O";
          player1.status = "active";
          player2.status = "";
          gameControl();
        }
      }
    });
  });
  return cells;
})();

// Game control object. Handle functions like ask for player name, assess gameboard to check for full board/winner, invoke initialization function to reset the board?

gameControl = function () {
  // Check rows for winner
  if (a1.innerHTML === "✕" && a2.innerHTML === "✕" && a3.innerHTML === "✕") {
    alert("✕ is the winner!");
    initialize();
  } else if (
    b1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    b3.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    c1.innerHTML === "✕" &&
    c2.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    a2.innerHTML === "O" &&
    a3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  } else if (
    b1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    b3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  } else if (
    c1.innerHTML === "O" &&
    c2.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();

    // Check columns for winner
  } else if (
    a1.innerHTML === "✕" &&
    b1.innerHTML === "✕" &&
    c1.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    a2.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    c2.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    a3.innerHTML === "✕" &&
    b3.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    b1.innerHTML === "O" &&
    c1.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  } else if (
    a2.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    c2.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  } else if (
    a3.innerHTML === "O" &&
    b3.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();

    // Check Diagonals for winner
  } else if (
    a1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    c1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    a3.innerHTML === "✕"
  ) {
    alert("✕ is the winner!");
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  } else if (
    c1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    a3.innerHTML === "O"
  ) {
    alert("O is the winner!");
    initialize();
  }
};
gameControl();

function initialize() {
  gameboard.forEach((element) => (element.innerHTML = ""));
  let player1 = createPlayer("Player 1 Name", "✕", "active");
  let player2 = createPlayer("Player 2 Name", "O", "");
  p1.innerHTML = player1.username + " - " + player1.symbol;
  p2.innerHTML = player2.username + " - " + player2.symbol;
}
