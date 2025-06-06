
const msg = document.getElementById("visit-message");
const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  msg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    msg.textContent = "Back so soon! Awesome!";
  } else {
    msg.textContent = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", today);
fetch("data/places.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cards-container");

    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.gridArea = `card${index + 1}`;
      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.title}" width="300" height="200" loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn more</button>
      `;
      container.appendChild(card);
    });
  });
