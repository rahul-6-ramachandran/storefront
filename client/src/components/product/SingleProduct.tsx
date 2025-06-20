import { Link } from "react-router";
import type { Products } from "../../types.common";

export default function SingleProduct({ product }: { product: Products }) {
  return (
    <>
      <div className="max-w-sm h-full flex flex-col justify-between bg-white md:m-4 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        {/* Image */}
        <div className="p-5 w-full h-80">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={`${product.images[0]}?auto=format&fit=crop&w=800&q=80`}
            alt={product?.name || "Product image"}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 pt-0">
          <div className="md:py-1">
            <h6 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
              {product?.name}
            </h6>
          </div>

          <div className="md:py-1 text-center">
            <h6 className="mb-2 text-2xl font-medium tracking-tight text-gray-700 dark:text-gray-300">
             $ {product?.price}
            </h6>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:py-2">
            {product?.description}
          </p>

          {/* Button fixed at bottom */}
          <div className="mt-auto">
            <Link
              to={`/product/${product._id}`}
              className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
              <svg
                className="w-5 h-4 text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l1.6 8h8.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
