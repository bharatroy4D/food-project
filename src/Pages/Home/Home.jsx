import React, { useState, useEffect } from 'react';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';
import LeftSell from './LeftSell/LeftSell';
import RightSell from './RightSell/RightSell';
import NewsLatter from '../../Components/NewsLatter/NewsLatter';
import ExtraFoods from './ExtraFoods/ExtraFoods';

const SimpleLoader = () => (
    <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-2">
            <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></span>
            <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-300"></span>
            <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></span>
        </div>
        <p className="mt-4 text-gray-700 font-medium">Loading ...</p>
    </div>
);

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-95 z-50">
                <SimpleLoader />
            </div>
        );
    }

    return (
        <div className="mx-auto">
            {/* banner section */}
            <div className="container flex flex-col lg:flex-row mb-10 gap-7 px-4 lg:px-10 mx-auto">
                <LeftBar />
                <RightBar />
            </div>
            {/* best selling section */}
            <div className="container mx-auto flex mb-10 px-5 lg:px-10 gap-7">
                <LeftSell />
                <RightSell />
            </div>
            <ExtraFoods />
            <NewsLatter />
        </div>
    );
};

export default Home;
