import { useState } from "react";

export default function Search({ getWeather }) {
  const [city, setCity] = useState("");

  const getWeatherData = (event) => {
    event.preventDefault();
    if (!city) return;
    getWeather(city);
    setCity("");
  };

  return (
    <form className="search-form" onSubmit={getWeatherData}>
      <input
        type="text"
        name="search"
        value={city}
        placeholder="Enter city name"
        className="search-box"
        onChange={(event) => setCity(event.target.value)}
      />
      <button className="submit-btn" type="submit">
        Search
      </button>
    </form>
  );
}
