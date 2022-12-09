let wrapper = document.querySelector(".wrapper");
let inputLink = document.querySelector(".wrapper .form-header input");
let resetButton = document.querySelector("#resetButton");
let convertButton = document.querySelector(".wrapper .form-footer button");
let qrİmage = document.querySelector(".wrapper img");
let image = document.querySelector(".wrapper .defined");

convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  let qrUrl = inputLink.value;
  if (!qrUrl) return;
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
  reset(inputLink);
});
function reset(inputLink) {
  inputLink.value = "";
}
