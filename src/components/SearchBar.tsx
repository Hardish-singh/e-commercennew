'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import products from '../../lib/Products';

interface Product {
  id: number;
  name: string;
  collection: string;
  price: string;
  description: string;
  img: string;
  category?: string; // Add category if needed
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Combine women and men products
  const allProducts = useMemo(() => {
    return [
      ...(products.women?.map(p => ({ ...p, category: 'women' })) || []),
      ...(products.men?.map(p => ({ ...p, category: 'men' })) || [])
    ];
  }, []);

  // Improved debounce function
  const debounce = useCallback((func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(), delay);
    };
  }, []);

  const handleSearch = useCallback(debounce(() => {
    setIsSearching(false);
  }, 300), []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.collection.toLowerCase().includes(query) 
    );
    //   product.description.toLowerCase().includes(query)
  }, [searchQuery, allProducts]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto w-full search-container">
      {/* Search Input */}
      <div className="relative group">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearching(true);
            handleSearch();
            setShowResults(true);
          }}
          className=" text-black w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-[#8FC028] focus:ring-2 focus:ring-[#8FC028]/50 transition-all duration-300 bg-white shadow-sm"
        />
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {searchQuery ? (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowResults(false);
              }}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          ) : (
            <Search size={20} className="text-gray-400" />
          )}
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl max-h-[60vh] overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-gray-500">Searching...</div>
          ) : filteredProducts.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <a
                  key={`${product.category}-${product.id}`}
                  href={`/products/${product.id}`}
                  className="flex items-center p-4 hover:bg-gray-50 transition-colors group"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-[#8FC028] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.collection}</p>
                    {/* <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {product.description}
                    </p> */}
                    <p className="text-[#8FC028] font-semibold mt-1">
                      {product.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-4 text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;