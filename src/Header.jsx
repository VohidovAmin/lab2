import React, { useContext } from 'react'; 
import Button from './button';
import { ThemeContext } from './ThemeContext';


function Header({children}) {
    const [theme, setTheme] = useContext(ThemeContext); 
  console.log(theme)

const changeTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
}  
    return (
        <header>
              <Button onClick={changeTheme} label={"Toggle theme"}/>
            <h1>{children}</h1>
        </header>
    )
}

  export default Header