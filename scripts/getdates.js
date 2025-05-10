
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  const lastModParagraph = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModParagraph) {
    lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }
});
