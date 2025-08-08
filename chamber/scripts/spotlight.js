async function displaySpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error("No se pudo cargar el archivo members.json");

    const data = await response.json();

    if (!data.members || !Array.isArray(data.members)) {
      throw new Error("Formato incorrecto del archivo JSON");
    }

    const eligible = data.members.filter(
      m => m.membership === 'Gold' || m.membership === 'Silver'
    );

    if (eligible.length === 0) {
      console.warn("No hay miembros Gold o Silver para mostrar");
      return;
    }

    const spotlights = [];

    while (spotlights.length < 3 && eligible.length > 0) {
      const index = Math.floor(Math.random() * eligible.length);
      spotlights.push(eligible.splice(index, 1)[0]);
    }

    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    spotlights.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.logo}" alt="${member.name} logo" />
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>Level:</strong> ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando los spotlights:", error);
  }
}

displaySpotlights();
