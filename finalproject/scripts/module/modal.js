export function setupModal(pets = []) {
  if (document.getElementById('modal')) return initializeExisting();

  const dialog = document.createElement('dialog');
  dialog.id = 'modal';
  dialog.className = 'pet-modal';
  dialog.setAttribute('role','dialog');
  dialog.setAttribute('aria-modal','true');
  dialog.innerHTML = `
    <div class="modal-inner">
      <button id="close-modal" class="modal-close" aria-label="Close">&times;</button>
      <div class="modal-grid">
        <img id="modal-img" alt="" src="" />
        <div id="modal-content"></div>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);

  const closeBtn = dialog.querySelector('#close-modal');
  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (e) => { if (e.key === 'Escape') dialog.close(); });

  dialog.showPet = function(pet) {
    if (!pet) return;
    const img = dialog.querySelector('#modal-img');
    const content = dialog.querySelector('#modal-content');
    img.src = pet.image;
    img.alt = `${pet.name} — ${pet.species}`;
    content.innerHTML = `
      <h2>${pet.name}</h2>
      <p class="muted">${pet.species} • ${pet.breed} • ${pet.age}</p>
      <p>${pet.description}</p>
      <div style="margin-top:1rem;">
        <a class="btn" href="contact.html?pet=${encodeURIComponent(pet.name)}">Contact to adopt</a>
      </div>
    `;
    dialog.showModal();
    closeBtn.focus();
  };

  return dialog;
}

function initializeExisting(){
  const dialog = document.getElementById('modal');
  if (!dialog.showPet) dialog.showPet = function(pet){};
  return dialog;
}
