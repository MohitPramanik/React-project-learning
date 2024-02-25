import React from 'react'

function ProductCategoryRow({category}) {
  return (
    <>
      <tr className='bg-green-300'>
        <th colSpan={2}>
            {category}
        </th>
      </tr>
    </>
  )
}

export default ProductCategoryRow
