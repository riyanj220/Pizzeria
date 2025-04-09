import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectCartTotal, selectPizzasCount } from "../store/cartSlice";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const pizzasCount = useAppSelector(selectPizzasCount);
  const cartTotal = useAppSelector(selectCartTotal);

  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  return (
    <div className="navbar bg-yellow-500 text-base-100 sticky top-0 z-40 shadow-md">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-2">
        {/* Logo or Title */}
        <Link to={"/Pizzeria/"} className="text-xl sm:text-3xl font-bold text-gray-800 mr-2">
          Pizzeria
        </Link>

        {/* Search Form */}
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            navigate(`/Pizzeria/order/${orderId}`);
            setOrderId('');
          }}
          className="flex-1 flex justify-center md:justify-end items-center"
        >
          <input
            name="orderId"
            required
            onChange={(ev) => setOrderId(ev.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type="text"
            value={orderId}
            placeholder={isFocused ? "Enter order#" : "Find your order"}
            className="input input-bordered text-white w-full max-w-xs md:max-w-xs focus:ring-2 focus:ring-blue-500" 
          />
        </form>

        {/* Cart and Total */}
        <div className="flex items-center gap-4">
          {cartTotal ? (
            <div className="text-gray-800 font-semibold hidden md:flex items-center ml-4">
              <span className="mr-2">Cart total:</span>
              <span>€{cartTotal}</span>
            </div>
          ): null}

          <Link
            to="/Pizzeria/cart"
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item absolute top-0 right-0 bg-red-600 text-white rounded-full">
              {pizzasCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
