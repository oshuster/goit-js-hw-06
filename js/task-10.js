function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//отримання елементів
const control = document.querySelector("#controls");
const input = control.querySelector("input");
const boxes = document.querySelector("#boxes");
const btnCreate = control.querySelector("button[data-create]");
const btnDestroy = control.querySelector("button[data-destroy]");
//створення лістенерів
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

// створення дівів
function createBoxes() {
  // пустий масив для збереження рядків
  const arrDivs = [];
  // отримання к-ті боксів
  const count = Number(input.value);
  // створення рядків
  for (let i = 0, size = 30; i < count; i += 1, size += 10) {
    arrDivs.push(
      `<div style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
  // переведення в один рядок
  const markup = arrDivs.join("");
  // додавання в розмітку
  boxes.insertAdjacentHTML("beforeend", markup);
}

// очищення
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
