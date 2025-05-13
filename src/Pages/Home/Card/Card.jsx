import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Card = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(card => String(card.id) === id);
                setCard(found);
            });
    }, [id]);

    if (!card) {
        return <div className="p-4 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Image Left */}
                <div className="w-full md:w-1/2">
                    <img
                        src={card.img}
                        alt={card.category}
                        className="w-full h-72 object-cover rounded-md transform hover:scale-110 hover:duration-1000"
                    />
                </div>

                {/* Text Right */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{card.category}</h2>
                    <p className="text-gray-600">{card.des} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nemo?</p>

                    <div className="space-y-1">
                        <div className='flex items-center gap-3'>
                            <p className="text-lg text-gray-400 font-semibold line-through ">
                                ৳ {card.oldPrice}
                            </p>
                            <p className="text-lg text-green-600 font-semibold">
                                ৳ {card.oldPrice}
                            </p>
                        </div>
                        <div className='flex items-center gap-20'>
                            <p className='font-semibold'>Discount: {card.discount}</p>
                            <p className='text-gray-500'>{card.label}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Go back
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
