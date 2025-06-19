import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProductData } from "../../actions/Product/ProductActions";
import type { Products } from "../../types.common";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      setLoading(true);
      getSingleProductData(productId).then((res)=>{
        console.log(res)
        setProduct(res?.productDetails);  
      })
    } catch (error) {
      console.error("Failed to load product", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <span className="text-lg">Loading product...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-600">Product not found</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:flex md:gap-6">
      <img
        src={`${product.images[0]}?auto=format&fit=crop&w=800&q=80`}
        alt={product.name}
        className="w-full md:w-1/2 h-96 object-cover rounded"
      />
      <div className="mt-4 md:mt-0 md:w-1/2">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ₹ {product.price}
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
