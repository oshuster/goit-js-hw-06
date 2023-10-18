const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//створення масиву з li
const ingredientsToItem = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});
//додоавання едементів з масиву
const list = document.querySelector("#ingredients");
list.append(...ingredientsToItem);
