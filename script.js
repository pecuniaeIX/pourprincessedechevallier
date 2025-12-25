const form = document.getElementById("pwdForm");
const input = document.getElementById("pwd");
const status = document.getElementById("status");
const transition = document.getElementById("transition");

const normalize = (s) => (s || "").trim().toLowerCase();
const EXPECTED = "disney";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (normalize(input.value) !== EXPECTED) {
    status.textContent = "Essaie encore ♥";
    input.focus();
    input.select();
    return;
  }

  status.textContent = "Oui ♥";
  transition.classList.add("show");

  setTimeout(() => {
    window.location.href = "./page2.html";
  }, 900);
});
