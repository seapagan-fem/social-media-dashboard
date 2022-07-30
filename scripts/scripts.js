console.log("JavaScript loaded");

const bodyEl = document.querySelector("body");
const toggleEl = document.getElementById("toggle-colors");
const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

// add click listener to the checkbox to switch themes
const handleToggleColors = (e) => {
  bodyEl.className = e.target.checked ? "theme-light" : "theme-dark";
};

toggleEl.addEventListener("click", handleToggleColors);

/* -------------------------------------------------------------------------- */
/*                  detect dark/light mode on browsing device                 */
/* -------------------------------------------------------------------------- */
const setMode = (mode) => {
  bodyEl.className = mode ? "theme-dark" : "theme-light";
  toggleEl.checked = mode ? false : true;
};

// watch for changes to dark/light mode
matchMedia.addEventListener("change", (e) => {
  setMode(e.matches);
});

// set correct mode on refresh
setMode(matchMedia.matches);
