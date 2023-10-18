// виведення к-ті категорій через довжину масиву
const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length} \n `);

// перебір дітей categories
const arrayList = [...list.children];

arrayList.forEach((item) => {
  console.log("Category:", item.children[0].textContent);
  console.log("Elements:", item.children[1].children.length);
  console.log("");
});
