export default function Cart({ cartCount = 0 }) {
  return (
    <>
      <div className="relative inline-block fixed md:bottom-0 flex  rounded bg-blue-600 rounded-full p-3 ">
        <svg
          className="md:w-5 md:h-5 h-6  w-6 text-gray-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l1.6 8h8.8" />
        </svg>

        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          {cartCount}
        </span>
      </div>
    </>
  );
}
