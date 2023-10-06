import React, { useState } from 'react';
import './Logo.css'; // Импортируйте стили

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer', marginRight: '10px' }}>
            <img
                src="/images/store-x.png"
                alt="Store Icon"
                className={isHovered ? 'hidden' : ''}
            />
            <img
                src="/images/store-hover.png"
                alt="Store Icon"
                className={isHovered ? '' : 'hidden'}
            />
        </div>
    );
};

export default Logo;
