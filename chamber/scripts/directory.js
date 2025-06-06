const membersContainer = document.getElementById("membersContainer");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

async function getMemberData() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to load data");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("There was a problem with fetch:", error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = ""; 
  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="img/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
      <p>${member.description}</p>
    `;

    membersContainer.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}


gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});


getMemberData();
