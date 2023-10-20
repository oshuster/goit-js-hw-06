//звернення до елементів
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

//додано слухач події
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

// функціонал
function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
