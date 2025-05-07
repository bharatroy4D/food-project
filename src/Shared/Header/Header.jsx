import React from 'react';
import Top from '../../Components/top/Top';
import Middle from '../../Components/Middle/Middle';
import Navbar from '../../Components/Navbar/Navbar';
import SecondMillde from '../../Components/SecondMiddle/SecondMillde';
import Home from '../../Pages/Home/Home';

const Header = () => {
    return (
        <div>
            <Top></Top>
            <Middle></Middle>
            <SecondMillde></SecondMillde>
            <Navbar></Navbar>
        
        
        </div>
    );
};

export default Header;