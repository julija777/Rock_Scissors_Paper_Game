let gameNumber = 0;
let wins = 0;
let losses = 0;
let draws = 0;

let userName = prompt("Please enter your Username");
let userNameRegex = /[A-Z]/;

// if userName is longer than 10 characters or if userName doesn't start with a capital letter
// ask for userName again
while (userName.length > 10 || !userNameRegex.test(userName[0])) {
  userName = prompt(`
Username can't be longer than 10 characters, and needs to start with a capital letter.
Please try again:`);
}

// run game
app();

let playAgain = confirm(`${userName}, do you want to play again?`);

while (playAgain) {
  app();
  playAgain = confirm(`${userName}, do you want to play again?`);
}

function getRandomMove() {
  let moves = ["rock", "scissors", "paper"];
  let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let randomMove = moves[randomNumber];
  return randomMove;
}

function getWinner(player, computer) {
  if (player === "rock") {
    if (computer === "rock") {
      return 0;
    } else if (computer === "paper") {
      return -1;
    } else if (computer === "scissors") {
      return 1;
    }
  }
  if (player === "scissors") {
    if (computer === "rock") {
      return -1;
    } else if (computer === "paper") {
      return 1;
    } else if (computer === "scissors") {
      return 0;
    }
  }

  if (player === "paper") {
    if (computer === "rock") {
      return 1;
    } else if (computer === "paper") {
      return 0;
    } else if (computer === "scissors") {
      return -1;
    }
  }
}

function app() {
  gameNumber++;
  let playerInput = prompt(`
  Hi ${userName}!
  Please choose: rock, paper or scissors.
  `);
  let computerMove = getRandomMove();
  let result;
  let userInputRegex = /rock|paper|scissors/;

  // if user does not pick a valid option
  // ask user to pick again
  while (!userInputRegex.test(playerInput)) {
    playerInput = prompt(`${userName}, pick one: rock, paper or scissors.
    Spelling mistakes won't be tolerated.`);
  }

  if (getWinner(playerInput, computerMove) === 1) {
    result = `${userName}, you win!`;
    wins++;
  } else if (getWinner(playerInput, computerMove) === 0) {
    result = "It's a draw";
    draws++;
  } else if (getWinner(playerInput, computerMove) === -1) {
    result = "Computer wins";
    losses++;
  }

  alert(`${userName}, you picked: ${playerInput} 
Computer picked: ${computerMove}. 
${result}!`);

  alert(`Games played: ${gameNumber}
  Number of wins: ${wins}
  Number of losses: ${losses}
  Number of draws: ${draws}`);
}

// extension 2

// getComputerWinningMove(playerInput) {
//   let winningMove;
//   if (playerInput === "rock") {
//     winningMove = "paper";
//   } else if (playerInput === "paper") {
//     winningMove = "scissors";
//   } else if (playerInput === "scissors") {
//     winningMove === "rock";
//   }

//   return winningMove;
// }
