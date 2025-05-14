
const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🌸 Ingrid Rios 🌸 Peru`;

const lastModified = document.lastModified;

document.querySelector('footer p:nth-of-type(2)').innerHTML = `Última modificación: ${lastModified}`;
