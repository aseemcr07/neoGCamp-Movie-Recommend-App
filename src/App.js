import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Drama: [
    { name: "Zindagi Na Milegi Dobara", rating: "4/5" },
    { name: "Before Sunrise", rating: "4/5" },
    { name: "The Perks of Being a Wallflower", rating: "3.5/5" }
  ],
  Action: [
    { name: "The Dark Knight Trilogy", rating: "4.5/5" },
    { name: "Man of Steel", rating: "4/5" },
    { name: "Spider-Man series(Sam Raimi)", rating: "4/5" }
  ],
  Comedy: [
    { name: "Bheja Fry", rating: "4/5" },
    { name: "Hera Pheri", rating: "3.5/5" },
    { name: "Chup Chup Ke", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎬 goodCinema</h1>
      <p className="header-description">
        Here is my favourite cinema.
        <br /> Select a genre to know more.
      </p>
      <div className="buttons">
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul className="movie-list">
          {movieDB[selectedGenre].map((movie) => (
            <li key={movie.name} className="list-item">
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
