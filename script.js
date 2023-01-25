const game = document.getElementById('game');
 
const showPlay = document.createElement('h2');

const resultPlay = document.createElement('div');
resultPlay.classList.add('player');

const resultComputer = document.createElement('div');
resultComputer.classList.add('computer');

const counters = document.createElement('div');
counters.classList.add('counters');

const counterP = document.createElement('span');
counterP.innerHTML = 0;

const counterC = document.createElement('span');
counterC.innerHTML = 0;

const containerBtn = document.createElement('div');
containerBtn.classList.add('containerBtn');

counters.append(counterP,counterC)
game.append(showPlay,counters,resultPlay,resultComputer,containerBtn);

let choices = [rock = '✊', paper = '✋', scissors = '✌️']
let player
let computer



const handleClick = (e) => {
  player = e.target.id
  resultPlay.innerHTML = player
  computerChoice()
  showResult()
  // timer here
}

const computerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computer = randomChoice
  resultComputer.innerHTML = computer
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.classList.add('btn-choices')
  button.id = choices[i]
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  containerBtn.appendChild(button)
}

const showResult = () => {
  switch (player + computer) {
      case scissors + paper:
          case rock + scissors:
              case paper + rock:
                  showPlay.innerHTML = 'You Win!'
                  counterP.innerHTML ++
                  break
      case paper + scissors:
          case scissors + rock:
              case rock + paper:
                  showPlay.innerHTML = 'You Lose Broo!'
                  counterC.innerHTML ++
                  break
      case paper + paper:
          case scissors + scissors:
              case rock + rock:
                  showPlay.innerHTML = 'Its a draw!'
                  break
  }
}