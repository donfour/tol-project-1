function updateAtmFinalOutcome() {
  console.log("hi")
  const principal = document.getElementById("principal").value;
  const interest = document.getElementById("interest").value;
  const time = document.getElementById("time").value;

  let finalOutcome;
  if(principal && interest && time) {
    finalOutcome = (principal * (1 + interest/100 * time)).toFixed(2);
  } else {
    finalOutcome = "N/A";
  }

  document.getElementById("final-outcome").innerHTML = finalOutcome;
}

const questions = [
  {
    mc: {
      question: "If everything else is the same, what happens to your final amount when you increase the interest rate?",
      options: [
        { text: "The final amount increases", isCorrect: true },
        { text: "The final amount is the same" },
        { text: "The final amount decreases" }
      ]
    },
    shortResponse: {
      question: "What do you think the term “interest rate” means?",
      feedback: "Interest rate is the percentage a person will earn for lending out money. In this case, you are lending your money to us by depositing your money!"
    }
  },
  {
    mc: {
      question: "If everything else is the same, what happens to your final amount when you increase time?",
      options: [
        { text: "The final amount increases", isCorrect: true },
        { text: "The final amount is the same" },
        { text: "The final amount decreases" }
      ]
    },
    shortResponse: {
      question: "Why do you think that is the case?",
      feedback: "The longer you deposit money, the more time your money has to grow. That’s why your final amount increases!"
    }
  },
  {
    mc: {
      question: "If everything else is the same, what happens when you switch between simple interest and compound interest?",
      options: [
        { text: "The final amount under simple interest grows faster." },
        { text: "The final amount under compound interest grows faster.", isCorrect: true },
        { text: "The final amounts are the same." }
      ]
    },
    shortResponse: {
      question: "What do you observe about the difference in how simple interest and compound interest grows?",
      feedback: "We will learn more in the next sections! But just in case you are curious, simple interest grows by equal differences over equal time. Compound interest grows by equal factors over equal time."
    }
  }
]

function switchQuestion(questionIndex) {
  const { mc, shortResponse } = questions[questionIndex];

  document.getElementById("mc-question").innerHTML = mc.question;
  document.getElementById("option-1").innerHTML = mc.options[0].text;
  document.getElementById("option-2").innerHTML = mc.options[1].text;
  document.getElementById("option-3").innerHTML = mc.options[2].text;
  document.getElementById("mc-feedback").innerHTML = `Correct answer: ${mc.options.find(o => o.isCorrect).text}`;

  document.getElementById("short-response-question").innerHTML = shortResponse.question;
  document.getElementById("short-response-feedback").innerHTML = shortResponse.feedback;

  document.getElementsByClassName("selected")[0].classList.remove("selected");
  document.getElementById(`discover-${questionIndex + 1}`).classList.add("selected");
}

function onSelectNext() {
  const nextQuestionIndex = parseInt(document.getElementsByClassName("selected")[0].innerHTML.slice(-1));
  
  hideAllFeedback();
  clearAnswers();

  switchQuestion(nextQuestionIndex);
  
  if(nextQuestionIndex === 2) {
    document.getElementById("next-question-button").style.display = "none";
    document.getElementById("next-page-button").style.display = "block";  
  }
}

function clearAnswers() {
  document.getElementById("short-response-answer").value = "";
  for(const element of document.getElementsByName("mc")) {
    element.checked = false;
  }
}