import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryMenu.css'; // Импортируйте стили

const CategoryMenu: React.FC = () => {
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<string[]>('https://localhost:7275/api/home/categories');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз после монтирования компонента

    return (
        <div className="category-menu">
            {data.map((category, index) => (
            <div key={index} className="category-item">
                {category} {/* Используйте иконку здесь */}
            </div>
        ))}
        </div>
    );
};

export default CategoryMenu;