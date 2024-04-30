import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lab1 from "./lab1"; 
import Lab2 from "./lab2";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import Lab5 from "./lab5";
import Lab6 from "./lab6";
import Lab7 from "./lab7";
import { getFeedback } from './api'; 

function Content() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const data = await getFeedback();
            if(Array.isArray(data)) {
                setFeedback(data);
            }
        };

        fetchFeedback();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFeedback = event.target.elements.feedback.value;
        const newFeedbackItem = { id: feedback.length + 1, text: newFeedback };
        setFeedback([...feedback, newFeedbackItem]);
        event.target.reset();
    };

    return (
        <div>
            <h2>Отзывы:</h2>
            <ul>
                {feedback.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <div>
                <h3>Оставьте ваш отзыв:</h3>
                <form onSubmit={handleSubmit}>
                    <textarea name="feedback" placeholder="Введите ваш отзыв"></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <Routes>
                <Route path="/lab1" element={<Lab1 />} />
                <Route path="/lab2" element={<Lab2 />} />
                <Route path="/lab3" element={<Lab3 />} />
                <Route path="/lab4" element={<Lab4 />} />
                <Route path="/lab5" element={<Lab5 />} />
                <Route path="/lab6" element={<Lab6 />} />
                <Route path="/lab7" element={<Lab7 />} />
            </Routes>
        </div>
    );
}

export default Content;