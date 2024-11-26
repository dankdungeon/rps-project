function getComputerChoice() {
  let val = Math.floor(Math.random() * 3); // returns 0, 1, 2
  if (val == 0) return "ROCK";
  else if (val == 1) return "PAPER";
  else return "SCISSORS";
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors!");
  if (choice) return choice;
  else {
    console.error("No input")
    return null;
  }
}
let humanChoice = 0
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;

// inputs are all caps

function playRound(humanChoice, computerChoice) {
  // helper function handles rock paper scissors logic
  let res = playRoundHelper(humanChoice, computerChoice);
  if (res == 1) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
  else if (res == -1) {
    console.log(`You lose! ${humanChoice} loses against ${computerChoice}`);
    computerScore++;
  }
  else {
    console.log(`It was a tie!`);
  }
}

// return 1 if player won, 0 if tie, -1 if computer won
function playRoundHelper(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice == "SCISSORS")
        return 1;
      else if (computerChoice == "PAPER")
        return -1;
      else
        return 0;
      break;

    case "PAPER":
      if (computerChoice == "ROCK")
        return 1;
      else if (computerChoice == "SCISSORS")
        return -1;
      else
        return 0;
      break;

    case "SCISSORS":
      if (computerChoice == "PAPER")
        return 1;
      else if (computerChoice == "ROCK")
        return -1;
      else
        return 0;
      break;

    default: // invalid choice
      console.log("Invalid input for rock, paper, scissors");
      return null;
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice().toUpperCase();
    computerChoice = getComputerChoice().toUpperCase();
    playRound(humanChoice, computerChoice);
  }
 }

 playGame();
 // i don't think i need to implement error handling its a POC, not a portfolio work.