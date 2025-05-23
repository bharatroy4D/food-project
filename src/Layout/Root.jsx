import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import TopScroll from '../Components/TopScroll/TopScroll';
// import NewsLatter from '../Components/NewsLatter/NewsLatter';

const Root = () => {
    return (
        <div>
            <TopScroll/>
            <Header></Header>
            {/* <NewsLatter></NewsLatter> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;