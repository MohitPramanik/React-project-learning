import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <div className="flex flex-col justify-center w-full py-3 bg-rose-100">
      <div className="text-center">
        <input
          type="search"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
          className="border border-black ps-2 outline-none rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <input 
        type="checkbox" 
        checked={inStockOnly} 
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <p className="ps-3">Only show products in stock</p>
      </div>
    </div>
  );
}

export default SearchBar;
