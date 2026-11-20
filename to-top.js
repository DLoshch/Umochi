const toTopButton = document.getElementById("to-top");
const toTopShowAfter = 400;

function updateToTopButton() {
  toTopButton.classList.toggle("visible", window.scrollY > toTopShowAfter);
}

updateToTopButton();
window.addEventListener("scroll", updateToTopButton, { passive: true });

toTopButton.addEventListener("click", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});
