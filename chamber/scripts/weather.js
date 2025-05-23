const apiKey = "YOUR_AlI_KEY"; 
const lat = 40.7128; 
const lon = -74.0060; 

const weatherContainer = document.getElementById("weather");

const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;

fetch(weatherURL)
  .then(response => response.json())
  .then(data => {
    const currentTemp = data.current.temp;
    const description = data.current.weather[0].description;
    const daily = data.daily;

    let html = `
      <p><strong>Temperature:</strong> ${currentTemp.toFixed(1)}°C</p>
      <p><strong>Condition:</strong> ${description}</p>
      <h3>3-Day Forecast:</h3>
      <ul>
        ${daily.slice(1, 4).map(day => `
          <li>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}:
          ${day.temp.day.toFixed(1)}°C, ${day.weather[0].description}</li>
        `).join('')}
      </ul>
    `;
    weatherContainer.innerHTML = html;
  })
  .catch(error => {
    weatherContainer.innerHTML = "<p>Error loading weather data.</p>";
    console.error("Weather fetch error:", error);
  });
