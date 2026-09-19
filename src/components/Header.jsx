import { Search, User } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <h2 className="logo">DEV@Deakin</h2>

      <nav>
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">Videos</a>
        <a href="#">About</a>
      </nav>

      <div className="icons">
        <Search size={20} />
        <User size={20} />
      </div>

    </header>
  );
}

export default Header;