const quizContainer = document.getElementById('quiz-container');
const newQuizBtn = document.getElementById('new-quiz');

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who played the lead role in Black Panther?", answer: "Chadwick Boseman" },
  { question: "Which city is known as 'The Big Apple'?", answer: "New York City" },
  { question: "What is the largest planet in our Solar System?", answer: "Jupiter" },
  { question: "Who is known as the Father of Computers?", answer: "Charles Babbage" },
  { question: "What is the chemical symbol for gold?", answer: "Au" },
  { question: "What year did the first man land on the moon?", answer: "1969" },
  { question: "Which artist painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the longest river in the world?", answer: "The Nile" },
  { question: "Who wrote 'To Be or Not to Be'?", answer: "William Shakespeare" },
  { question: "Which country invented pizza?", answer: "Italy" },
  { question: "Who was the first U.S. President?", answer: "George Washington" },
  { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon Dioxide" },
  { question: "Which sport is known as 'The Beautiful Game'?", answer: "Soccer (Football)" },
  { question: "In what city would you find the Eiffel Tower?", answer: "Paris" }
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
