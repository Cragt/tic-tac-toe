(function() {
const modalBtn = document.getElementById("modal-btn");
let p1name = document.getElementById("p1name");
let p2name = document.getElementById("p2name");
let player1 = createPlayer(p1name.value, "✕", "active");
let player2 = createPlayer(p2name.value, "O", "");
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
// const winner = document.getElementById("banner");
const p1win = `${p1name.value} wins!`;
const p2win = `${p2name.value} wins!`;

console.log(window);

function createPlayer(username, symbol, status) {
  return {
    username: username,
    symbol: symbol,
    status: status,
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
        if (player1.status === "active") {
          p1.style.color = "#27ae60";
          p2.style.color = "black";
        } else {
          p1.style.color = "black";
          p2.style.color = "#27ae60";
        }
      }
    });
  });
  return cells;
})();

gameControl = function () {
  // Check rows for winner
  if (a1.innerHTML === "✕" && a2.innerHTML === "✕" && a3.innerHTML === "✕") {
    // winner.innerHTML = p1win;
    alert(p1win);
    initialize();
  } else if (
    b1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    b3.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    c1.innerHTML === "✕" &&
    c2.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    a2.innerHTML === "O" &&
    a3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  } else if (
    b1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    b3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  } else if (
    c1.innerHTML === "O" &&
    c2.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();

    // Check columns for winner
  } else if (
    a1.innerHTML === "✕" &&
    b1.innerHTML === "✕" &&
    c1.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    a2.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    c2.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    a3.innerHTML === "✕" &&
    b3.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    b1.innerHTML === "O" &&
    c1.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  } else if (
    a2.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    c2.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  } else if (
    a3.innerHTML === "O" &&
    b3.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();

    // Check Diagonals for winner
  } else if (
    a1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    c3.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    c1.innerHTML === "✕" &&
    b2.innerHTML === "✕" &&
    a3.innerHTML === "✕"
  ) {
    alert(p1win);
    initialize();
  } else if (
    a1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    c3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  } else if (
    c1.innerHTML === "O" &&
    b2.innerHTML === "O" &&
    a3.innerHTML === "O"
  ) {
    alert(p2win);
    initialize();
  }
};

function initialize() {
  gameboard.forEach((element) => (element.innerHTML = ""));
  player1.status = "active";
  player2.status = "";
  p1.style.color = "#27ae60";
  p2.style.color = "black";
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";

  p1.innerHTML = p1name.value + " - " + player1.symbol;
  p2.innerHTML = p2name.value + " - " + player2.symbol;
});
})();