import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredProducts = products
        .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
            sort === "low" ? a.price - b.price :
                sort === "high" ? b.price - a.price : 0
        );

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            </div>
        );

    return (
        <div className="p-6 max-w-7xl mx-auto">

            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                Product Store
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <SearchBar search={search} setSearch={setSearch} />

                <select
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductListPage
