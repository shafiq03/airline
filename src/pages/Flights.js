import React, { useState } from "react";
import flightsData from "../data/flightsData";
import FlightCard from "../components/FlightCard";
import "../styles/Flights.css";

const Flights = () => {
  // Store search input
  const [search, setSearch] = useState("");

  // Filter flights
  const filteredFlights = flightsData.filter((flight) =>
    flight.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flights-page">

      {/* ===== Heading ===== */}
      <div className="flights-header">
        <h1>Available Flights</h1>
        <p>Find your perfect flight and travel comfortably.</p>
      </div>

      {/* ===== Search Bar ===== */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ===== Flight Cards ===== */}
      <div className="flights-container">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <h2 className="no-flights">No Flights Found</h2>
        )}
      </div>

    </div>
  );
};

export default Flights;