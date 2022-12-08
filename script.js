let convertButton = document.querySelector(".wrapper .form button");
let inputLink = document.querySelector(".wrapper .form input");
let qrİmage = document.querySelector(".wrapper img");
let wrapper = document.querySelector(".wrapper");
let image = document.querySelector(".wrapper .defined");
let resetButton = document.querySelector(".wrapper .form .resetButton");
convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  let qrUrl = inputLink.value;
  if (!qrUrl) return as();
  qrİmage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrUrl}`;
  wrapper.classList.add("active");
  image.classList.add("img");
  image.classList.remove("defined");
  console.log(inputLink.value);
});
resetButton.addEventListener("click", () => {
  wrapper.classList.remove("active");
  image.classList.remove("img");
  image.classList.add("defined");
});
