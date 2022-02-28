function showFeedback(feedbackElementId) {
  document.getElementById(feedbackElementId).style.display = "block";
}

function showFeedbackIfAllFilledIn(inputElementName, feedbackElementId) {
  let isAllFilledIn = true;
  for (const element of document.getElementsByName(inputElementName)) {
    if (element.value === "") {
      isAllFilledIn = false;
    }
  }

  if (isAllFilledIn) {
    document.getElementById(feedbackElementId).style.display = "block";
  }
}

function hideAllFeedback() {
  for(const element of document.getElementsByClassName("feedback")) {
    element.style.display = "none";
  }
}
