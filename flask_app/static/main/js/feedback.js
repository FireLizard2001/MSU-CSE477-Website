// JavaScript source code
const button = document.getElementById('right');

button.addEventListener('click', () => {
  var x = document.getElementById("feedback_form");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
})