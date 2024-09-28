import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Display from "./components/Display.jsx";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather("London");
  }, []);

  const getWeather = async (city) => {
    setLoading(true);

    try {
      const apiKey = "45cfd3d48ad2971978f8ee0645501f5a";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (response.data) {
        setWeatherData(response.data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setWeatherData(null);
      console.log("Error fetching the weather data", err);
    }
  };

  return (
    <div className="app">
      <h1 className="app-heading">SkySymphony</h1>
      <Search getWeather={getWeather} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>{weatherData && <Display data={weatherData} />}</div>
      )}
    </div>
  );
}
