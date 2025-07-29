document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("fname").textContent = params.get("fname") || "N/A";
  document.getElementById("lname").textContent = params.get("lname") || "N/A";
  document.getElementById("email").textContent = params.get("email") || "N/A";
  document.getElementById("phone").textContent = params.get("phone") || "N/A";
  document.getElementById("orgname").textContent = params.get("orgname") || "N/A";
  document.getElementById("timestamp").textContent = params.get("timestamp") 
    ? new Date(params.get("timestamp")).toLocaleString() 
    : "N/A";
});
