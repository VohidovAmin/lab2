import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lab1 from "./lab1"; 
import Lab2 from "./lab2";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import Lab5 from "./lab5";
import Lab6 from "./lab6";
import Lab7 from "./lab7";  

function Content() {
    return (
        <Routes>
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/lab5" element={<Lab5 />} />
            <Route path="/lab6" element={<Lab6 />} />
            <Route path="/lab7" element={<Lab7 />} />
        </Routes>
    );
}

export default Content;