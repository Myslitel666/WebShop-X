import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Grid, Box, Link } from '@mui/material';
import { Button } from '@mui/material';
import './PopularProducts.css'; // Импортируйте стили

const PopularProducts: React.FC = () => {
    const [popularProducts, setPopularProducts] = useState<{ productId: number; productName: string; price: number; imageUrl: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7275/api/home/popular-products');
                setPopularProducts(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз после монтирования компонента

    return (
        <Paper elevation={3} sx={{ paddingLeft: '20px', paddingTop: '10px', paddingRight: '20px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.1)' }}>
            <Typography fontWeight="bold" variant="h5" color="">Popular Products</Typography>
            <Grid container spacing={2} sx={{ paddingTop: '10px', paddingBottom: '20px' }}>
                {popularProducts.map((product) => (
                    <Grid item xs={2} md={2} key={product.productId}>
                        <Box sx={{ border: '1px solid #e53935', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                            {/* Фотография товара */}
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px', marginTop: '5px', cursor: 'pointer' }}
                            />
                            {/* Информация о товаре */}
                            <Typography fontWeight="bold" variant="h5" color="#f44336" sx={{ marginTop: '7px' }}>{product.price} ₽</Typography>
                            <Typography className="product-name" variant="subtitle1" >
                                {product.productName}
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ marginBottom: '5px' }}>Add to Cart</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PopularProducts;
