const userName = document.getElementById("name-input");
const userNameOutput = document.getElementById("name-output");
console.log(userName);
console.log(userNameOutput);

function inputHandler(event) {
  if (event.target.value.trim() === "") {
    userNameOutput.textContent = "Anonymous";
  } else {
    userNameOutput.textContent = event.target.value.trim();
  }

  console.log("event.target.value.trim() " + event.target.value.trim());
}

userName.addEventListener("input", inputHandler);
