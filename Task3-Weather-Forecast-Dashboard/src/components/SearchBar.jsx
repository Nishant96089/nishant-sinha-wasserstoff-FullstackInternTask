import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  // Handles form submission, triggers search, and clears the input
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      {/* Input field for entering the city name */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {/* Submit button for triggering the search */}
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
