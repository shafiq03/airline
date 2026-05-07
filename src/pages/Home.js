import React, { useState } from "react";
import "../styles/Home.css";
import SearchForm from "../components/SearchForm";

// Destination Images
const destinations = [
  {
    id: 1,
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    id: 2,
    name: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    id: 3,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52",
  },
  {
    id: 4,
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },
];

// Airlines Data
const airlines = [
  {
    id: 1,
    name: "Emirates",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
  },
  {
    id: 2,
    name: "Qatar Airways",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Qatar_Airways_Logo.svg",
  },
  {
    id: 3,
    name: "Air India",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
  },
  {
    id: 4,
    name: "Singapore Airlines",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/2560px-Singapore_Airlines_Logo_2.svg.png",
  },
];


const Home = () => {

  const [searchData, setSearchData] = React.useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    alert(
      `Searching flights from ${searchData.from} to ${searchData.to}`
    );
  };
  return (
    <>

      <div className="home">
        {/* ===== Hero Section ===== */}
        <section className="hero">
          <div className="hero-overlay">
            <h1>Book Your Dream Flight</h1>
            <p>
              Find the best flights at affordable prices and travel around the
              world.
            </p>

            {/* ===== Flight Search Form ===== */}
            <SearchForm
              searchData={searchData}
              handleChange={handleChange}
              handleSearch={handleSearch}
            />
          </div>
        </section>

        {/* ===== Popular Destinations ===== */}
        <section className="destinations">
          <h2>Popular Destinations</h2>

          <div className="destination-container">
            {destinations.map((place) => (
              <div className="destination-card" key={place.id}>
                <img src={place.image} alt={place.name} />
                <h3>{place.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Featured Airlines ===== */}
        <section className="airlines">
          <h2>Featured Airlines</h2>

          <div className="airline-container">
            {airlines.map((airline) => (
              <div className="airline-card" key={airline.id}>
                <img src={airline.image} alt={airline.name} />
                <h3>{airline.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;