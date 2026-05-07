import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import flightsData from "../data/flightsData";

import {
    addDoc,
    collection,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

import { useAuth } from "../context/AuthContext";

import "../styles/FlightDetails.css";

import SeatSelector from "../components/SeatSelector";

const FlightDetails = () => {

    const navigate = useNavigate();

    const { currentUser } = useAuth();

    // Get flight ID from URL
    const { id } = useParams();

    // Find selected flight
    const flight = flightsData.find(
        (item) => item.id === parseInt(id)
    );

    // Passenger Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        passengers: 1,
    });

    // Selected Seats
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Total Seats
    const seats = Array.from({ length: 24 }, (_, i) => i + 1);

    // Handle Form Input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Seat Selection
    const handleSeatSelect = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(
                selectedSeats.filter((item) => item !== seat)
            );
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    // Booking Confirmation
    const handleBooking = async () => {
        // Check Login
        if (!currentUser) {
            alert("Please login first!");
            navigate("/login");
            return;
        }

        // Validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone
        ) {
            alert("Please fill all details!");
            return;
        }

        if (selectedSeats.length === 0) {
            alert("Please select seats!");
            return;
        }

        try {
            // Save Booking
            await addDoc(collection(db, "bookings"), {
                userId: currentUser.uid,

                airline: flight.airline,
                from: flight.from,
                to: flight.to,

                name: formData.name,
                email: formData.email,
                phone: formData.phone,

                passengers: formData.passengers,

                seats: selectedSeats,

                total:
                    flight.price * formData.passengers,

                createdAt: new Date(),
            });

            alert("Booking Confirmed Successfully!");

            navigate("/my-bookings");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flight-details-page">

            {/* ===== Flight Information ===== */}
            <div className="flight-info">

                <img
                    src={flight.image}
                    alt={flight.airline}
                />

                <div className="flight-text">
                    <h1>{flight.airline}</h1>

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

                    <p>
                        <strong>Price:</strong> ₹ {flight.price}
                    </p>

                    <p>
                        <strong>Available Seats:</strong> {flight.seats}
                    </p>
                </div>
            </div>

            {/* ===== Passenger Form ===== */}
            <div className="booking-section">

                <div className="passenger-form">
                    <h2>Passenger Details</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="passengers"
                        min="1"
                        placeholder="Passenger Count"
                        onChange={handleChange}
                    />
                </div>

                {/* ===== Seat Selection ===== */}
                <SeatSelector
                    seats={seats}
                    selectedSeats={selectedSeats}
                    handleSeatSelect={handleSeatSelect}
                />

            </div>

            {/* ===== Booking Summary ===== */}
            <div className="booking-summary">

                <h2>Booking Summary</h2>

                <p>
                    <strong>Passenger:</strong> {formData.name || "Not Entered"}
                </p>

                <p>
                    <strong>Total Passengers:</strong>{" "}
                    {formData.passengers}
                </p>

                <p>
                    <strong>Selected Seats:</strong>{" "}
                    {selectedSeats.length > 0
                        ? selectedSeats.join(", ")
                        : "No Seats Selected"}
                </p>

                <p className="total-price">
                    Total Price: ₹{" "}
                    {flight.price * formData.passengers}
                </p>

                <button onClick={handleBooking}>
                    Confirm Booking
                </button>
            </div>

        </div>
    );
};

export default FlightDetails;