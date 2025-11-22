import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded shadow-md text-center">
            <img src={product.image} alt="" className="h-40 mx-auto" />
            <h3 className="font-bold mt-2">{product.title.slice(0, 30)}...</h3>
            <p className="text-green-600 font-semibold">₹ {product.price}</p>
            <Link
                to={`/product/${product.id}`}
                className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded"
            >
                View Details
            </Link>
        </div>
    )
}

export default ProductCard
