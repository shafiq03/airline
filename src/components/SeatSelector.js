import React from "react";

const SeatSelector = ({
  seats,
  selectedSeats,
  handleSeatSelect,
}) => {
  return (
    <div className="seat-section">

      <h2>Select Seats</h2>

      <div className="seat-grid">

        {seats.map((seat) => (
          <div
            key={seat}
            className={
              selectedSeats.includes(seat)
                ? "seat selected"
                : "seat"
            }
            onClick={() =>
              handleSeatSelect(seat)
            }
          >
            {seat}
          </div>
        ))}

      </div>

    </div>
  );
};

export default SeatSelector;