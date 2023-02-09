const modalBtn = document.getElementById("modal-btn");
let p1name = document.getElementById("p1name");
let p2name = document.getElementById("p2name");
let player1 = createPlayer(p1name.value, "✕", "active");
let player2 = createPlayer(p2name.value, "O", "");

modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  const p1 = document.getElementById("player1");
  const p2 = document.getElementById("player2");
  p1.innerHTML = player1.username + " - " + player1.symbol;
  p2.innerHTML = player2.username + " - " + player2.symbol;
});

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

function initialize() {
  gameboard.forEach((element) => (element.innerHTML = ""));
  player1.status = "active";
  player2.status = "";
  // p1.innerHTML = player1.username + " - " + player1.symbol;
  // p2.innerHTML = player2.username + " - " + player2.symbol;
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
