import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieCard } from "../components/index";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <>
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-[1140px] mx-auto py-8">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center text-white text-2xl">
        No Favorite Movies Yet
      </h2>
      <p className="text-center text-white">
        Start adding movies to your favorites and they will appear here.
      </p>
    </>
  );
}

export default Favorites;
