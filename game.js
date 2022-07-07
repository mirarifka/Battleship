let cell = document.querySelectorAll('.cell')
let playAgain = document.querySelector('.playAgain')
let board = document.querySelector('.board')
let playerRed = 'Red'
let playerYellow = 'Yellow'
let currentPlayer = playerRed
let gameActive = true
let restart = (gameActive = false)

const startGame = () => {
  let board = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      //from Stack Overflow, I'm going to try to make arrays of numbers and then use ParseInt to get the winning combinations
      // https://stackoverflow.com/questions/42889493/creating-an-array-of-ids
      circle.addEventListener('click', playersTurn)
    }
  }

  let playersTurn = () => {
    if (gameActive != true) {
      return
    }
  }
  restartButton.addEventListener('click', restartGame)
}

let restartGame = () => {}

cell.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.innerText.trim() !== '') {
      return
    }
    cell.style.background = currentPlayer
    currentPlayer = currentPlayer === 'Red' ? 'Yellow' : 'Red'
    let players = () => {
      if (currentPlayer === 'Red') {
        playerRed.style.background = red
      } else if (currentPlayer === 'Yellow') {
        playerYellow.style.background = yellow
      } else {
        return
      }
    }
    if ((playerRed.style.background = red)) {
    }
  })
})
