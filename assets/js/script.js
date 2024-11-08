// Select the necessary elements
const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const homeIcon = document.querySelector(".home-icon img"); // Updated selector
const body = document.body;

// Load the saved theme preference from localStorage (default is dark mode)
let isDarkMode = localStorage.getItem("theme") !== "light";

// Function to update the icons based on the theme
function updateIcons() {
  // Update theme toggle button icon
  toggleIcon.src = isDarkMode
    ? "./assets/imgs/sun.png"
    : "./assets/imgs/moon.png";
  toggleIcon.alt = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

  // Update the home icon based on the theme
  homeIcon.src = isDarkMode
    ? "./assets/imgs/house-white.png"
    : "./assets/imgs/house-black.png";
  homeIcon.alt = isDarkMode ? "Home (Dark)" : "Home (Light)";
}

// Apply the saved theme on page load
if (!isDarkMode) {
  body.classList.add("light-mode");
}
updateIcons(); // Update icons on initial load

// Event listener for the theme toggle button
toggleButton.addEventListener("click", () => {
  // Toggle the theme
  isDarkMode = !isDarkMode;
  body.classList.toggle("light-mode", !isDarkMode);

  // Update the icons based on the new theme
  updateIcons();

  // Save the current theme preference to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
