import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home'; // Импортируйте компонент главной страницы

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Маршрут для главной страницы */}
            </Routes>
        </Router>
    );
}

export default App;
