import React from 'react';
import Header from '../../Common/Header';
import PopularProducts from '../Home/PopularProducts';
import CategoryMenu from '../../Common/CategoryMenu';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <CategoryMenu />
            {/* Вставьте другие компоненты и содержимое страницы здесь */}
            <PopularProducts />
        </div>
    );
};

export default Home;





