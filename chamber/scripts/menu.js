document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("#primary-nav ul");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
