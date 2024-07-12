//https://api.weatherapi.com/v1/forecast.json?key=2529bff8e9bd4c7ca4b212322242806&q=cairo&days=7  // Api

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let search = document.getElementById("search");
let loading = document.getElementById("loading");
let contentData = document.getElementById("contentData");
async function getWeather(cityName) {
  loading.style.display = "flex";
  contentData.style.display = "none";
  let weatherResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=c0ec0cb3f21c4050b04152107241207&q=${cityName}&days=5`,
  );
  let weatherData = await weatherResponse.json();
  if (weatherResponse.status == 200) {
    setTimeout(() => {
      loading.style.display = "none";
      contentData.style.display = "block";
    }, 1000);
  } else if (weatherResponse.status != 200) {
    setTimeout(() => {
      loading.style.display = "none";
      contentData.style.display = "block";
      getLocation();
    }, 1000);
  }
  console.log(weatherData);
  return weatherData;
}
let searchTime;
window.addEventListener("DOMContentLoaded", () => {
  search.addEventListener("input", function () {
    searchTime = setTimeout(() => {
      if (search.value.length >= 3) {
        startApp(search.value);
      } else {
        getLocation();
      }
    }, 2000);
  });
});

function displayWeatherToday(data) {
  cartona = "";
  cartona += `
      <div class="col-md-3 inner-1 rounded-2 p-4">
          <div class="d-flex justify-content-between align-items-center">
            <p>Now</p>
            <p id="city">${data.location.name}</p>
          </div>
          <div class="weather-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 id="degreeNow" class="text-white h6"> ${data.current.temp_c
    } °C</h1>
              <img alt="weatherIcon"
                id="iconNow"
                src="${data.current.condition.icon}"
                class="w-25"
              />
            </div>
            <p id="statusNow" class="text-center">${data.current.condition.text
    }</p>
          </div>
          <hr class="text-white" />

          <div class="celender p-2">
            <div class="d-flex">
              <i class="fa-regular fa-calendar pe-2"></i>
              <p id="dayNow" class="m-0">${days[new Date(data.location.localtime).getDay()]
    }</p>
              <p id="dateNow" class="px-1 m-0">${[
      new Date(data.location.localtime).getDate(),
    ]}</p>
              <p id="monthNow" class="m-0">${months[new Date(data.location.localtime).getMonth()]
    }</p>
            </div>
          </div>
          <hr class="text-white" />
          <h4 class="py-3 h6">Today At :</h4>
          <div class="forecast">
            <div
              class="forecastToday my-3 inner d-flex justify-content-between align-items-center"
            >
              <p>${[
      new Date(
        data.forecast.forecastday[0].hour[1].time,
      ).toLocaleString("en-US", { hour: "numeric", hour12: true }),
    ]}</p>
              <p>${data.forecast.forecastday[0].hour[1].temp_c}°C</p>
            </div>
            <div
              class="forecastToday my-3 inner d-flex justify-content-between align-items-center"
            >
