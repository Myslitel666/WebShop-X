import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './Components/Pages/Home/Home'; // Импортируем компонент для домашней страницы

// Создаем тему для Material-UI
const theme = createTheme({
    typography: {
        fontFamily: 'Merienda, cursive'
    },
    palette: {
        mode: 'dark', // Устанавливаем темный режим
        primary: {
            main: '#e53935',
            dark: '#7c4dff',
            contrastText: '#fff' // Текст в контрастном цвете для второстепенного цвета
        },
        secondary: {
            main: '#2196f3',
            dark: '#2196f3',
            contrastText: '#fff' // Текст в контрастном цвете для второстепенного цвета
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Обнуляем стандартные стили браузера */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Устанавливаем маршрут для компонента Home на главной странице */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;