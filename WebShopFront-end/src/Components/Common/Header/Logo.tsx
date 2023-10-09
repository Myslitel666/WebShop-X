import React, { useState } from 'react';
import './Logo.css';
import { useColorMode } from '../../../ColorModeContext';

const Logo = () => {
    const { toggleColorMode } = useColorMode();
    const [isNeedChangeIcon, setIsNeedChangeIcon] = useState(false);
    const [isFirstImage, setIsFirstImage] = useState(true);

    //Наведение мыши на Object
    const handleMouseEnter = () => {
        toggleImages();
        setIsNeedChangeIcon(true);
    };

    //Курсор мыши покидает область изображения
    const handleMouseLeave = () => {
        if (isNeedChangeIcon) {
            toggleImages();
            setIsNeedChangeIcon(false);
        }
    };

    //Щелчок по изображению
    const handleThemeToggle = () => {
        toggleColorMode();
        setIsNeedChangeIcon(!isNeedChangeIcon);
    };

    //Смена изображения
    const toggleImages = () => {
        setIsFirstImage(prevState => !prevState);
        //setIsClicked(false);
    };

    return (
        <div
            className="nvdTREq3cVVVVVH"
            onClick={handleThemeToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer', marginRight: '10px' }}
        >
            <img
                src={isFirstImage ? '/images/store-x.png' : '/images/store-hover.png'}
                alt="Store Icon"
                className={!isFirstImage ? 'bonvogggc' : ''}
            />
            <img
                src={isFirstImage ? '/images/store-x.png' : '/images/store-hover.png'}
                alt="Store Icon"
                className={!isFirstImage ? '' : 'bonvogggc'}
            />
        </div>
    );
};

export default Logo;
