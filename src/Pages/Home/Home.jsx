import React from 'react';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';

const Home = () => {
    return (
        <div>
            <div className='w-full md:w-[70%]  lg:w-[80%] xl:w-[90%] mx-auto'>
                <LeftBar></LeftBar>
            </div>
        </div>
    );
};

export default Home;