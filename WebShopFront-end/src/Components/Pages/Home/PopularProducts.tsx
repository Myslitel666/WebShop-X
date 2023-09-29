import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import './PopularProducts.css'; // Импортируйте стили
import { Button } from '@mui/material';

const PopularProducts: React.FC = () => {
    // Пример массива популярных товаров с ссылками на изображения из базы данных
    const popularProducts = [
        { id: 1, name: 'Black leather bracelet with spikes', price: 350, image: '/images/products/Black leather bracelet with spikes.webp' },
        { id: 2, name: 'Guitar pendant with wings', price: 1708, image: '/images/products/Guitar pendant with wings.webp' },
        { id: 3, name: 'Backpack', price: 4094, image: '/images/products/Backpack.webp' },
        { id: 4, name: 'Laces LUX 40cm black, red “dot” 6mm SHORT (1 pair) for shoes, sneakers, sneakers 166,6P', price: 152, image: '/images/products/Laces LUX 40cm black, red “dot” 6mm SHORT (1 pair) for shoes, sneakers, sneakers 166,6P.webp' },
        { id: 5, name: 'REEBOK Nike Sneakers', price: 7382, image: '/images/products/REEBOK Nike Sneakers.webp' },
        { id: 6, name: 'Gaming Wired Headphones A4Tech Bloody G300', price: 2148, image: '/images/products/Gaming Wired Headphones A4Tech Bloody G300.webp' },
    ];

    return (
        <Paper elevation={3} sx={{ paddingLeft: '20px', paddingTop: '10px', paddingRight: '20px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.1)' }}>
            <Typography fontWeight="bold" variant="h5" color="red">Popular Products</Typography>
            <Grid container spacing={2} sx={{ paddingTop: '10px', paddingBottom: '20px' }}>
                {popularProducts.map((product) => (
                    <Grid item xs={2} md={2} key={product.id}>
                        <Box sx={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                            {/* Фотография товара */}
                            <img 
                                src={product.image}
                                alt={product.name}
                                style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px', marginTop: '5px' }}
                            />
                            {/* Информация о товаре */}

                                <Typography fontWeight="bold" variant="h5" color="red" sx={{ marginTop: '7px' }}>{product.price} ₽</Typography>
                                <Typography className="product-name" variant="subtitle1">{product.name}</Typography>

                            <Button variant="contained" color="primary" sx={{ marginBottom: '5px' }}>Add to Cart</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PopularProducts;