function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const output = document.querySelector(".color");
const body = document.querySelector("body");
btn.addEventListener("click", changeColor);
output.textContent = "#fafafa";

function changeColor() {
  const color = getRandomHexColor();
  output.textContent = color;
  body.style.backgroundColor = color;
}
