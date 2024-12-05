import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorite(movie);
    }
  }

  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg"
        />

        <div className="w-full h-full absolute top-0 left-0 bg-black/70 text-white px-5 py-6 flex items-start justify-end flex-col opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
          <button
            className="absolute top-3 right-4 p-2 border border-white rounded-full text-xl z-10"
            onClick={onFavoriteClick}
          >
            {favorite ? "💖" : "🤍"}
          </button>
          <h3 className="font-semibold text-2xl">{movie.title}</h3>
          <p className="mt-1">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
