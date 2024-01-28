const userName = document.getElementById("name-input");
const userNameOutput = document.getElementById("name-output");

function inputHandler(event) {
  userNameOutput.textContent = event.target.value.trim();
}

userName.addEventListener("input", inputHandler);
