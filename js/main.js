const answerEl = document.getElementById('answerEl')
const quoteEl = document.getElementById('question')
const cat = document.getElementById('cat')
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
  
  answerDiv.style.display = 'none'
  revealEl.style.display = 'block'
  cat.innerHTML = "Category: " + data[0].category.title
  quoteEl.innerHTML = data[0].question
  answerEl.innerHTML = data[0].answer

  // const toSay = data[0]
  // const utterance = new SpeechSynthesisUtterance(toSay)
  // utterance.voice = 'Alex (en-US)'
  // speechSynthesis.speak(utterance)
}

function showAnswer() {
  answerDiv.style.display='block'
  revealEl.style.display='none'
}