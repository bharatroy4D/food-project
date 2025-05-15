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
        <div className="max-w-5xl mx-auto px-4 py-20 my-10 bg-white rounded-2xl border border-gray-200 shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={card?.img}
                        alt={card?.category}
                        className="w-full h-72 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                    />
                    {card?.label && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs rounded-full shadow">
                            {card.label}
                        </span>
                    )}
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 space-y-5 px-2">
                    <h2 className="text-3xl font-bold text-gray-800">{card?.category}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {card?.des} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, facilis. Lorem ipsum dolor sit amet consectetur.
                    </p>

                    {/* Price Info */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <p className="text-lg text-gray-400 line-through">৳ {card?.oldPrice}</p>
                            <p className="text-xl text-green-600 font-semibold">৳ {card?.newPrice || card?.oldPrice}</p>
                        </div>
                        <div className="flex items-center gap-10 text-sm">
                            <p className="font-medium text-orange-500">Discount: {card?.discount}</p>
                            <p className="text-red-500 font-medium">{card?.label || "Limited Offer"}</p>
                        </div>
                    </div>

                    {/* Extras */}
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <p>⭐ Rating: <span className="text-yellow-500 font-semibold">{card?.rating || "4.5"}</span></p>
                        <p>🧺 Stock: <span className="text-green-600 font-semibold">{card?.stock || "Available"}</span></p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md border hover:bg-gray-200 transition"
                        >
                            ⬅ Go Back
                        </button>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition font-medium">
                            🛒 Add to Cart
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
