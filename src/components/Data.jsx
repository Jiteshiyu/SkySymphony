export default function Data({ data }) {
  return (
    <div>
      <p className="temp">{data?.main?.temp}°C</p>
      <p className="cloud-info">{data?.weather[0]?.description}</p>
      <div className="other-info">
        <div className="humidity">
          <span>{data?.main?.humidity}% </span>
          <span>Humidity</span>
        </div>
        <div className="wind-speed">
          <span>{data?.wind?.speed} m/s </span>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
}
