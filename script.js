setInterval(setClock, 1000)
// variabales 
let hourHand = document.querySelector('[data-hour-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let secondHand = document.querySelector('[data-second-hand]')
// variabales 

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio =  ( secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  Rotation(secondHand, secondsRatio)
  Rotation(minuteHand, minutesRatio)
  Rotation(hourHand, hoursRatio)
}

function Rotation(e, rotationRatio) {
  e.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()