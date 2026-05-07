import React from "react";

const BookingCard = ({
  booking,
  cancelBooking,
}) => {
  return (
    <div className="booking-card">

      <h2>{booking.airline}</h2>

      <p>
        <strong>From:</strong> {booking.from}
      </p>

      <p>
        <strong>To:</strong> {booking.to}
      </p>

      <p>
        <strong>Passenger:</strong>{" "}
        {booking.name}
      </p>

      <p>
        <strong>Seats:</strong>{" "}
        {booking.seats.join(", ")}
      </p>

      <p>
        <strong>Total:</strong> ₹{" "}
        {booking.total}
      </p>

      <button
        onClick={() =>
          cancelBooking(booking.id)
        }
      >
        Cancel Booking
      </button>

    </div>
  );
};

export default BookingCard;