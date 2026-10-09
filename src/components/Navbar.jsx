
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        DEV@Deakin
      </Link>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>

      <div className="navbar-actions">
        <Link to="/post" className="nav-post">
          Post
        </Link>

        <Link to="/login" className="nav-login">
          Login
        </Link>

        <Link to="/signup" className="nav-signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;