import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProductData } from "../../actions/Product/ProductActions";
import type { Products } from "../../types.common";
import ProductImages from "../product/productImages";
import { addNewProductToCart } from "../../actions/cart/CartActions";
import { useCart } from "../../store/cartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);
  const { fetchCartCount } = useCart();
  const fetchProduct = async (productId: string) => {
    try {
      setLoading(true);
      getSingleProductData(productId).then((res:any) => {
        console.log(res);
        setProduct(res?.productDetails);
      });
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
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = (id: string) => {
    setLoading(true);
    const payload = {
      productId: id,
      quantity: quantity,
    };
    addNewProductToCart(payload).then(() => {
      alert("Product Added to Cart Succesfully");
      fetchCartCount();
      setLoading(false);
    });
  };
  return (
    <>
      {loading ? (
        <div className="justify-center h-[80vh] items-center flex p-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="w-full mx-auto p-6 md:flex md:gap-6">
          <ProductImages images={product.images} />
          <div className="mt-4 md:mt-0 md:w-1/2 h-full items-start">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              {product.name}
            </h2>
            <p className="text-2xl font-semibold text-blue-600 mb-6">
              ₹ {product.price}
            </p>

            <div className="flex mb-4 max-w-1/5 justify-start items-start">
              <button
                onClick={decrement}
                className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-l"
              >
                –
              </button>
              <span className="px-4 py-1 border-t border-b text-lg">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-r"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product?._id)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <div className="py-4">
              <h5 className="text-lg font-medium">Description</h5>
              <p className="text-gray-600 dark:text-gray-800 mb-4">
                {product.description}
              </p>
            </div>

            <div className="py-4">
              <h5 className="text-lg font-medium">Specification</h5>
              <p className="text-gray-600 dark:text-gray-800 mb-2">Brand:</p>
              <p className="text-gray-600 dark:text-gray-800 mb-2">Material:</p>
              <p className="text-gray-600 dark:text-gray-800 mb-2">Weight:</p>
              <p className="text-gray-600 dark:text-gray-800 mb-2">
                Model Number:
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
