const answerEl = document.getElementById('answerEl')
const quoteEl = document.getElementById('question')
const cat = document.getElementById('cat')
const points = document.getElementById('points')
const answerDiv = document.getElementById('answerDiv')
const revealEl = document.getElementById('reveal')
const btn = document.getElementById('btn')

btn.addEventListener('click', generateQuote)
revealEl.addEventListener('click', showAnswer)

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

  // const toSay = data[0]
  // const utterance = new SpeechSynthesisUtterance(toSay)
  // utterance.voice = 'Alex (en-US)'
  // speechSynthesis.speak(utterance)
}

function showAnswer() {
  answerDiv.style.display='block'
  revealEl.style.display='none'
}
