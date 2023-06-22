let playerScore = 0;
let computerScore = 0;
let plr = 0;
let compcs = 0;
plrScore.innerHTML = plr;
compScore.innerHTML = compcs;

const resultsDiv = document.querySelector("#results");
const ps = document.querySelector("#plrScore");
const cs = document.querySelector("#compScore");


const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("rock", computerSelection);
  updateResults(result);
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("paper", computerSelection);
  updateResults(result);
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("scissors", computerSelection);
  updateResults(result);
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", function() {
  document.querySelector("#rock-btn").style.visibility='visible';
  document.querySelector("#paper-btn").style.visibility='visible';
  document.querySelector("#scissors-btn").style.visibility='visible';
  window.location.reload();
})

function updateResults(result) {
  const resultP = document.createElement("p");
  resultP.textContent = result;
  resultsDiv.appendChild(resultP);
  
  if(playerScore >= 5 && computerScore < 5) {
    resultsDiv.textContent = `You're the winner! Final Score: ${playerScore} to ${computerScore}`;
    document.querySelector("#rock-btn").style.visibility='hidden';
    document.querySelector("#paper-btn").style.visibility='hidden';
    document.querySelector("#scissors-btn").style.visibility='hidden';
    document.querySelector("#reset-btn").style.visibility='visible';
    return;
  }else if(computerScore >= 5 && playerScore < 5) {
    resultsDiv.textContent = `You're the loser. Final Score: ${playerScore} to ${computerScore}`;
    document.querySelector("#rock-btn").style.visibility='hidden';
    document.querySelector("#paper-btn").style.visibility='hidden';
    document.querySelector("#scissors-btn").style.visibility='hidden';
    document.querySelector("#reset-btn").style.visibility='visible';
    return;
  }else if(playerScore == compScore){
    resultsDiv.textContent = `You tied. Final Score: ${playerScore} to ${computerScore}`;
    document.querySelector("#rock-btn").style.visibility='hidden';
    document.querySelector("#paper-btn").style.visibility='hidden';
    document.querySelector("#scissors-btn").style.visibility='hidden';
    document.querySelector("#reset-btn").style.visibility='visible';
    return;
  }
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * choice.length) + 1;
    if (randomizeChoice == 1) {
      return "rock";
    }
    if (randomizeChoice == 2) {
      return "paper";
    }
    if (randomizeChoice == 3) {
      return "scissors";
    }
  }


  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerScore ++; 
        computerScore ++;
        plr++;
        plrScore.innerHTML = plr;
        compcs++
        compScore.innerHTML = compcs;
        return `Its a tie :P ${playerScore} to ${computerScore}`
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        plr++;
        plrScore.innerHTML = plr;
        return `You win :D Rock beats scissors. ${playerScore} to ${computerScore}`
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        compcs++
        compScore.innerHTML = compcs;
        return `You lose :( rock destroys scissors! ${playerScore} to ${computerScore}`
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        plr++;
        plrScore.innerHTML = plr;
        return `You win :D paper covers rock! ${playerScore} to ${computerScore}`
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        compcs++
        compScore.innerHTML = compcs;
        return `You lose :( paper covers rock. ${playerScore} to ${computerScore}`
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        plr++;
        plrScore.innerHTML = plr;
        return `You win :D scissors cuts paper! ${playerScore} to ${computerScore}`
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        compcs++
        compScore.innerHTML = compcs;
        return `You lose :( scissors cuts paper! ${playerScore} to ${computerScore}`
    }
}
