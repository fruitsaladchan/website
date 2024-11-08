const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

let isDarkMode = true;

toggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("light-mode", !isDarkMode);

  // Change the icon based on the theme
  toggleIcon.src = isDarkMode
    ? "./assets/imgs/sun.png"
    : "./assets/imgs/moon.png";
  toggleIcon.alt = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
});
