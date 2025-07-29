const apiKey = 'YOUR_API_KEY'; // Reemplázalo con tu clave real
const city = 'YourCity'; // Cambia al nombre de tu ciudad

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();
  document.getElementById('temp').textContent = `${data.main.temp} °C`;
  document.getElementById('description').textContent = data.weather[0].description;
}

async function getForecast() {
  const response = await fetch(forecastURL);
  const data = await response.json();
  const forecastList = document.getElementById('forecast');
  forecastList.innerHTML = '';

  for (let i = 0; i < data.list.length; i += 8) {
    const day = data.list[i];
    const item = document.createElement('li');
    item.textContent = `${new Date(day.dt_txt).toDateString()}: ${day.main.temp} °C`;
    forecastList.appendChild(item);
  }
}

getWeather();
getForecast();
