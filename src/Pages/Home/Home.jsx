import React from 'react';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar'
import LeftSell from './LeftSell/LeftSell';
import RightSell from './RightSell/RightSell';
import NewsLatter from '../../Components/NewsLatter/NewsLatter';
import ExtraFoods from './ExtraFoods/ExtraFoods';
// import NewsLatter from '../../Components/NewsLatter/NewsLatter';

const Home = () => {
    return (
        <div className='container px-5 lg:px-10 mx-auto'>
            {/* banner section */}
            <div className=' flex mb-10  gap-7 '>
                <LeftBar></LeftBar>
                <RightBar></RightBar>
            </div>
            {/* best selling section */}
            <div className=' flex mb-10  gap-7'>
                <LeftSell></LeftSell>
                <RightSell></RightSell>
            </div>
            <ExtraFoods></ExtraFoods>
            {/* <NewsLatter></NewsLatter> */}
        </div>
    );
};

export default Home;