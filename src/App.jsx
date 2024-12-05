import { Routes, Route } from "react-router-dom";
import { Favorites, Home } from "./pages/index";
import { NavBar } from "./components/index";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <main className="w-full min-h-screen bg-[#0e0e0e] px-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
