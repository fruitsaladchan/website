const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const homeIcon = document.querySelector(".home-icon img");
const body = document.body;

let isDarkMode = localStorage.getItem("theme") !== "light";

function updateIcons() {
  toggleIcon.src = isDarkMode
    ? "./assets/imgs/sun.png"
    : "./assets/imgs/moon.png";
  toggleIcon.alt = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

  homeIcon.src = isDarkMode
    ? "./assets/imgs/house-white.png"
    : "./assets/imgs/house-black.png";
  homeIcon.alt = isDarkMode ? "Home (Dark)" : "Home (Light)";
}

if (!isDarkMode) {
  body.classList.add("light-mode");
}
updateIcons();

toggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("light-mode", !isDarkMode);

  updateIcons();

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
