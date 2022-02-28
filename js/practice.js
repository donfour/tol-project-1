function onSelectOption(element) {
  // clear existing selection
  for(const el of document.getElementsByTagName('button')) {
    el.classList.remove("selected");  
  }
  element.classList.toggle("selected");
  updateSubmitButton();
}

function isQuestionComplete() {
  const hasFinalAmount = document.getElementById("final-amount").value !== '';
  const hasSelectedOption = document.getElementsByClassName('selected').length > 0;
  return hasFinalAmount && hasSelectedOption;
}

function showFeedbackIfCompletedQuestion() {
  if(isQuestionComplete()) {
    showFeedback('feedback');
  }
}

function updateSubmitButton() {
  const classList = document.getElementById("submit-button").classList;
  
  if(isQuestionComplete()) {
    classList.remove("disabled");
  } else {
    classList.add("disabled");
  }
}