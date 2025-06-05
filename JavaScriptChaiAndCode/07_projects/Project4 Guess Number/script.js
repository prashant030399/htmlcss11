let randomNumber = Math.floor(Math.random()*100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');  //ignore in the first go

const p = document.createElement('p');  //ignore in 1st go

let prevGuess = [];
let numGuess = 1;

let playGame = true ;

if(playGame){
    submit.addEventListener('click',(e) => {
e.preventDefault();
const guess= parseInt(userInput.value);
console.log(guess);
validateGuess(guess);
    });
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a Valid number')
}else if(guess <1){
    alert('Please enter more than 1')
}else if(guess >100){
    alert('Please enter less than 100')
}else {
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over . Random Number was ${randomNumber}`);
        endGame();
    } else {
displayGuess(guess);
checkGuess(guess);
    }
}
}

function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
} else if(guess < randomNumber){
    displayMessage(`Your guess is TOO low`)
}else if(guess > randomNumber){
    displayMessage(`Your guess is TOO high`)
}
}


function displayGuess(guess){
userInput.value = '';
guessSlot.innerHTML += `${guess},`;
numGuess ++ ;
remaining.innerHTML = `${11- numGuess}`
}


function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">Start New game</h2>`;
startOver.appendChild(p);
playGame = false;
newGame()
}

function newGame(){
const newgameButton = document.querySelector('#newGame')
newgameButton.addEventListener('click',(e) => {
    randomNumber = Math.floor(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
guessSlot.innerHTML='';
remaining.innerHTML= `${11- numGuess}`
userInput.removeAttribute('disabled');
startOver.removeChild(p);


playGame =true;
});
}

