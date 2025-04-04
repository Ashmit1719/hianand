document.addEventListener("DOMContentLoaded", function() {
  const quizContainer = document.getElementById("quiz-container");
  const quizQuestions = [
    { question: "If I could take you on a dream vacation, where would we go? 🌍", options: ["Bora Bora", "Maldives", "Santorini", "Pakistan"], correct: "Bora Bora" },
    { question: "What thing about you do I love the most? 😍", options: ["Your eyes", "Your hair", "Your third toe on the left foot", "Your laugh"], correct: "Your laugh" },
    { question: "What movie name do I think best describes you? 🎬", options: ["Barbie", "12th Fail", "Sleeping Beauty", "The Joker", "All of the above 🤣"], correct: "All of the above 🤣" },
    { question: "What’s my favorite type of date? 💖", options: ["Fancy candlelit dinner", "Amusement Park", "Movie night at home", "Long drive"], correct: "Amusement Park" },
    { question: "If I could relive any memory with you, which one would it be? 💭", options: [], correct: "any" }
  ];
  let currentQuizIndex = 0;

  function showQuizQuestion() {
    if (currentQuizIndex < quizQuestions.length) {
      const q = quizQuestions[currentQuizIndex];
      let html = `<p>${q.question}</p>`;
      if(q.options.length > 0) {
        q.options.forEach(option => {
          html += `<button onclick="checkQuizAnswer('${option}')">${option}</button><br>`;
        });
      } else {
        html += `<input type="text" id="quiz-input" placeholder="Type your answer here"><button onclick="checkQuizAnswer(document.getElementById('quiz-input').value)">Submit</button>`;
      }
      quizContainer.innerHTML = html;
    } else {
      document.getElementById("quiz-congrats").classList.remove("hidden");
      document.getElementById("video-link").classList.remove("hidden");
    }
  }

  window.checkQuizAnswer = function(answer) {
    const q = quizQuestions[currentQuizIndex];
    if(q.correct === "any" || answer === q.correct) {
      currentQuizIndex++;
      showQuizQuestion();
    } else {
      alert("Incorrect! Try again.");
    }
  };

  showQuizQuestion();
});

function goToVideo() {
  window.location.href = "surprise-video.html";
}