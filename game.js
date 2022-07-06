let circle = document.querySelectorAll('.cell')
let playAgain = document.querySelector('.playAgain')
let board = document.querySelector('.board')
let playerRed = 'Red'
let playerYellow = 'Yellow'
let currentPlayer = playerRed
let gameActive = true
let restart = (gameActive = false)




const startGame = () => {
  let circles = document.querySelectorAll('#cell')
  Array.from(circles).forEach((circle) => {
    circle.addEventListener('click', currentPlayer)
  })
}

let clickCircle = () => {
  let circles = document.querySelectorAll('#cell')
  let click = parseInt(circles)
  if (
    circles[click + 7].classList.contains('taken') &&
    !circles[click].classList.contains('taken')
  ) {
    if (currentPlayer === 'Red') {
      currentPlayer = 'Yellow'
      checkWon()
    } else if (currentPlayer === 'Yellow') {
      currentPlayer = 'Red'
      checkWon()
    }
}

let checkWon = () => {
  let circles = document.querySelectorAll('#cell')
  for (let i = 0; i < winningCombinations.length; i++) {
    let circle = winningCombinations[i]
    if (circle.every((i) => circles[i].classList.contains('#playerRed'))) {
      opacity = 1
    } else if (
      circle.every((i) => circles[i].classList.contains('#playerYellow'))
    )
  }
}
