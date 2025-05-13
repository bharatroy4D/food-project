import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
// import NewsLatter from '../Components/NewsLatter/NewsLatter';

const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <NewsLatter></NewsLatter> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;