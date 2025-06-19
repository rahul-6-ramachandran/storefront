import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import type { Products } from "../../types.common";
import Pagination from "../pagination/Pagination";

export default function ProductList (){
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 10;
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/products?page=${currentPage}&limit=${productsPerPage}`
          );
          const data = await res.json();
  
          setProducts(data.items); // Adjust keys based on your backend response
          setTotalPages(Math.ceil(data.total / productsPerPage));
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, [currentPage]);
    
    return(<>           
           <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 pt-15 pb-15 md:pb-10 md:pt-11  p-10 my-3">
                <Product/>
                <Product/>
                <Product/>
    
            </div>
            <div>
                <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
            </div>
           <div className="fixed bottom-10 right-10 z-50"> 
                  <Cart/>
                  </div>
           </div>

    </>)
}