import { useEffect, useState } from "react";
import Cart from "../cart/Cart";

import type { Products } from "../../types.common";
import Pagination from "../pagination/Pagination";
import { getAllProducts } from "../../actions/Product/ProductActions";
import SingleProduct from "../product/SingleProduct";

export default function ProductList (){
    const [products, setProducts] = useState<Products[] | null >([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 3;
  
    useEffect(() => {
     
  
      fetchProducts();
    }, [currentPage]);

    const fetchProducts = async () => {
        try {
            const params = {
                page : currentPage.toString(),
                limit : productsPerPage.toString()
            }
            getAllProducts(params).then((res)=>{
                
            setProducts(res);
            setTotalPages(Math.ceil(res?.length / productsPerPage));
            })
  
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
    return(<>           
           <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 pt-15 pb-15 md:pb-10 md:pt-11  p-10 my-3">
            {products?.map((product) => (
          <SingleProduct key={product?._id} product={product} />
        ))}
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