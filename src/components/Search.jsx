import { useState } from "react";

export default function Search({ getWeather }) {
  // State to manage the city input
  const [city, setCity] = useState("");

  // Function to fetch weather data
  const getWeatherData = (event) => {
    event.preventDefault();
    if (!city) return;
    getWeather(city);
    setCity("");
  };

  return (
    <form className="search-form" onSubmit={getWeatherData}>
      {/* Input field for search */}
      <input
        type="text"
        name="search"
        value={city}
        placeholder="Enter city name"
        className="search-box"
        onChange={(event) => setCity(event.target.value)}
        // Update city state on input change
      />
      {/* Submit button */}
      <button className="submit-btn" type="submit">
        Search
      </button>
    </form>
  );
}
