import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/lab1">Лабораторная работа №1</Link></li>
                <li><Link to="/lab2">Лабораторная работа №2</Link></li>
                <li><Link to="/lab3">Лабораторная работа №3</Link></li>
                <li><Link to="/lab4">Лабораторная работа №4</Link></li>
                <li><Link to="/lab5">Лабораторная работа №5</Link></li>
                <li><Link to="/lab6">Лабораторная работа №6</Link></li>
                <li><Link to="/lab7">Лабораторная работа №7</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;