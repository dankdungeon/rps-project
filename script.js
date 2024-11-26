function getComputerChoice(rock, paper, scissors) {
  let val = Math.floor(Math.random() * 3); // returns 0, 1, 2
  if (val == 0) return rock();
  else if (val == 1) return paper();
  else return scissors();
}

getComputerChoice(
  function() { return "Rock";},
  function() { return "Paper";},
  function() { return "Scissors";}
)

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors!");
  if (choice) return choice;
  else {
    console.error("No input")
    return null;
  }
}