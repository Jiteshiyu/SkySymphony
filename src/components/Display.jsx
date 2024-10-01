import Data from "./Data.jsx";

export default function Display({ data }) {

  // Function to get the current date
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
      {/* Display the location (city and country) */}
      <h2 className="place">
        {data?.name}, {data?.sys?.country}
      </h2>
      {/* Display the current date */}
      <p className="date">{getCurrentDate()}</p>
      {/* Render the Data component */}
      <Data data={data} />
    </div>
  );
}
