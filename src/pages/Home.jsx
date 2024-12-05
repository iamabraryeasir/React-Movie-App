import { ErrorMsg, Loading, MovieCard } from "../components/index";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  // handling search bar input
  const [searchQuery, setSearchQuery] = useState("");

  // movie array to contain all movies
  const [movies, setMovies] = useState([]);

  // for getting the error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect only runs when a component is rerender
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // calling the function for the api hit
    loadPopularMovies();
  }, []);

  // handling the search
  const handleSearch = async (e) => {
    e.preventDefault();

    // avoiding empty string
    if (!searchQuery.trim()) return;
    if (loading) return;

    // giving the loading effect
    setLoading(true);

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movie....");
    } finally {
      setLoading(false);
    }
    console.log(searchQuery);

    // clearing the search field
    setSearchQuery("");
  };

  // returning the component content
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="max-w-[1140px] w-full flex items-center mx-auto justify-center py-10 gap-3 md:gap-4"
      >
        <input
          type="text"
          className="bg-transparent border-2 border-gray-500 rounded-lg text-xl px-4 py-2 text-white w-full md:w-5/12"
          placeholder="Search for Movies.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg">
          <button
            type="submit"
            className="text-xl px-4 py-2 text-white rounded-lg border-2 border-transparent font-semibold"
          >
            Search
          </button>
        </div>
      </form>

      {/* Showing the Api Fetch Error */}
      {error && <ErrorMsg massage={error} />}

      {/* Showing the loading state */}

      {loading ? (
        <Loading />
      ) : (
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-[1140px] mx-auto py-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
