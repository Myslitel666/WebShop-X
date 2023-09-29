import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

const PopularProducts: React.FC = () => {
    // Здесь можно добавить логику для получения и отображения популярных товаров
    // Просто создайте массив популярных товаров и отобразите их в этом компоненте

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Популярные товары</Typography>
            {/* Вставьте сюда список популярных товаров */}
            <Grid container spacing={2}>
                {/* Пример одного товара */}
                <Grid item xs={4}>
                    <Box>
                        {/* Информация о товаре */}
                        <Typography variant="subtitle1">Название товара</Typography>
                        <Typography variant="body2">Цена: $10</Typography>
                    </Box>
                </Grid>
                {/* Добавьте еще товаров по аналогии */}
            </Grid>
        </Paper>
    );
};

export default PopularProducts;