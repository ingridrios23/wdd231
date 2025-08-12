import { fetchPets } from './module/fetchData.js';
import { setupModal } from './module/modal.js';

const featuredContainer = document.getElementById('featured-cards');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

async function loadFeatured(){
  try {
    const pets = await fetchPets();
    const featured = pets.slice(0,6);
    if (featuredContainer) {
      featuredContainer.innerHTML = featured.map(p => `
        <article class="card" data-id="${p.id}" tabindex="0">
          <img src="${p.image}" alt="${p.name} — ${p.species}" loading="lazy" />
          <div class="card-body">
            <h2>${p.name}</h2>
            <p class="muted">${p.species} • ${p.breed} • ${p.age}</p>
            <p>${p.description}</p>
            <div class="card-actions">
              <button class="details-btn">Details</button>
            </div>
          </div>
        </article>
      `).join('');
      setupModal(pets);
      attachDetailButtons();
    }
  } catch (err) {
    if (featuredContainer) featuredContainer.innerHTML = '<p class="error">Could not load featured pets.</p>';
    console.error(err);
  }
}

function attachDetailButtons(){
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const id = Number(card.dataset.id);
      openPetModalById(id);
    });
  });
}

async function openPetModalById(id){
  const pets = await fetchPets();
  const pet = pets.find(p => p.id === id);
  if (!pet) return;
  localStorage.setItem('lastViewedPet', JSON.stringify({ id: pet.id, name: pet.name, when: new Date().toISOString() }));
  const modal = document.getElementById('modal');
  if (modal && typeof modal.showPet === 'function') {
    modal.showPet(pet);
  }
}

loadFeatured();
