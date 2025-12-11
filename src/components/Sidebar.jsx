// //Without Responsiveness
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Home, ShoppingCart, Package, Users } from "lucide-react";

// const Sidebar = () => {
//   const location = useLocation();

//   const links = [
//     { path: "/admin-dashboard", label: "Dashboard", icon: <Home size={20} /> },
//     { path: "/orders", label: "Orders", icon: <ShoppingCart size={20} /> },
//     { path: "/products", label: "Products", icon: <Package size={20} /> },
//     { path: "/customers", label: "Customers", icon: <Users size={20} /> },
//   ];

//   return (
//     <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col border-r border-gray-800">
//       {/* 🧾 Logo / Title */}
//       <div className="text-center py-5 text-2xl font-bold bg-gray-950 shadow-inner tracking-wide">
//         POS <span className="text-green-500">Billing</span>
//       </div>

//       {/* 📜 Scrollable Links */}
//       <nav className="flex-1 overflow-y-auto px-4 py-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
//         {links.map((link) => (
//           <Link
//             key={link.path}
//             to={link.path}
//             className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-all duration-200 ${
//               location.pathname === link.path
//                 ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
//                 : "hover:bg-gray-800 hover:text-green-400"
//             }`}
//           >
//             <div className="flex items-center justify-center w-6">
//               {link.icon}
//             </div>
//             <span className="font-medium">{link.label}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* ⚙️ Footer / Logout (Optional Placeholder) */}
//       <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-800">
//         © 2025 POS App
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// // With Responsiveness

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/admin-dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { path: "/orders", label: "Orders", icon: <ShoppingCart size={20} /> },
    { path: "/products", label: "Products", icon: <Package size={20} /> },
    { path: "/customers", label: "Customers", icon: <Users size={20} /> },
  ];

  return (
    <>
      {/* ========= DESKTOP SIDEBAR (unchanged) ========= */}
      <div className="hidden md:flex h-screen w-64 bg-gray-900 text-gray-100 flex-col border-r border-gray-800">
        <div className="text-center py-5 text-2xl font-bold bg-gray-950 shadow-inner tracking-wide">
          POS <span className="text-green-500">Billing</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                  : "hover:bg-gray-800 hover:text-green-400"
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-800">
          © 2025 POS App
        </div>
      </div>

      {/* ========= MOBILE SIDEBAR (slide-in) ========= */}
      <div
        className={`fixed top-12 left-0 h-full w-64 bg-gray-900 text-gray-100 border-r border-gray-800 
        transform transition-transform duration-300  md:hidden z-40
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="text-center py-5 text-2xl font-bold bg-gray-950 shadow-inner tracking-wide">
          POS <span className="text-green-500">Billing</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                  : "hover:bg-gray-800 hover:text-green-400"
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-800">
          © 2025 POS App
        </div>
      </div>

      {/* ========= GLASSMORPHIC TOGGLE BUTTON ========= */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden 
          fixed left-2.5 top-[65px]  
          z-50 
          px-2 py-1.5 
          rounded-full 
          backdrop-blur-md 
          bg-white/30 
          border border-grey/20 
          shadow-lg 
          text-gray-800 
          font-semibold
          flex items-center justify-center
          transition-all 
          hover:bg-white/50 hover:border-white/40 hover:shadow-xl
        "
      >
        {open ? (
          <ChevronLeft size={24} className="text-gray-900" />
        ) : (
          <ChevronRight size={24} className="text-gray-900" />
        )}
      </button>
    </>
  );
};

export default Sidebar;

