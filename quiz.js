const questions = [
  {
    category: "Physical Build",
    question: "How would you describes your body frame?",
    options: [
      "Thin, light frame with prominent joints",
      "Medium build with good muscle tone",
      "Large frame with solid, heavy build",
    ],
  },
  {
    category: "Energy Levels",
    question: "How is your typical energy pattern?",
    options: [
      "High bursts of energy followed by fatigue",
      "Steady, intense energy throughout the day",
      "Consistent, enduring energy but slow to start",
    ],
  },
  {
    category: "Sleep Patterns",
    question: "How do you typically sleep?",
    options: [
      "Light sleeper, often restless or interrupted",
      "Moderate sleeper, need 6-8 hours consistently",
      "Deep, heavy sleeper, enjoy long sleep",
    ],
  },
  {
    category: "Mental Qualities",
    question: "How would you describe your thinking style?",
    options: [
      "Quick, creative, many ideas at once",
      "Sharp, focused, goal-oriented",
      "Slow, steady, methodical thinking",
    ],
  },
  {
    category: "Emotional Response",
    question: "How do you handle stress?",
    options: [
      "Get anxious, worried, or overwhelmed easily",
      "Become irritated, angry, or impatient",
      "Withdraw, become stubborn, or depressed",
    ],
  },
  {
    category: "Digestion",
    question: "How is your appetite and digestion?",
    options: [
      "Variable appetite, gas, bloating, constipation",
      "Strong appetite, good digestion, get hungry often",
      "Slow digestion, feel heavy after meals",
    ],
  },
  {
    category: "Weather Preference",
    question: "What type of weather do you prefer?",
    options: [
      "Warm, humid weather; dislike cold and wind",
      "Cool, dry weather; dislike heat and humidity",
      "Warm, dry weather; dislike cold and damp",
    ],
  },
  {
    category: "Physical Activity",
    question: "What type of exercise do you prefer?",
    options: [
      "Light, varied activities like yoga or walking",
      "Moderate to intense exercise like running or sports",
      "Slow, steady exercise; prefer gentle activities",
    ],
  },
];

let currentQuestion = 0;
let answers = [];

function renderQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").innerText = q.question;
  document.getElementById("category").innerText = q.category;

  // Progress
  document.getElementById("question-count").innerText = `Question ${
    currentQuestion + 1
  } of ${questions.length}`;
  document.getElementById("percent-complete").innerText = `${Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  )}% Complete`;
  document.getElementById("progress-fill").style.width = `${
    ((currentQuestion + 1) / questions.length) * 100
  }%`;

  // Options
  const optionsForm = document.getElementById("options-form");
  optionsForm.innerHTML = "";
  q.options.forEach((option, idx) => {
    const label = document.createElement("label");
    label.className = "custom-radio";
    label.innerHTML = `
      <input type="radio" name="option" value="${option}" ${
      answers[currentQuestion] === option ? "checked" : ""
    } />
      <span class="radio-circle"></span>
      ${option}
    `;
    optionsForm.appendChild(label);
  });

  // Buttons
  document.querySelector(".previous").style.display =
    currentQuestion === 0 ? "none" : "inline-block";
  document.querySelector(".next").style.display =
    currentQuestion === questions.length - 1 ? "none" : "inline-block";
  document.getElementById("get-results-btn").style.display =
    currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option to continue.");
    return;
  }
  answers[currentQuestion] = selected.value;
  currentQuestion++;
  renderQuestion();
}

function prevQuestion() {
  currentQuestion--;
  renderQuestion();
}

function submitQuiz() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option before submitting.");
    return;
  }
  answers[currentQuestion] = selected.value;

  localStorage.setItem("quizAnswers", JSON.stringify(answers));
  window.location.href = "result page.html";
}

window.onload = () => {
  const name = localStorage.getItem("userName") || "Friend";
  const subtitle = document.getElementById("username");
  if (subtitle) {
    subtitle.textContent = `Hi ${name}! Answer these questions to discover your unique constitution`;
  }
  renderQuestion();
};
