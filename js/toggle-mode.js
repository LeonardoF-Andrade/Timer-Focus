let darkMode = true;

const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  document.querySelector("html").classList.toggle("light");

  darkMode = !darkMode;
});
