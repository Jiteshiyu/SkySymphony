import Data from "./Data.jsx";

export default function Display({ data }) {
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div>
      <h2 className="place">
        {data?.name}, {data?.sys?.country}
      </h2>
      <p className="date">{getCurrentDate()}</p>
      <Data data={data} />
    </div>
  );
}
