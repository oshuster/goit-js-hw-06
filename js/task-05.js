const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(event) {
  if (event.currentTarget.value != "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
}
