const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
slider.addEventListener("input", changeFont);
//встановлення дефолтного значення інпуту, для прибирання скачку розміру тексту
slider.setAttribute("value", "16");

function changeFont(event) {
  let size = event.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
