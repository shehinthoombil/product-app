import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        
        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}

export default SearchBar
