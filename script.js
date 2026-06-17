const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";



const citySelect = document.getElementById("citySelect");
const searchForm = document.getElementById("searchForm");
const locationBtn = document.getElementById("locationBtn");
const themeBtn = document.getElementById("themeBtn");
const cityName = document.getElementById("cityName");
const weatherCondition = document.getElementById("weatherCondition");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weatherIcon");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const uvIndex = document.getElementById("uvIndex");
const weatherTip = document.getElementById("weatherTip");
const hourlyForecast = document.getElementById("hourlyForecast");
const forecastContainer = document.getElementById("forecastContainer");
const loader = document.getElementById("loader");
const errorBox = document.getElementById("errorBox");
const recentSearches = document.getElementById("recentSearches");



const cities = [
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Alappuzha",
    "Aligarh",
    "Amaravati",
    "Ambala",
    "Amravati",
    "Amritsar",
    "Anand",
    "Anantapur",
    "Arrah",
    "Asansol",
    "Aurangabad",
    "Balasore",
    "Ballari",
    "Bangalore",
    "Barasat",
    "Bareilly",
    "Bathinda",
    "Belagavi",
    "Bengaluru",
    "Berhampore",
    "Berhampur",
    "Begusarai",
    "Bhagalpur",
    "Bharatpur",
    "Bhilai",
    "Bhilwara",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj",
    "Bidar",
    "Bikaner",
    "Bilaspur",
    "Bokaro Steel City",
    "Chandigarh",
    "Chandrapur",
    "Chennai",
    "Chhindwara",
    "Chittoor",
    "Coimbatore",
    "Cuddalore",
    "Cuttack",
    "Darbhanga",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Deoghar",
    "Dhanbad",
    "Dharamshala",
    "Dhule",
    "Dibrugarh",
    "Dimapur",
    "Dindigul",
    "Durg",
    "Durgapur",
    "Eluru",
    "Erode",
    "Faridabad",
    "Farrukhabad",
    "Firozabad",
    "Gandhidham",
    "Gandhinagar",
    "Gangtok",
    "Gaya",
    "Ghaziabad",
    "Gorakhpur",
    "Guntur",
    "Gurugram",
    "Guwahati",
    "Gwalior",
    "Haldia",
    "Haldwani",
    "Hanumangarh",
    "Hapur",
    "Haridwar",
    "Hazaribagh",
    "Hisar",
    "Hoshiarpur",
    "Hosur",
    "Hubballi",
    "Hyderabad",
    "Imphal",
    "Indore",
    "Itanagar",
    "Jabalpur",
    "Jagdalpur",
    "Jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jalna",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Jorhat",
    "Junagadh",
    "Kadapa",
    "Kakinada",
    "Kalaburagi",
    "Kalyan",
    "Kanchipuram",
    "Kannur",
    "Kanpur",
    "Kargil",
    "Karimnagar",
    "Karnal",
    "Kasaragod",
    "Katihar",
    "Khammam",
    "Kharagpur",
    "Kochi",
    "Kohima",
    "Kolhapur",
    "Kolkata",
    "Kollam",
    "Korba",
    "Kota",
    "Kottayam",
    "Kozhikode",
    "Kurnool",
    "Latur",
    "Leh",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mahbubnagar",
    "Malappuram",
    "Malda",
    "Mangaluru",
    "Mapusa",
    "Margao",
    "Mathura",
    "Mau",
    "Meerut",
    "Mehsana",
    "Mohali",
    "Moradabad",
    "Morbi",
    "Moga",
    "Mumbai",
    "Munger",
    "Muzaffarpur",
    "Mysore",
    "Mysuru",
    "Nadiad",
    "Nagercoil",
    "Nagpur",
    "Nainital",
    "Nanded",
    "Nashik",
    "Navi Mumbai",
    "Nellore",
    "New Delhi",
    "Nizamabad",
    "Noida",
    "Ongole",
    "Ooty",
    "Palakkad",
    "Pali",
    "Panaji",
    "Panchkula",
    "Panipat",
    "Parbhani",
    "Pathanamthitta",
    "Pathankot",
    "Patiala",
    "Patna",
    "Pimpri-Chinchwad",
    "Porbandar",
    "Prayagraj",
    "Puducherry",
    "Pune",
    "Puri",
    "Purnia",
    "Raichur",
    "Raigarh",
    "Raipur",
    "Rajahmundry",
    "Rajapalayam",
    "Rajkot",
    "Ramagundam",
    "Rampur",
    "Ranchi",
    "Ratlam",
    "Raurkela",
    "Rewa",
    "Rishikesh",
    "Rohtak",
    "Roorkee",
    "Sagar",
    "Saharanpur",
    "Salem",
    "Sambalpur",
    "Sangli",
    "Satna",
    "Shahjahanpur",
    "Shillong",
    "Shimla",
    "Shivamogga",
    "Sikar",
    "Silchar",
    "Siliguri",
    "Solapur",
    "Sonipat",
    "Sri Ganganagar",
    "Srikakulam",
    "Srinagar",
    "Surat",
    "Tezpur",
    "Thane",
    "Thanjavur",
    "Thiruvananthapuram",
    "Thoothukudi",
    "Thrissur",
    "Tinsukia",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupati",
    "Tiruppur",
    "Tumakuru",
    "Udaipur",
    "Udupi",
    "Ujjain",
    "Vadodara",
    "Varanasi",
    "Vasco da Gama",
    "Vellore",
    "Vijayapura",
    "Vijayawada",
    "Visakhapatnam",
    "Vizianagaram",
    "Warangal",
    "Yamunanagar"
];



