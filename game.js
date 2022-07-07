const winner = document.querySelector('#winner')
const currentPlayerDisplay = document.querySelector('#currentPlayer')
let currentPlayer = 'Red'
let circles = document.querySelectorAll('.board div')
let gameActive = true
let restart = (gameActive = false)

if ((gameActive = true)) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', () => {
      if (circles[i].document.querySelectorAll('alreadyPlayed div')) {
        currentPlayer = currentPlayer === 'Red' ? 'Yellow' : 'Red'
        let players = () => {
          if (currentPlayer === 'Red') {
            playerRed.style.background = red
            circles[i].classList.add('alreadyPlayed')
            currentPlayerDisplay.innerHTML = currentPlayer
            return (currentPlayer = 'Red')
          } else if (currentPlayer === 'Yellow') {
            playerYellow.style.background = yellow
            circles[i].classList.add('alreadyPlayed')
            return (currentPlayer = 'Yellow')
            currentPlayerDisplay.innerHTML = currentPlayer
          } else alert(`can't place piece here`)
        }
      }
    })
  }
}
