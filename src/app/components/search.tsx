import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  // Example product list
  const products = ['Product 1', 'Product 2', 'Product 3', 'Bandage', 'Product 5'];

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredProducts([]);
      return;
    }

    // Filter products based on name
    const results = products.filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const toggleSearchInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="relative">
      {/* Search Icon Trigger */}
      <button
        className="text-xs flex"
        onClick={toggleSearchInput}
      >
        <CiSearch className="text-4xl" />
      </button>

      {/* Search Input Field */}
      {showInput && (
        <div className="absolute top-12 left-0 w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-80 h-10 px-4 rounded-md border"
            onKeyUp={handleSearch}
          />
        </div>
      )}

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg max-h-60 overflow-y-auto">
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index} className="p-2 hover:bg-gray-200">
                {product}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
