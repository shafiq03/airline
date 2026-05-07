import React, { useEffect, useState } from "react";

import {
    collection,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

import { useAuth } from "../context/AuthContext";

import Loader from "../components/Loader";

import BookingCard from "../components/BookingCard";

import "../styles/Booking.css";

const MyBookings = () => {

    const [loading, setLoading] = useState(true);
    // Store Bookings
    const [bookings, setBookings] = useState([]);

    // Logged User
    const { currentUser } = useAuth();

    // Fetch Bookings
    const fetchBookings = async () => {
        try {
            setLoading(true);

            const querySnapshot = await getDocs(
                collection(db, "bookings")
            );

            const userBookings = querySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter(
                    (booking) =>
                        booking.userId === currentUser?.uid
                );

            setBookings(userBookings);

            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Load Data
    useEffect(() => {
        if (currentUser) {
            fetchBookings();
        }
    }, [currentUser]);

    if (loading) {
        return <Loader />;
    }

    // Cancel Booking
    const cancelBooking = async (id) => {
        try {
            await deleteDoc(doc(db, "bookings", id));

            alert("Booking Cancelled!");

            fetchBookings();

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bookings-page">

            <h1>My Bookings</h1>

            {bookings.length === 0 ? (
                <h2 className="no-booking">
                    No Bookings Found
                </h2>
            ) : (
                <div className="booking-container">

                    {bookings.map((booking) => (
                        <BookingCard
                            key={booking.id}
                            booking={booking}
                            cancelBooking={cancelBooking}
                        />
                    ))}

                </div>
            )}
        </div>
    );
};

export default MyBookings;