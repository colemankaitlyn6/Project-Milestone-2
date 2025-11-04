<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI & Technology Quiz</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background-color: #f5f7fa;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #1e3a8a;
    color: white;
    padding: 15px 0;
    text-align: center;
  }

  main {
    max-width: 700px;
    margin: 40px auto;
    background: white;
    border-radius: 10px;
    padding: 30px 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  h2 {
    color: #1e3a8a;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }

  .question {
    margin-bottom: 25px;
  }

  label {
    display: block;
    margin: 5px 0;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  button {
    background-color: #1e3a8a;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 10px;
  }

  button:hover {
    background-color: #334ea8;
  }

  .result {
    margin-top: 30px;
    padding: 15px;
    border-radius: 8px;
  }

  .pass { background-color: #d1fae5; color: #065f46; }
  .fail { background-color: #fee2e2; color: #991b1b; }

  .question-result {
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .correct { background-color: #d1fae5; }
  .incorrect { background-color: #fee2e2; }
</style>
</head>
<body>

<header>
  <h1>Self-Assessment Quiz: Artificial Intelligence & Society</h1>
</header>

<main>
  <form id="quizForm">
    <h2>Test Your Knowledge</h2>

    <!-- Fill-in-the-blank -->
    <div class="question">
      <p><strong>1. Fill in the blank:</strong> The branch of computer science that focuses on creating machines that can think and learn like humans is called <input type="text" id="q1" placeholder="Your answer here">.</p>
    </div>

    <!-- Multiple-choice (one correct answer) -->
    <div class="question">
      <p><strong>2.</strong> Which of the following is an example of Artificial Intelligence in daily life?</p>
      <label><input type="radio" name="q2" value="A"> Sending an email manually</label>
      <label><input type="radio" name="q2" value="B"> Autocorrect on your phone</label>
      <label><input type="radio" name="q2" value="C"> Turning on lights</label>
      <label><input type="radio" name="q2" value="D"> Watching a sunset</label>
    </div>

    <div class="question">
      <p><strong>3.</strong> Which of these best describes machine learning?</p>
      <label><input type="radio" name="q3" value="A"> A computer following step-by-step instructions only</label>
      <label><input type="radio" name="q3" value="B"> A program learning and improving from data</label>
      <label><input type="radio" name="q3" value="C"> A human teaching a robot to dance</label>
      <label><input type="radio" name="q3" value="D"> A simple calculator performing math</label>
    </div>

    <div class="question">
      <p><strong>4.</strong> What is one ethical concern about AI?</p>
      <label><input type="radio" name="q4" value="A"> It can only work with the internet</label>
      <label><input type="radio" name="q4" value="B"> It may replace human jobs or show bias</label>
      <label><input type="radio" name="q4" value="C"> It cannot perform calculations</label>
      <label><input type="radio" name="q4" value="D"> It is always 100% accurate</label>
    </div>

    <!-- Multi-selection -->
    <div class="question">
      <p><strong>5.</strong> Which of the following are social media platforms that can affect mental health? (Select all that apply)</p>
      <label><input type="checkbox" name="q5" value="A"> Instagram</label>
      <label><input type="checkbox" name="q5" value="B"> TikTok</label>
      <label><input type="checkbox" name="q5" value="C"> Microsoft Word</label>
      <label><input type="checkbox" name="q5" value="D"> Snapchat</label>
    </div>

    <button type="button" onclick="submitQuiz()">Submit Quiz</button>
    <button type="reset" onclick="resetQuiz()">Reset Quiz</button>
  </form>

  <div id="results"></div>
</main>

<script>
function submitQuiz() {
  const answers = {
    q1: "artificial intelligence",
    q2: "B",
    q3: "B",
    q4: "B",
    q5: ["A", "B", "D"]
  };

  let score = 0;
  let output = "";

  // Question 1
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  if (q1 === answers.q1) score++;
  output += `<div class="question-result ${q1 === answers.q1 ? 'correct' : 'incorrect'}">
    <p><strong>1.</strong> Your answer: ${q1 || 'No answer'}<br>
    Correct answer: Artificial Intelligence<br>
    Result: ${q1 === answers.q1 ? 'Correct' : 'Incorrect'}</p>
  </div>`;

  // Question 2-4
  for (let i = 2; i <= 4; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const userAnswer = selected ? selected.value : null;
    const correct = userAnswer === answers[`q${i}`];
    if (correct) score++;
    output += `<div class="question-result ${correct ? 'correct' : 'incorrect'}">
      <p><strong>${i}.</strong> Your answer: ${userAnswer || 'No answer'}<br>
      Correct answer: ${answers[`q${i}`]}<br>
      Result: ${correct ? 'Correct' : 'Incorrect'}</p>
    </div>`;
  }

  // Question 5 (multi-select)
  const q5Selected = [...document.querySelectorAll('input[name="q5"]:checked')].map(cb => cb.value);
  const correctAnswers = answers.q5;
  const isCorrect = correctAnswers.every(ans => q5Selected.includes(ans)) && q5Selected.length === correctAnswers.length;
  if (isCorrect) score++;
  output += `<div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
    <p><strong>5.</strong> Your answers: ${q5Selected.join(', ') || 'No answer'}<br>
    Correct answers: ${correctAnswers.join(', ')}<br>
    Result: ${isCorrect ? 'Correct' : 'Incorrect'}</p>
  </div>`;

  const total = 5;
  const pass = score >= 3;
  const resultClass = pass ? 'pass' : 'fail';
  const resultText = pass ? 'Pass 🎉 Great job!' : 'Fail ❌ Keep practicing!';

  document.getElementById("results").innerHTML = `
    <div class="result ${resultClass}">
      <h3>Overall Result: ${resultText}</h3>
      <p>Total Score: ${score} / ${total}</p>
    </div>
    ${output}
  `;
}

function resetQuiz() {
  document.getElementById("results").innerHTML = "";
}
</script>

</body>
</html>

