
const quizContainer = document.getElementById('quiz-container');
const newQuizBtn = document.getElementById('new-quiz');

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who played the lead role in Black Panther?", answer: "Chadwick Boseman" },
  { question: "Which city is known as 'The Big Apple'?", answer: "New York City" }
];

function showRandomQuiz() {
  quizContainer.innerHTML = "";
  const selected = [];
  while (selected.length < 3) {
    const q = questions[Math.floor(Math.random() * questions.length)];
    if (!selected.includes(q)) selected.push(q);
  }
  selected.forEach(q => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${q.question}</strong><br><em>${q.answer}</em><br><br>`;
    quizContainer.appendChild(div);
  });
}

newQuizBtn.addEventListener('click', showRandomQuiz);
