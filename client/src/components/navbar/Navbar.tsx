import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
// import { ShoppingCart } from 'lucide-react'; // optional: use Heroicons or any other icon lib

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm  py-4 w-full fixed">
      <div className="w-full flex  justify-between">
        <Link to="/" className="flex items-start w-1/2">
          {/* <img src="" alt="Logo" className="h-8 w-8" /> */}
          <span className="text-xl font-light w-full text-gray-800 dark:text-white">
            Online Store
          </span>
        </Link>

        {/* Floating Cart */}
        <div className="right-10 z-50">
          <Cart cartCount={cartCount} />
        </div>
      </div>
    </nav>
  );
}
