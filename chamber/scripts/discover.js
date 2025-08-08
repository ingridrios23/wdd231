const msgContainer = document.querySelector('.visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  msgContainer.textContent = 'Welcome! Let us know if you have any questions.';
} else {
  const diff = now - parseInt(lastVisit);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) {
    msgContainer.textContent = 'Back so soon! Awesome!';
  } else {
    msgContainer.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// Load cards from JSON
fetch('data/discover.json')
  .then(res => res.json())
  .then(data => {
    const cards = document.getElementById('cards-container');
    data.places.forEach(place => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure><img src="${place.image}" alt="${place.name}"></figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn more</button>
      `;
      cards.appendChild(card);
    });
  });
