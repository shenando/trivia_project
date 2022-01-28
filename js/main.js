const answerEl = document.getElementById('answerEl')
const quoteEl = document.getElementById('question')
const cat = document.getElementById('cat')
const points = document.getElementById('points')
const answerDiv = document.getElementById('answerDiv')
const revealEl = document.getElementById('reveal')
const btn = document.getElementById('btn')
const correct = document.getElementById('correct')
const wrong = document.getElementById('wrong')
const totalEl = document.getElementById('total')
const clear = document.getElementById('clear')
const ex = document.getElementById('ex')
const scoreCont = document.getElementById('score')
const arrow = document.getElementById('arrow')

btn.addEventListener('click', generateQuote)
revealEl.addEventListener('click', showAnswer)

correct.addEventListener('click', addPoints)
wrong.addEventListener('click', subPoints)
clear.addEventListener('click', clearPoints)

ex.addEventListener('click', exOut)
arrow.addEventListener('click', openUp)

let total = 0
totalEl.innerHTML = `$${total}`
let amt

generateQuote()

async function generateQuote() {
  const config = {
    headers: {
      'Accept': 'application/JSON'
    }
  }

  const res = await fetch('https://jservice.io/api/random', config)

  const data = await res.json()

  console.log(data[0])
  
  answerDiv.style.display = 'none'
  revealEl.style.display = 'block'
  cat.innerHTML = data[0].category.title.toUpperCase()
  quoteEl.innerHTML = data[0].question
  answerEl.innerHTML = data[0].answer.toUpperCase()
  points.innerHTML = "$" + data[0].value
  amt = data[0].value

  // const toSay = data[0]
  // const utterance = new SpeechSynthesisUtterance(toSay)
  // utterance.voice = 'Alex (en-US)'
  // speechSynthesis.speak(utterance)
}

function showAnswer() {
  answerDiv.style.display='block'
  revealEl.style.display='none'
}

function addPoints() {
  if (total == 0) {
    total = amt
  } else {
    total += amt
  }

  totalEl.innerHTML = `$${total}`
}

function subPoints() {
  total -= amt

  totalEl.innerHTML = `$${total}`
}

function clearPoints() {
  total = 0

  totalEl.innerHTML = `$${total}`
}

function exOut (){
  scoreCont.style.display = 'none'
  arrow.style.display = 'flex'

  if (window.screen.width <= 480) {
    arrow.innerHTML = 'V'
  } else {
    arrow.innerHTML= '>'
  }
}

function openUp() {
  scoreCont.style.display = 'flex'
  arrow.style.display = 'none'
}
