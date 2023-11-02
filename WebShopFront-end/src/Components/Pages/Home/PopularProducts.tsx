﻿import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Grid, Box, } from '@mui/material';
import './PopularProducts.css'; // Импортируйте стили
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import MyButton from '../../Common/MyButton'
import MyBox from '../../Common/MyBox';

const PopularProducts: React.FC = () => {
    const [popularProducts, setPopularProducts] = useState<{
        productId: number; productName: string;
        price: number; imageUrl: string
    }[]>([]);

    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const handleMouseEnter = (productId: number) => {
        setHoveredProduct(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;
    const PrimaryDarkColor = theme.palette.primary.dark;

    const apiUrl = process.env.REACT_APP_API_URL as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/home/popular-products`);
                setPopularProducts(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз после монтирования компонента

    return (
        <Paper elevation={3} sx={{ paddingLeft: '20px', paddingTop: '13px', paddingRight: '20px'}}>
            <Typography fontWeight="bold" variant="h5">Popular Products</Typography>
            <Grid container spacing={2} sx={{
                paddingTop: '13px',
                paddingBottom: '27px'
                }}>
                {popularProducts.map((product) => (
                    <Grid item xs={2} md={2} key={product.productId}>
                        <MyBox
                            onMouseEnter={() => handleMouseEnter(product.productId)}
                            onMouseLeave={handleMouseLeave}
                            sx={{
                                border: `1px solid ${hoveredProduct === product.productId ? PrimaryDarkColor : PrimaryMainColor}`,
                                borderRadius: '10px',
                                padding: '10px',
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                            className="product-box"
                        >
                            {/* Фотография товара */}
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginTop: '5px'
                                }}
                            />
                            {/* Информация о товаре */}
                            <Typography
                                fontWeight="bold"
                                variant="h5"
                                color="primary"
                                sx={{
                                    marginTop: '7px',
                                    transition: 'color 1s ease'
                                }}
                                >
                                {product.price} ₽
                            </Typography>
                            <Typography
                                className="product-name"
                                variant="subtitle1">
                                {product.productName}
                            </Typography>
                            <MyButton
                                variant="contained"
                                color="primary"
                                sx={{ marginBottom: '5px', }}>
                                Add to Cart
                            </MyButton>
                        </MyBox>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PopularProducts;
