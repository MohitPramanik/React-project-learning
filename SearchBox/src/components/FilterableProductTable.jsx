import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable() {

  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);


  const products = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Pasionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
]

  return (
    <div className='w-[400px] border-4 border-black mt-7'>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly}
        />
    </div>
  )
}

export default FilterableProductTable
