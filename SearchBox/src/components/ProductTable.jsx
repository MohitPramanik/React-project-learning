import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({products, filterText, inStockOnly}) {

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      // functionality for search box to filter products
        if(product.name.toLowerCase().indexOf( 
          filterText.toLowerCase()
        ) === -1
        ) {
          return
        }
        // functionality for check box to filter products
        if(inStockOnly && !product.stocked) {
          return;
        }

        /* ------- Putting content in the row to display ----------*/
        if(product.category !== lastCategory) {
          // for product category
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        // for the products
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    })

  return (
    <>
      <table className="text-center w-full bg-red-200">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