window.addEventListener("DOMContentLoaded", () => {
    populateCities();
    startClock();
    loadTheme();
    loadRecentSearches();
    getWeatherByCity("New Delhi");
});



function populateCities() {
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}



searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = citySelect.value;
    if (!city) return;
    saveRecentSearch(city);
    getWeatherByCity(city);
});



locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        showError("Geolocation not supported");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon, "Your Location");
        },
        () => {
            showError("Location permission denied");
        }
    );
});



async function getWeatherByCity(city) {

    try {
        showLoader();
        const res = await fetch(
            `${GEO_URL}?name=${city}&count=1`
        );
        const data = await res.json();
        if (!data.results) {
            showError("City not found");
            return;
        }
        const location = data.results[0];
        getWeather(
            location.latitude,
            location.longitude,
            location.name
        );
    }
    catch {
        showError("Failed to fetch city");
    }
    finally {
        hideLoader();
    }
}



async function getWeather(lat, lon, city) {
    try {
        showLoader();
        const url =
            `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,pressure_msl,wind_speed_10m&hourly=temperature_2m,weather_code,visibility&daily=temperature_2m_max,temperature_2m_min,weather_code,uv_index_max&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();
        updateCurrentWeather(data, city);
        updateHourlyForecast(data);
        updateForecast(data);
    }
    catch {
        showError("Weather fetch failed");
    }
    finally {
        hideLoader();
    }
}



function updateCurrentWeather(data, city) {
    cityName.textContent = city;
    temperature.textContent =
        Math.round(data.current.temperature_2m);
    humidity.textContent =
        data.current.relative_humidity_2m + "%";
    windSpeed.textContent =
        data.current.wind_speed_10m + " km/h";
    pressure.textContent =
        Math.round(data.current.pressure_msl) + " hPa";
    visibility.textContent =
        (data.hourly.visibility[0] / 1000).toFixed(1) + " km";
    uvIndex.textContent =
        Math.round(data.daily.uv_index_max[0]);
    const code = data.current.weather_code;
    const weather = getWeatherInfo(code);
    weatherCondition.textContent =
        weather.condition;
    weatherIcon.className =
        `fa-solid ${weather.icon}`;
    weatherTip.textContent =
        generateTip(data.current.temperature_2m);
}



function getWeatherInfo(code) {
    if (code === 0)
        return {
            condition: "Clear Sky",
            icon: "fa-sun"
        };
    if (code <= 3)
        return {
            condition: "Cloudy",
            icon: "fa-cloud"
        };
    if (code <= 67)
        return {
            condition: "Rain",
            icon: "fa-cloud-rain"
        };
    if (code <= 77)
        return {
            condition: "Snow",
            icon: "fa-snowflake"
        };
    return {
        condition: "Thunderstorm",
        icon: "fa-cloud-bolt"
    };
}



function generateTip(temp) {
    if (temp > 38)
        return "Stay hydrated and avoid direct sunlight.";
    if (temp > 30)
        return "Hot weather. Carry water with you.";
    if (temp < 10)
        return "Cold weather. Wear warm clothes.";
    return "Perfect weather for outdoor activities.";
}



function updateHourlyForecast(data) {
    hourlyForecast.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const card =
            document.createElement("div");
        card.classList.add("hour-card");
        card.innerHTML = `
            <p>${data.hourly.time[i].slice(11,16)}</p>
            <h3>${Math.round(data.hourly.temperature_2m[i])}°</h3>
        `;
        hourlyForecast.appendChild(card);
    }
}



function updateForecast(data) {
    forecastContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const card =
            document.createElement("div");
        card.classList.add("forecast-card");
        card.innerHTML = `
            <h3>Day ${i + 1}</h3>
            <i class="fa-solid fa-cloud-sun"></i>
            <p>Max: ${Math.round(data.daily.temperature_2m_max[i])}°C</p>
            <p>Min: ${Math.round(data.daily.temperature_2m_min[i])}°C</p>
        `;
        forecastContainer.appendChild(card);
    }
}



function startClock() {
    const clock =
        document.getElementById("liveClock");
    const date =
        document.getElementById("currentDate");
    setInterval(() => {
        const now = new Date();
        clock.textContent =
            now.toLocaleTimeString();
        date.textContent =
            now.toDateString();
    }, 1000);
}



themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );
    localStorage.setItem(
        "theme",
        document.body.classList.contains(
            "light-mode"
        )
    );
});
function loadTheme() {
    const saved =
        localStorage.getItem("theme");
    if (saved === "true") {
        document.body.classList.add(
            "light-mode"
        );
    }
}



function saveRecentSearch(city) {
    let searches =
        JSON.parse(
            localStorage.getItem(
                "recentCities"
            )
        ) || [];
    searches = searches.filter(
        item => item !== city
    );
    searches.unshift(city);
    searches = searches.slice(0, 5);
    localStorage.setItem(
        "recentCities",
        JSON.stringify(searches)
    );
    loadRecentSearches();
}
function loadRecentSearches() {
    recentSearches.innerHTML = "";
    const searches =
        JSON.parse(
            localStorage.getItem(
                "recentCities"
            )
        ) || [];
    searches.forEach(city => {
        const item =
            document.createElement("div");
        item.classList.add("recent-item");
        item.textContent = city;
        item.addEventListener("click", () => {
            getWeatherByCity(city);
        });
        recentSearches.appendChild(item);
    });
}



function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}