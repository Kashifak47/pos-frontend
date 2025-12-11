// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, User } from "lucide-react";
// import { useAuth } from "../context/UseAuth";
// import { useCart } from "../context/CartContext";

// const Topbar = () => {
//   const { user, logout } = useAuth();
//   const { cart } = useCart();

//   const isCustomer = user?.role === "CUSTOMER";

//   return (
//     <div className="bg-white shadow flex justify-between items-center px-6 py-3">
//       <h1 className="text-xl font-semibold text-gray-800">POS Billing System</h1>

//       <div className="flex items-center gap-5">
//         {user && <span className="text-gray-700">Hello, {user.role} 👋</span>}

//         {isCustomer && (
//           <Link to="/cart" className="relative">
//             <ShoppingCart
//               size={26}
//               className="text-green-600 hover:text-green-700 transition"
//             />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//         )}

//         {/* 🧍 Profile Button */}
//         {user && (
//           <Link
//             to="/profile"
//             className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
//           >
//             <User size={18} />
//             <span>Profile</span>
//           </Link>
//         )}


//         <button
//           onClick={logout}
//           className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/UseAuth";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Topbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // ⭐ NEW

  const isCustomer = user?.role === "CUSTOMER";

  // ⭐ Handle logout confirmation
  const confirmLogout = () => {
    setShowConfirm(false);
    logout();
    toast.success("Logged out successfully!");
  };

  return (
    <div className="bg-white shadow px-4 py-3 sticky top-0 z-50">

      {/* MAIN WRAPPER */}
      <div className="flex items-center justify-between">

        <h1 className="text-xl font-semibold text-gray-800">
          POS Billing System
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">

          {user && (
            <span className="text-gray-700">Hello, {user.role} 👋</span>
          )}

          {isCustomer && (
            <Link to="/cart" className="relative">
              <ShoppingCart
                size={26}
                className="text-green-600 hover:text-green-700 transition"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          )}

          {user && (
            <Link
              to="/profile"
              className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            >
              <User size={18} />
              <span>Profile</span>
            </Link>
          )}

          {/* ⭐ Logout now opens confirmation popup */}
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white border rounded-lg shadow p-4 flex flex-col gap-3 animate-fadeIn">

          {user && (
            <span className="text-gray-700 font-medium">
              Hello, {user.role} 👋
            </span>
          )}

          {isCustomer && (
            <Link
              to="/cart"
              className="relative flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative">
                <ShoppingCart
                  size={28}
                  className="text-green-600 hover:text-green-700 transition drop-shadow-sm"
                />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-5 
                    min-w-[20px] flex items-center justify-center rounded-full shadow-md border border-white">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          )}

          {user && (
            <Link
              to="/profile"
              className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              <User size={18} />
              Profile
            </Link>
          )}

          {/* ⭐ Mobile Logout → opens confirmation */}
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* ⭐ LOGOUT CONFIRMATION MODAL  */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 animate-fadeIn">

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Are you sure you want to logout?
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              You will need to log in again to access your account.
            </p>

            <div className="flex justify-end gap-3">
              
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Yes, Logout
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Topbar;
