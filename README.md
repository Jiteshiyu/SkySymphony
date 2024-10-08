# SkySymphony

This is a weather app that allows users to get current weather data for any city in the world.

![React](https://img.shields.io/badge/React-007ACC?style=for-the-badge&logo=react&logoColor=white)
![JSX](https://img.shields.io/badge/JSX-React%20Component-informational?style=for-the-badge&logo=react)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)

## Demo

You can view a live demo of the project [SkySymphony](https://skysymphony.netlify.app/).

## Features

- Fetch weather data for any city
- Display temperature, weather condition, humidity, and wind speed
- Responsive and clean UI design
- Automatically displays weather for London on page load

## Technologies Used

- React (for building the UI)
- Vite (for fast development environment)
- JavaScript/JSX (for logic and structure)
- Axios (for fetching weather data from OpenWeatherMap API)
- CSS (for styling)

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure that **Node.js** and **npm** are installed on your machine. If not, you can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jiteshiyu/SkySymphony.git
   cd SkySymphony
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## How It Works

The SkySymphony Weather App uses the OpenWeatherMap API to fetch and display real-time weather data for any city.

1. **Fetching Weather Data:** The app uses Axios to send a GET request to the OpenWeatherMap API, retrieving data such as temperature, humidity, wind speed, and weather conditions.
2. **Search Functionality:** Users can type in the name of a city in the input box and click the "Get Weather" button to retrieve the weather information for that location.
3. **Displaying Data:** The app shows the temperature in Celsius, the weather description (e.g., clear sky), the humidity percentage, and the wind speed in meters per second.
4. **Default Weather:** On page load, the weather for London is automatically fetched and displayed.

## Future Improvements

- Add a 5-day weather forecast.
- Implement geolocation to get weather data for the user’s current location.
- Improve the user interface with additional animations and graphics.
- Add error handling for invalid city names.

## Challenges and Learnings

- **API Integration:** Integrating the OpenWeatherMap API was a key challenge, particularly learning how to handle asynchronous data fetching and updating the UI in real time.
- **State Management:** Using React's `useState` and `useEffect` hooks effectively to manage and update weather data on user input was a great learning experience.
- **Responsiveness:** Designing a clean and responsive user interface helped in understanding CSS layouts and how to make them adaptable to different screen sizes.

## Support
If you liked the project, give it a 🌟 on the repo!

Connect with me:

[![Github](https://img.shields.io/badge/-FOLLOW-222222?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jiteshiyu)
[![LinkedIn](https://img.shields.io/badge/-CONNECT-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jiteshkumar9)
[![Jiteshiyu](https://img.shields.io/badge/-VISIT-F17829?style=for-the-badge&logo=react&logoColor=white)](https://jiteshiyu.netlify.app)


