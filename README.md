# 🌦️ ClimateX - Smart Weather Forecast Dashboard

ClimateX is a modern and responsive weather forecasting web application built using HTML, CSS, and JavaScript. The application provides real-time weather information, hourly forecasts, and 5-day weather predictions for cities across India using the Open-Meteo API.

Designed with a clean glassmorphism-inspired interface, ClimateX offers an intuitive user experience with features such as geolocation-based weather detection, live clock, dark/light theme switching, and recent search history.

---

## 🚀 Features

### 🌍 Real-Time Weather Updates

* Get current weather conditions for selected cities.
* Displays temperature, humidity, wind speed, pressure, visibility, and UV index.

### 📍 Current Location Weather

* Uses the browser's Geolocation API to fetch weather data for the user's current location.

### 🕒 Hourly Forecast

* View upcoming hourly temperature forecasts.

### 📅 5-Day Weather Forecast

* Displays daily minimum and maximum temperatures for the next five days.

### 🌓 Dark & Light Theme

* Toggle between dark and light modes.
* Theme preference is saved using Local Storage.

### ⏰ Live Clock & Date

* Displays the current local time and date in real time.

### 🔍 Recent Searches

* Stores and displays recently searched cities.
* Enables quick access to previously viewed weather data.

### 📱 Responsive Design

* Fully responsive layout optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### APIs

* Open-Meteo Geocoding API
* Open-Meteo Weather Forecast API
* Browser Geolocation API

### Libraries & Resources

* Font Awesome Icons
* Google Fonts (Poppins)

---

## 📂 Project Structure

```text
ClimateX/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

1. User selects a city from the dropdown menu.
2. Open-Meteo Geocoding API converts the city name into latitude and longitude coordinates.
3. Open-Meteo Forecast API retrieves weather information based on those coordinates.
4. Weather data is displayed dynamically on the dashboard.
5. Users can alternatively fetch weather using their current location.

---

## 🌐 APIs Used

### Open-Meteo Geocoding API

Used to convert city names into geographic coordinates.

```text
https://geocoding-api.open-meteo.com/v1/search
```

### Open-Meteo Forecast API

Used to retrieve weather information.

```text
https://api.open-meteo.com/v1/forecast
```

### Browser Geolocation API

Used to obtain the user's current location.

```javascript
navigator.geolocation.getCurrentPosition()
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* API Integration using Fetch API
* Asynchronous JavaScript (Async/Await)
* DOM Manipulation
* Local Storage
* Event Handling
* Responsive Web Design
* Geolocation Services
* Dynamic UI Updates

---

## 📸 Application Highlights

* Glassmorphism UI Design
* Animated Gradient Background
* Weather Condition Icons
* Responsive Forecast Cards
* Interactive Theme Switching

---

## 🔮 Future Enhancements

* Weather Maps Integration
* Air Quality Forecast
* Multi-Country City Support
* Weather Alerts & Notifications
* Temperature Unit Conversion (°C / °F)
* PWA (Progressive Web App) Support

---

## 👨‍💻 Author

Developed as a frontend web development project using modern web technologies and public weather APIs.

---

## 📄 License

This project is open-source and available for educational and learning purposes.
