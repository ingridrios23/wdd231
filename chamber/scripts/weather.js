
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-temp").textContent = "22°C";
  document.getElementById("weather-desc").textContent = "Clear skies";
const forecast = [
    { day: "Mon", high: "21°C", low: "14°C" },
    { day: "Tue", high: "23°C", low: "15°C" },
    { day: "Wed", high: "22°C", low: "16° C" },
  ];

  const forecastContainer = document.getElementById("forecast");
  forecast.forEach(day => {
    const div = document.createElement("div");
    div.className = "forecast-day";
    div.innerHTML = `<strong>${day.day}</strong><p>${day.high} / ${day.low}</p>`;
    forecastContainer.appendChild(div);
  });
});
