import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MyComponents Import
import { iconMappings } from './IconMappings';

//CSS Import
import './CategoryMenu.css';

const renderIcon = (iconName: string) => {
    return iconMappings[iconName] || null;
};

const CategoryMenu: React.FC = () => {
    const [data, setData] = useState<{ categoryName: string; iconUrl: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{
                    categoryName: string; iconUrl: string
                }[]>('https://localhost:7275/api/home/categories');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(data)

    return (
        <div className="category-menu">
            {data.map((category, index) => (
                <div key={index} className="category-item">
                    {renderIcon(category.iconUrl) || <div>No Icon </div>}
                    {category.categoryName}
                </div>
            ))}
        </div>
    );
};

export default CategoryMenu;