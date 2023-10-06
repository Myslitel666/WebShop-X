import React, { useState } from 'react';

//MyComponents Import
import Logo from '../Header/Logo';
import ShopName from './ShopName';

//MUI Import
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <ShopName />
                <div style={{ flexGrow: 1 }}></div>
                <div style={{
                    display: 'flex', alignItems: 'center',
                    marginRight: '10px'
                }}>
                    <InputBase
                        placeholder={"Search in the WebShop X..."}
                        sx={{
                            width: '300px', backgroundColor: '#F3F3F3',
                            color: "#212121", paddingLeft: '10px',
                            marginRight: '10px'
                        }}
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
                <Button variant="outlined" color="primary"
                    style={{
                        marginRight: '10px',
                        borderWidth: '2px'
                    }}>
                    Sign in
                </Button>
                <Button variant="outlined" color="primary"
                    style={{
                        marginRight: '-12px',
                        borderWidth: '2px'
                    }}>
                    Sign up
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;