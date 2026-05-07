import React from "react";

const SearchForm = ({
  searchData,
  handleChange,
  handleSearch,
}) => {
  return (
    <div className="search-box">

      <input
        type="text"
        name="from"
        placeholder="From"
        value={searchData.from}
        onChange={handleChange}
      />

      <input
        type="text"
        name="to"
        placeholder="To"
        value={searchData.to}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={searchData.date}
        onChange={handleChange}
      />

      <input
        type="number"
        name="passengers"
        placeholder="Passengers"
        min="1"
        value={searchData.passengers}
        onChange={handleChange}
      />

      <button onClick={handleSearch}>
        Search Flights
      </button>

    </div>
  );
};

export default SearchForm;