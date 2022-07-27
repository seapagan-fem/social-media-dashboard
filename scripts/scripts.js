console.log("JavaScript loaded");

const bodyEl = document.querySelector("body");

// add click listener to the checkbox to switch themes
const handleToggleColors = (e) => {
  bodyEl.className = e.target.checked ? "theme-light" : "theme-dark";
};

document
  .getElementById("toggle-colors")
  .addEventListener("click", handleToggleColors);

// apply dark mode by default
bodyEl.className = "theme-dark";
