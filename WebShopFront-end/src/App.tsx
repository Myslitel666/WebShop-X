import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './Components/Pages/Home/Home'; // ������������ ��������� ������� ��������

const theme = createTheme({
    typography: {
        fontFamily: 'Merienda, cursive' // Замените 'Cinzel' на ваш шрифт
    },
    palette: {
        mode: 'dark', // ������������� ������ �����
        primary: {
            main: '#e53935', // �������� ���� ������ �����,
            dark: '#8e24aa',
            contrastText: '#fff'
        },
        secondary: {
            main: '#9c27b0', // �������� ���� ������ �����
            dark: '#4a148c',
            contrastText: '#fff'
        },

        // �������� ������ ����� � ��������� �� �������
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* ������� ��� ������� �������� */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;