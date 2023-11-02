﻿import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MyComponents Import
import { iconMappings } from './IconMappings';
import MyLink from '../MyLink';

//CSS Import
import './CategoryMenu.css';

const renderIcon = (iconName: string) => {
    return iconMappings[iconName] || null;
};

const apiUrl = process.env.REACT_APP_API_URL as string;

const CategoryMenu: React.FC = () => {
    const [data, setData] = useState<{ categoryName: string; iconUrl: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{
                    categoryName: string; iconUrl: string
                }[]>(`${apiUrl}/api/home/categories`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="category-menu">
            {data.map((category, index) => (
                <div key={index} className="category-item">
                    <MyLink>
                        {renderIcon(category.iconUrl) || <div>No Icon </div>}
                        {category.categoryName}
                    </MyLink>
                </div>
            ))}
        </div>
    );
};

export default CategoryMenu;