import React from 'react';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar'
import LeftSell from './LeftSell/LeftSell';
import RightSell from './RightSell/RightSell';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className=' flex mb-10  gap-10 md:w-[70%]  lg:w-[80%] xl:w-[90%] mx-auto'>
                <LeftBar></LeftBar>
                <RightBar></RightBar>
            </div>
            {/* best selling section */}
            <div className=' flex mb-10  gap-10 md:w-[70%]  lg:w-[80%] xl:w-[90%] mx-auto'>
                <LeftSell></LeftSell>
                <RightSell></RightSell>
            </div>
          
        </div>
    );
};

export default Home;