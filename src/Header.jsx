import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Button from './button';
import { ThemeContext } from './ThemeContext';
import Home from './Home';
import About from './About';
import Menu from './Menu';

function Header({ children }) {
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Button onClick={changeTheme} label={"Toggle theme"} />
      <h1>{children}</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Button onClick={toggleMenu} label={"Menu"} />
      </nav>
      {menuOpen && <Menu />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </header>
  );
}

export default Header;