let playerScore=0;
let computerScore=0;
const getComputerChoice=()=>{
  let arr=["rock","paper","scissors"];
  let ind=Math.floor(Math.random()*3);
  return arr[ind];
}
const drawGame=()=>{
  let result=document.getElementById("result");
  const box=document.querySelector(".message");
  box.style.backgroundColor=" #081b31";
  result.innerText="It's a Draw! Play again";
}
const showResult=(userWin)=>{
  if(userWin){
    let result=document.getElementById("result");
    result.innerText="Congrays! You Won";
    playerScore++;
    const playerScoreValue=document.querySelector(".playerScoreValue");
    playerScoreValue.innerText=playerScore;
    const box=document.querySelector(".message");
    box.style.backgroundColor="  #32a850";
  }
  else{
    let result=document.getElementById("result");
    result.innerText="You lost! Play again";
    computerScore++;
    const computerScoreValue=document.querySelector(".computerScoreValue");
      computerScoreValue.innerText=computerScore;
    const box=document.querySelector(".message");
    box.style.backgroundColor=" red";
  }
}
const playGame=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    drawGame();
  }
 
  else{
     let userWin=true;
    if(userChoice==="rock"){
      userWin=computerChoice==="scissors"?true:false;
    }
    if(userChoice==="paper"){
      userWin=computerChoice==="scissors"?false:true;
    }
    if(userChoice==="scissors"){
      userWin=computerChoice==="paper"?true:false;
    }
     showResult(userWin);
    
  }
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
    const computerChoice=getComputerChoice();
    console.log(computerChoice, userChoice);
    playGame(userChoice,computerChoice);
  })
});