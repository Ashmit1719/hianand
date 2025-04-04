document.addEventListener("DOMContentLoaded", function() {
  const clueContainer = document.getElementById("clue-container");
  let step = 0;

  const clues = [
    { id: 1, riddle: "Where we first met, a place of learning and dread?", answer: "school" },
    { id: 2, riddle: "Our favorite meal: find the restaurant name hidden in this word search.", answer: "tanjore tiffin" },
    { id: 3, riddle: "Spending time with you never gets old, find the spot where our love unfolds.", answer: "goa" }
  ];

  function showClue(index) {
    clueContainer.innerHTML = "";
    if(index === 0) {
      // Show hidden school bell icon for first clue answer.
      let p = document.createElement("p");
      p.textContent = clues[index].riddle;
      clueContainer.appendChild(p);
      let bell = document.createElement("img");
      bell.src = "assets/images/school-bell.png";
      bell.alt = "School Bell";
      bell.className = "hidden-object";
      bell.style.position = "absolute";
      bell.style.top = "60px";
      bell.style.right = "20px";
      bell.onclick = function() {
        alert("Correct! You've found the school bell.");
        step++;
        showClue(step);
      };
      clueContainer.appendChild(bell);
    } else if(index === 1) {
      // Word search puzzle simulation for "Tanjore Tiffin"
      let p = document.createElement("p");
      p.textContent = clues[index].riddle;
      clueContainer.appendChild(p);
      let input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type restaurant name...";
      clueContainer.appendChild(input);
      let btn = document.createElement("button");
      btn.textContent = "Submit";
      btn.onclick = function() {
        if(input.value.toLowerCase().includes("tanjore")) {
          alert("Correct! You've found the secret meal clue.");
          step++;
          showClue(step);
        } else {
          alert("Incorrect! Try again.");
        }
      };
      clueContainer.appendChild(btn);
    } else if(index === 2) {
      // Display 20 images; only one is "Goa".
      let p = document.createElement("p");
      p.textContent = clues[index].riddle;
      clueContainer.appendChild(p);
      let grid = document.createElement("div");
      grid.className = "image-grid";
      for(let i=0; i<20; i++){
        let img = document.createElement("img");
        if(i === Math.floor(Math.random()*20)) {
          img.src = "assets/images/goa.png";
          img.alt = "Goa";
        } else {
          img.src = "assets/images/wordsearch_placeholder.png";
          img.alt = "Icon";
        }
        img.className = "clickable-icon";
        img.style.width = "80px";
        img.style.margin = "5px";
        img.onclick = function(){
          if(img.alt.toLowerCase() === "goa"){
            alert("Correct! You've found the spot where our love unfolds.");
            clueContainer.innerHTML = "";
            document.getElementById("treasure-congrats").classList.remove("hidden");
            document.getElementById("quiz-link").classList.remove("hidden");
          } else {
            alert("Not the right spot. Keep looking!");
          }
        };
        grid.appendChild(img);
      }
      clueContainer.appendChild(grid);
    }
  }

  // Big book handling from intro-clue is triggered in treasure-hunt.html.
  const bigBook = document.getElementById("big-book");
  if(bigBook) {
    bigBook.onclick = function() {
      alert("The book opens and a note falls out: 'Where we first met, a place of learning and dread?'");
      document.getElementById("intro-clue").classList.add("hidden");
      showClue(0);
    };
  }
});
function goToQuiz() {
  window.location.href = "pop-quiz.html";
}