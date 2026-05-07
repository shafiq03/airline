import React from "react";
import { Link } from "react-router-dom";
import "../styles/FlightCard.css";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">

      {/* Airline Logo */}
      <img
        src={flight.image}
        alt={flight.airline}
        className="flight-image"
      />

      {/* Flight Details */}
      <div className="flight-details">
        <h2>{flight.airline}</h2>

        <p>
          <strong>From:</strong> {flight.from}
        </p>

        <p>
          <strong>To:</strong> {flight.to}
        </p>

        <p>
          <strong>Departure:</strong> {flight.departure}
        </p>

        <p>
          <strong>Arrival:</strong> {flight.arrival}
        </p>

        <p className="price">₹ {flight.price}</p>

        <p className="seats">
          Available Seats: {flight.seats}
        </p>

        {/* Book Button */}
        <Link to={`/flight/${flight.id}`}>
          <button>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;