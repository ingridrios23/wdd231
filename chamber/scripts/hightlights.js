const highlightsContainer = document.getElementById("highlights");

fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const goldSilver = data.members.filter(member =>
      member.level === "Gold" || member.level === "Silver"
    );

    
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); 

    selected.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="level">${member.level} Member</p>
      `;
      highlightsContainer.appendChild(card);
    });
  })
  .catch(error => {
    highlightsContainer.innerHTML = "<p>Error loading members.</p>";
    console.error("Member fetch error:", error);
  });
