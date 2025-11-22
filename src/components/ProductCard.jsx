import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
            <div className="h-40 flex justify-center items-center">
                <img src={product.image} alt="" className="h-full object-contain" />
            </div>
            <h3 className="font-semibold mt-3 text-gray-800 text-center line-clamp-2">{product.title.slice(0, 20)}...</h3>
            <p className="text-green-600 font-bold text-lg mt-2">₹ {product.price}</p>
            <Link
                to={`/product/${product.id}`}
                className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
            >
                View Details
            </Link>
        </div>
    )
}

export default ProductCard
