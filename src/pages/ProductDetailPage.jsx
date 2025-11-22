import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => setProduct(null));
    }, [id]);

    if (!product) return <h2 className="text-center">Product not found</h2>;
    return (
        <div className="p-4 max-w-xl mx-auto">
            <img src={product.image} className="mx-auto h-64" alt="" />
            <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
            <p className="text-green-600 font-bold text-lg">₹ {product.price}</p>
            <p className="italic">{product.category}</p>
            <p className="mt-4">{product.description}</p>

            <Link to="/" className="mt-4 inline-block bg-gray-600 text-white px-3 py-2 rounded">
                Back
            </Link>
        </div>
    )
}

export default ProductDetailPage
