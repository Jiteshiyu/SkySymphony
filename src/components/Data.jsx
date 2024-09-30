export default function Data({ data }) {
  const iconCode = data?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div>
      <p className="temp">{data?.main?.temp}°C</p>
      <div className="cloud-info">
        <img
          src={iconUrl}
          alt={data?.weather[0]?.description}
          className="cloud-icon"
        />
        <span className="cloud-data">{data?.weather[0]?.description}</span>
      </div>
      <div className="weather-info">
        <div className="humidity">
          <span>{data?.main?.humidity}% </span>
          <span>Humidity</span>
        </div>
        <div className="mid-line"></div>
        <div className="wind-speed">
          <span>{data?.wind?.speed} m/s </span>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
}
