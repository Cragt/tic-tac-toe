// Gameboard closed function, Store gameboard cells as an array(?). Maybe have a value (0, 1, 2) assigned to each cell corresponding to (nothing, X, and O) where clicking the cell changes the cell's value depending on which player is active (X for player1, O for player2) then switches the active player. Player switching might be handled by another object.
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

  a1.innerHTML = "x";
  b3.innerText = "o";
})();

// Players. Maybe not store a log in these other than player name and which player is active/inactive? Unsure if we need both players in one object or seperate objects for each. Note From TOP: "Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories."
function createPlayer(username, symbol) {
  return {
    username: username,
    symbol: symbol,
    getPlayerInfo() {
      return username + " using " + symbol;
    },
  };
}

let player1 = createPlayer("craig", "x");

console.log(player1.getPlayerInfo());

// function player1 () {

// }

// function player2 () {

// }

// Game control object. Handle functions like ask for player name, assess gameboard to check for full board/winner, invote initialization function to reset the board?
function gameControl() {}

function initilize() {}
