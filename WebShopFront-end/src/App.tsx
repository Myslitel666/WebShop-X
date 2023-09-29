import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './Components/Pages/Home/Home'; // Импортируйте компонент главной страницы

const theme = createTheme({
    palette: {
        mode: 'dark', // Устанавливаем темный режим
        primary: {
            main: '#90caf9', // Основной цвет вашего сайта
        },
        // Добавьте другие цвета и настройки по желанию
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Маршрут для главной страницы */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;