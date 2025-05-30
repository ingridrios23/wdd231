document.addEventListener("DOMContentLoaded", () => {
  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("highlight-container");
      const topMembers = data.members.filter(member => member.membership === 3 || member.membership === 2);

      topMembers.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("highlight-card");
        card.innerHTML = `
          <img src="img/${member.image}" alt="Logo of ${member.name}" />
          <h3>${member.name}</h3>
          <p>Phone: ${member.phone}</p>
          <p>Address: ${member.address}</p>
          <p><a href="${member.website}" target="_blank" rel="noopener">Visit ${member.name} Website</a></p>
          <p>Level: ${member.membership === 3 ? "Gold" : "Silver"}</p>
          <p>${member.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
});
