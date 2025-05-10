import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import NewsLatter from '../Components/NewsLatter/NewsLatter';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <NewsLatter></NewsLatter>
            <Footer></Footer>
        </div>
    );
};

export default Root;