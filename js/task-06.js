const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInput);

function handlerInput(event) {
  input.setAttribute("class", "");
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    event.currentTarget.classList.value = "valid";
  } else {
    event.currentTarget.classList.value = "invalid";
  }
}