${[
      new Date(data.forecast.forecastday[0].hour[4].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[4].temp_c}°C</p>
            </div>
            <div
              class="forecastToday my-3 inner d-flex justify-content-between align-items-center"
            >
${[
      new Date(data.forecast.forecastday[0].hour[7].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[7].temp_c} °C</p>
            </div>
            <div
              class="forecastToday my-3 inner d-flex justify-content-between align-items-center"
            >
${[
      new Date(data.forecast.forecastday[0].hour[10].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[10].temp_c}°C </p>
            </div>
            <div class="forecastToday my-3 inner d-flex justify-content-between align-items-center">
${[
      new Date(data.forecast.forecastday[0].hour[13].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[13].temp_c} °C</p>
            </div>

                    <div class="forecastToday my-3 inner d-flex justify-content-between align-items-center">
${[
      new Date(data.forecast.forecastday[0].hour[15].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[15].temp_c} °C</p>
            </div>
                    <div class="forecastToday my-3 inner d-flex justify-content-between align-items-center">
${[
      new Date(data.forecast.forecastday[0].hour[17].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[17].temp_c} °C</p>
            </div>
                    <div class="forecastToday my-3 inner d-flex justify-content-between align-items-center">
${[
      new Date(data.forecast.forecastday[0].hour[20].time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    ]}              <p>${data.forecast.forecastday[0].hour[20].temp_c} °C</p>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="py-3 ms-3 rounded-3">
            <h2 class="text-white">Todays Highlights :</h2>
          </div>
          <div class="row gy-4">
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Raining</p>
                  <div>
                    <i class="fa-solid fa-cloud-rain"></i>
                  </div>
                </div>
                <p id="rainToday" class="text-center m-1">${data.forecast.forecastday[0].day.daily_will_it_rain
    } mm</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Wind Speed</p>
                  <div>
                    <i class="fa-solid fa-wind"></i>
                  </div>
                </div>
                <p id="windToday" class="text-center m-1">${data.current.wind_kph
    } Km/h</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>humidity</p>
                  <div>
                    <i class="fa-solid fa-droplet"></i>
                  </div>
                </div>
                <p id="humidity" class="text-center m-1">${data.current.humidity
    } %</p>
              </div>
            </div>
               <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>wind_dir</p>
                  <div>
                    <i class="fa-regular fa-compass"></i>
                  </div>
                </div>
                <p class="text-center m-1">${data.current.wind_dir}</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Max Temp</p>
                  <div>
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                  </div>
                </div>
                <p class="text-center m-1">${data.forecast.forecastday[0].day.maxtemp_c
    } °C</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Min Temp</p>
                  <div>
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                  </div>
                </div>
                <p class="text-center m-1">${data.forecast.forecastday[0].day.mintemp_c
    } °C</p>
              </div>
            </div>
         
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>pressure</p>
                  <div>
<i class="bi bi-compass"></i>                  </div>
                </div>
                <p class="text-center m-1">${data.current.pressure_in} in</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>clouds</p>
                  <div>
<i class="fa-solid fa-cloud-showers-water"></i>                  </div>
                </div>
                <p class="text-center m-1">${data.current.cloud} %</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Fahrenheit</p>
                  <div>
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                  </div>
                </div>
                <p class="text-center m-1">${data.current.temp_f}°f</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Sunrise</p>
                  <div>
<i class="bi bi-sunrise"></i>                 </div>
                </div>
                <p class="text-center m-1">${data.forecast.forecastday[0].astro.sunrise
    }</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Sunset</p>
                  <div>
<i class="bi bi-sunset"></i>                  </div>
                </div>
                <p class="text-center m-1">${data.forecast.forecastday[0].astro.sunset
    }</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="inner p-3 rounded-2">
                <div class="d-flex justify-content-between">
                  <p>Visibility</p>
                  <div>
<i class="bi bi-eye"></i>                  </div>
                </div>
                <p class="text-center m-1">${data.current.vis_km} KM</p>
              </div>
            </div>
          </div>
          <hr class="text-white">
          <h6 class="py-3 ms-3 h4">6 Days Forecast :</h6>
            <div class="row mx-3 gy-3">
      <div class="col-md-4 ">
                <div class="inner rounded-3 p-2 ">
        <p class="text-center">${days[new Date(data.forecast.forecastday[1].date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[1].day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[1].day.maxtemp_c} °C</p>
        </div>
        </div>
      </div>
          <div class="col-md-4">
          <div class="inner rounded-3 p-2">
        <p class="text-center">${days[new Date(data.forecast.forecastday[2].date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[2].day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[2].day.maxtemp_c} °C</p>
        </div>
        </div>
      </div>
          <div class="col-md-4">
          <div class="inner rounded-3 p-2">
        <p class="text-center">${days[new Date(data.forecast.forecastday[3]?.date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[3]?.day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[3]?.day.maxtemp_c} °C</p>
        </div>
      </div>
      </div>
          <div class="col-md-4 ">
          <div class="inner rounded-3 p-2">
        <p class="text-center">${days[new Date(data.forecast.forecastday[4]?.date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[4]?.day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[4]?.day.maxtemp_c} °C</p>
        </div>
        </div>
      </div>
          <div class="col-md-4 ">
                    <div class="inner rounded-3 p-2">
        <p class="text-center">${days[new Date(data.forecast.forecastday[5]?.date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[5]?.day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[5]?.day.maxtemp_c} °C</p>
        </div>
      </div>
      </div>
          <div class="col-md-4 ">
                    <div class="inner rounded-3 p-2">
        <p class="text-center">${days[new Date(data.forecast.forecastday[6]?.date).getDay()]
    }</p>
        <div class="d-flex align-items-center justify-content-between mx-2">
          <img alt="weatherIcon" src="${data.forecast.forecastday[6]?.day.condition.icon
    }" class="w-25" />
          <p>${data.forecast.forecastday[6]?.day.maxtemp_c} °C</p>
        </div>
      </div>
    </div>
    </div>
        </div>
  `;

  document.getElementById("myRow").innerHTML = cartona;
}
async function startApp(city = "cairo") {
  let weatherData = await getWeather(city);
  if (!weatherData.error) {
    displayWeatherToday(weatherData);
  }
}

function getLocation() {
  let options = { enableHighAccuracy: true };
  function current(l) {
    let lat = l.coords.latitude;
    let lon = l.coords.longitude;
    let cords = lat + "," + lon;
    // console.log(cords);
    (async function () {
      let weatherData = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c0ec0cb3f21c4050b04152107241207&q=${cords}&days=7`,
      );
      if (weatherData.status == 200) {
        let response = await weatherData.json();
        displayWeatherToday(response);
      }
    })();
  }
  function error() {
    getLocation();
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(current, error, options);
  }
}
startApp("cairo");
getLocation();
