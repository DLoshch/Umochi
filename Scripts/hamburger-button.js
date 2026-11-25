const menuToggle = document.getElementById("menu-toggle");
const menuDropdown = document.getElementById("menu-dropdown");

function setMenuOpen(isOpen) {
  menuDropdown.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  setMenuOpen(!menuDropdown.classList.contains("open"));
});

menuDropdown.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("click", (e) => {
  if (!menuDropdown.contains(e.target)) setMenuOpen(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenuOpen(false);
});
