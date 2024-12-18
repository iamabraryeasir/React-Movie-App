import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="max-w-[1140px] mx-auto flex items-center justify-between py-6">
      <Link
        to="/"
        className="text-white flex items-center gap-2 text-xl font-semibold md:text-3xl"
      >
        <img src="/app_logo.png" alt="Page Logo" className="w-8 md:w-12" />
        React Movie App
      </Link>

      <ul className="text-white flex items-center justify-center gap-3 md:gap-10 text-lg md:text-xl">
        <li className="border-b-2 border-transparent hover:border-indigo-500 transition-all duration-100">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-transparent hover:border-indigo-500 transition-all duration-100">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
