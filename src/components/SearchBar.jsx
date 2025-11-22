import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded w-full mb-4"
        />
    )
}

export default SearchBar
