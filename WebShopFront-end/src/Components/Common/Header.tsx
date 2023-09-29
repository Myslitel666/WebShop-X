import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img src="/images/store.ico" alt="Store Icon" width="48" height="48"
                    style={{ marginRight: '10px' }}
                /> {/* Изображение магазина */}
                <Typography variant="h6">WebShop X</Typography>
                <div style={{ flexGrow: 1 }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <InputBase
                        placeholder="Search in the WebShop X..."
                        sx={{ width: '300px', backgroundColor: '#F3F3F3', paddingLeft: '10px', marginRight: '10px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SearchIcon />}
                        style={{ marginRight: '180px' }}
                    >
                        Search
                    </Button>
                </div>
                <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                    Sign in
                </Button>
                <Button variant="contained" color="secondary" style={{ marginRight: '-12px' }}>
                    Sign up
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;