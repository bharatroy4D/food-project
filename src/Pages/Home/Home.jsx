import React from 'react';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar'
import LeftSell from './LeftSell/LeftSell';
import RightSell from './RightSell/RightSell';
import NewsLatter from '../../Components/NewsLatter/NewsLatter';

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
            <div className='gap-10 md:w-[70%]  lg:w-[80%] xl:w-[100%] mx-auto'>           
                <NewsLatter></NewsLatter>
            </div>
          
        </div>
    );
};

export default Home;