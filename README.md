
A responsive **Prayer Times Website** built with **HTML, CSS, and JavaScript**, using the **Aladhan API** to display accurate prayer times based on the user's location or selected city.

## 📸 Project Preview
### 💻 Desktop
<img width="1903" height="887" alt="image" src="https://github.com/user-attachments/assets/3ae783f8-b7c0-4705-ba61-8c4e8223944b" />


### 📱 Mobile
<img width="658" height="775" alt="image" src="https://github.com/user-attachments/assets/d9aa89f7-63bf-47b7-bd26-6ff6b7ab7539" />



## ✨ Features

* 📍 Get prayer times based on the user's current location.
* 🏙️ Select a city from a predefined list.
* 🕌 Display the daily prayer times:

  * Fajr
  * Sunrise
  * Dhuhr
  * Asr
  * Maghrib
  * Isha
* 📅 Display both **Gregorian** and **Hijri** dates.
* 🔄 Update prayer times when the selected city changes.
* 📱 Responsive design for different screen sizes.
* ✨ Simple hover and floating animations.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **Axios**
* **Aladhan API**
* **Geolocation API**

## 🌐 API

This project uses the **Aladhan API** to retrieve prayer times.

Two API methods are used:

* `timings` — to get prayer times using latitude and longitude.
* `timingsByCity` — to get prayer times based on the selected city and country.

## 📍 Location

The website supports:

* Cairo, Egypt
* Alexandria, Egypt
* Ismailia, Egypt
* Gharbia, Egypt
* Sharqia, Egypt
* Makkah, Saudi Arabia
* Madinah, Saudi Arabia
* South Sinai, Egypt

The website initially attempts to get the user's location using the browser's **Geolocation API**.


##  How to Run

1. Clone the repository:

```bash
git clone https://github.com/rawanzahra/Prayer-Times-Website.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

> Make sure your browser allows location access if you want to use your current location.

## 🎯 What I Learned

Through this project, I practiced:

* Working with **APIs**.
* Sending HTTP requests using **Axios**.
* Using **Geolocation API** to get latitude and longitude.
* Handling asynchronous operations with **Promises** and `.then()`.
* Working with JSON API responses.
* Updating HTML elements dynamically using JavaScript.
* Using `<select>` and handling the `change` event.
* Creating responsive layouts with CSS.
* Adding CSS animations and hover effects.
