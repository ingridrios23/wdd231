const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
