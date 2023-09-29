import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './Components/Pages/Home/Home'; // ������������ ��������� ������� ��������

const theme = createTheme({
    palette: {
        mode: 'dark', // ������������� ������ �����
        primary: {
            main: '#90caf9', // �������� ���� ������ �����
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