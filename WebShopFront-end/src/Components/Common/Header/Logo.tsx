import React, { useState } from 'react';
import '././Logo.css'; // Импортируйте стили

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={isHovered ? '/images/store-hover.png' : '/images/store-x.png'}
                alt="Store Icon"
                width="48"
                height="48"
                style={{
                    marginRight: '10px',
                    cursor: 'pointer',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {/* Изображение магазина */}
        </div>
    );
};

export default Logo;