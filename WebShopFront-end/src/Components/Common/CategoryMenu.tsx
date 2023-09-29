import React from 'react';
import './CategoryMenu.css'; // Импортируйте стили
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CableIcon from '@mui/icons-material/Cable';
import YardIcon from '@mui/icons-material/Yard';
import StrollerIcon from '@mui/icons-material/Stroller';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';


const CategoryMenu: React.FC = () => {
    // Здесь вы можете получить категории товаров из вашего API или хранилища
    const categoriesWithIcons = [
        { name: 'Clothes and shoes', icon: <CheckroomIcon />}, 
        { name: 'Electronics', icon: <CableIcon /> },
        { name: 'House and garden', icon: <YardIcon /> },
        { name: 'Childen\'s goods', icon: <StrollerIcon /> },
        { name: 'Food', icon: <RestaurantIcon /> },
        { name: 'Appliances', icon: <CoffeeMakerIcon /> }
        ]; // Пример данных

    return (
        <div className="category-menu">
            {categoriesWithIcons.map((category, index) => (
                <div key={index} className="category-item">
                    {category.icon} {/* Используйте иконку здесь */}
                    {category.name}
                </div>
            ))}
        </div>
    );
};

export default CategoryMenu;