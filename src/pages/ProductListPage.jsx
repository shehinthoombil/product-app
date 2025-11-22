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

    // sorting product by price through filter
    const filteredProducts = products
        .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
            sort === "low" ? a.price - b.price :
                sort === "high" ? b.price - a.price : 0
        );

    if (loading) return <h2 className="text-center">Loading...</h2>;
    return (
        <div className="p-4">
            <SearchBar search={search} setSearch={setSearch} />

            <select
                className="p-2 border mb-4"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Sort Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductListPage
