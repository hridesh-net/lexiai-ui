import React, { useState } from 'react';

const SearchInterface: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', query);
    };

    return (
        <div className="search-interface p-4">
            <form onSubmit={handleSearch} className="flex">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for documents..."
                    className="flex-grow p-2 border border-gray-300 rounded-l-md"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchInterface;