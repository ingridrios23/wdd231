

const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🌸 Ingrid Rios 🌸 Peru`;

const lastModified = document.lastModified;

document.querySelector('footer p:nth-of-type(2)').innerHTML = `Última modificación: ${lastModified}`;

footer.appendChild(document.createElement("br"));
footer.appendChild(yearSpan);
footer.appendChild(document.createTextNode(" | "));
footer.appendChild(lastModified);

const hamburgerBtn = document.createElement("button");
hamburgerBtn.setAttribute("id", "hamburgerBtn");
hamburgerBtn.innerHTML = "☰";
hamburgerBtn.setAttribute("aria-label", "Toggle menu");

const nav = document.querySelector("nav");
nav.parentNode.insertBefore(hamburgerBtn, nav);

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
