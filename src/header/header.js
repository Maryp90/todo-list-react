import React, { useState } from "react";
import './header.css';
import {ReactComponent as Moon} from './header_Images/icon-moon.svg';
import {ReactComponent as Sun} from './header_Images/icon-sun.svg';

function ToggleMode () {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`ToggleMode ${isDarkMode ? 'dark' : 'light'}`}>
            <button className="toggle" onClick={toggleTheme}>
                {isDarkMode ? <Sun /> : <Moon/>}
            </button>
        </div>
    )
}

export default function Header () {
    return(
        <div className="header row center-center">
            <h1>My To Do List</h1>
            <ToggleMode />
            
        </div>
    )
}
