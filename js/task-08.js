//отримання доступу до форми
const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Відсутні обов'язкові поля");
  } else {
    console.log({ email, password });
    form.reset();
  }
}
