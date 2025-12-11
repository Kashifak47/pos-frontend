// //For Only Frontend Use
// import React, { useState } from "react";
// import { Package, IndianRupee, Boxes, ShoppingCart } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CustomerDashboard = () => {
//   const { addToCart } = useCart();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const products = [
//     {
//       id: 1,
//       name: "Veg Burger",
//       price: 120,
//       stock: 15,
//       category: "Burgers",
//       image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
//     },
//     {
//       id: 2,
//       name: "Cheese Pizza",
//       price: 250,
//       stock: 0,
//       category: "Pizza",
//       image: "https://tse4.mm.bing.net/th/id/OIP.ByvmoAn5-q2oMdwbqB7uPgHaEK?pid=Api&P=0&h=180",
//     },
//     {
//       id: 3,
//       name: "French Fries",
//       price: 90,
//       stock: 20,
//       category: "Snacks",
//       image: "https://www.rd.com/wp-content/uploads/2019/06/French-fries-with-ketchup.jpg",
//     },
//     {
//       id: 4,
//       name: "Cold Coffee",
//       price: 110,
//       stock: 10,
//       category: "Drinks",
//       image: "https://tse1.mm.bing.net/th/id/OIP.HaFYruBDBHwkaTVVVftCOgHaE7?pid=Api&P=0&h=180",
//     },
//     {
//       id: 5,
//       name: "Coke (500ml)",
//       price: 60,
//       stock: 30,
//       category: "Drinks",
//       image: "https://cdn.filestackcontent.com/rsZLSYrxSE2vtlM2NQ1g",
//     },
//     {
//       id: 6,
//       name: "Paneer Burger",
//       price: 140,
//       stock: 12,
//       category: "Burgers",
//       image: "https://tse1.mm.bing.net/th/id/OIP.xFDQAQcsIdcOzFHBJGrZgAHaEK?pid=Api&P=0&h=180",
//     },
//     {
//       id: 7,
//       name: "Margherita Pizza",
//       price: 200,
//       stock: 9,
//       category: "Pizza",
//       image: "https://tse1.mm.bing.net/th/id/OIP.r6QNsFDrNL6nrOMhstm88gHaEO?pid=Api&P=0&h=180",
//     },
//   ];

//   const categories = ["All", "Burgers", "Pizza", "Drinks", "Snacks"];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   // Classic POS Billing Theme
//   const handleAddToCart = (product) => {
//     if (product.stock > 0) {
//       addToCart(product);
//       toast.success(`${product.name} added to cart successfully! ✅`, {
//         position: "bottom-right", // POS alerts usually appear bottom-right
//         autoClose: 1500,
//         closeButton: false,
//         hideProgressBar: false,
//         pauseOnHover: false,
//         draggable: true,
//         progressStyle: { background: "#0f766e" }, // Teal progress bar
//         style: {
//           background: "#064e3b", // Deep green (POS style)
//           color: "#ecfdf5", // Soft mint text
//           fontWeight: "600",
//           fontFamily: "Roboto Mono, monospace",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//         },
//         icon: "🛒",
//       });
//     } else {
//       toast.error(`${product.name} is out of stock! ❌`, {
//         position: "bottom-right",
//         autoClose: 1800,
//         closeButton: false,
//         hideProgressBar: false,
//         progressStyle: { background: "#b91c1c" },
//         style: {
//           background: "#450a0a",
//           color: "#fee2e2",
//           fontWeight: "600",
//           fontFamily: "Roboto Mono, monospace",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//         },
//         icon: "⚠️",
//       });
//     }
//   };

//   return (
//     <div className="p-6">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Welcome to Your Dashboard 🍕
//       </h1>

//       {/* Category Filter */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all shadow-sm ${selectedCategory === cat
//                 ? "bg-green-600 text-white border-green-600 shadow-md"
//                 : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-400"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredProducts.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Product Image */}
//             <div className="relative">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-40 object-cover"
//               />
//               <span
//                 className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${p.stock === 0
//                     ? "bg-red-200 text-red-700"
//                     : p.stock < 10
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-green-100 text-green-700"
//                   }`}
//               >
//                 {p.stock === 0
//                   ? "Sold Out"
//                   : p.stock < 10
//                     ? "Low Stock"
//                     : "In Stock"}
//               </span>
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">
//                 {p.name}
//               </h2>
//               <div className="flex items-center mt-1 text-gray-700">
//                 <IndianRupee size={16} className="mr-1 text-green-600" />
//                 <span className="text-xl font-bold">{p.price}</span>
//               </div>

//               <div className="flex items-center justify-between mt-4 text-sm">
//                 <div className="flex items-center gap-1 text-gray-500">
//                   <Boxes size={14} />
//                   <span>Stock: {p.stock}</span>
//                 </div>
//                 <div className="flex items-center gap-1 text-gray-500">
//                   <Package size={14} />
//                   <span>{p.category}</span>
//                 </div>
//               </div>

//               {/* Add to Cart */}
//               <button
//                 onClick={() => handleAddToCart(p)}
//                 disabled={p.stock === 0}
//                 className={`mt-5 w-full py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium active:scale-95 transition-all ${p.stock === 0
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : "bg-green-600 text-white hover:bg-green-700"
//                   }`}
//               >
//                 <ShoppingCart size={16} />
//                 {p.stock === 0 ? "Sold Out" : "Add to Cart"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* No Products Message */}
//       {filteredProducts.length === 0 && (
//         <p className="text-center text-gray-500 mt-6">
//           No products found in this category.
//         </p>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;

// // *** With Spring Boot Backend ***

// import React, { useState, useEffect } from "react";
// import { Package, IndianRupee, Boxes, ShoppingCart } from "lucide-react";
// import axios from "axios";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/UseAuth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CustomerDashboard = () => {
//   const { addToCart } = useCart();
//   const { user } = useAuth(); // ⭐ customer user with BasicAuth token

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState(["All"]);

//    // ⭐ Authorization header
//   const authConfig = {
//     headers: {
//       Authorization: `Basic ${user?.token}`,
//     },
//   };

//   // 🔹 Load categories from backend
//   const loadCategories = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8080/api/customer/products/categories",authConfig
//       );
//       setCategories(res.data); // ["All", "Pizza", "Drinks", ...]
//     } catch (error) {
//       console.error("Error loading categories:", error);
//     }
//   };

//   // 🔹 Load products from backend based on category
//   const loadProducts = async () => {
//     try {
//       const url =
//         selectedCategory === "All"
//           ? "http://localhost:8080/api/customer/products"
//           : `http://localhost:8080/api/customer/products?category=${selectedCategory}`;

//       const res = await axios.get(url,authConfig);
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error loading products:", error);
//     }
//   };

//   // Load categories once
//   useEffect(() => {
//     loadCategories();
//   }, []);

//   // Reload products when category changes
//   useEffect(() => {
//     loadProducts();
//   }, [selectedCategory]);

//   // Classic POS Billing Theme (unchanged)
//   const handleAddToCart = (product) => {
//     if (product.stock > 0) {
//       addToCart(product);
//       toast.success(`${product.name} added to cart successfully! ✅`, {
//         position: "bottom-right",
//         autoClose: 1500,
//         closeButton: false,
//         hideProgressBar: false,
//         draggable: true,
//         progressStyle: { background: "#0f766e" },
//         style: {
//           background: "#064e3b",
//           color: "#ecfdf5",
//           fontWeight: "600",
//           fontFamily: "Roboto Mono, monospace",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//         },
//         icon: "🛒",
//       });
//     } else {
//       toast.error(`${product.name} is out of stock! ❌`, {
//         position: "bottom-right",
//         autoClose: 1800,
//         closeButton: false,
//         hideProgressBar: false,
//         progressStyle: { background: "#b91c1c" },
//         style: {
//           background: "#450a0a",
//           color: "#fee2e2",
//           fontWeight: "600",
//           fontFamily: "Roboto Mono, monospace",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//         },
//         icon: "⚠️",
//       });
//     }
//   };

//   return (
//     <div className="p-6">
//       <ToastContainer />

//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Welcome to Your Dashboard 🍕
//       </h1>

//       {/* Category Filter — NO UI change */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all shadow-sm ${
//               selectedCategory === cat
//                 ? "bg-green-600 text-white border-green-600 shadow-md"
//                 : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-400"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid — NO UI change */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Product Image */}
//             <div className="relative">
//               <img
//                 src={p.imageUrl || p.image}
//                 alt={p.name}
//                 className="w-full h-40 object-cover"
//               />
//               <span
//                 className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${
//                   p.stock === 0
//                     ? "bg-red-200 text-red-700"
//                     : p.stock < 10
//                     ? "bg-yellow-100 text-yellow-700"
//                     : "bg-green-100 text-green-700"
//                 }`}
//               >
//                 {p.stock === 0
//                   ? "Sold Out"
//                   : p.stock < 10
//                   ? "Low Stock"
//                   : "In Stock"}
//               </span>
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">
//                 {p.name}
//               </h2>

//               <div className="flex items-center mt-1 text-gray-700">
//                 <IndianRupee size={16} className="mr-1 text-green-600" />
//                 <span className="text-xl font-bold">{p.price}</span>
//               </div>

//               <div className="flex items-center justify-between mt-4 text-sm">
//                 <div className="flex items-center gap-1 text-gray-500">
//                   <Boxes size={14} />
//                   <span>Stock: {p.stock}</span>
//                 </div>
//                 <div className="flex items-center gap-1 text-gray-500">
//                   <Package size={14} />
//                   <span>{p.category}</span>
//                 </div>
//               </div>

//               {/* Add to Cart */}
//               <button
//                 onClick={() => handleAddToCart(p)}
//                 disabled={p.stock === 0}
//                 className={`mt-5 w-full py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium active:scale-95 transition-all ${
//                   p.stock === 0
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : "bg-green-600 text-white hover:bg-green-700"
//                 }`}
//               >
//                 <ShoppingCart size={16} />
//                 {p.stock === 0 ? "Sold Out" : "Add to Cart"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* No Products */}
//       {products.length === 0 && (
//         <p className="text-center text-gray-500 mt-6">
//           No products found in this category.
//         </p>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;

import React, { useState, useEffect, useRef } from "react";
import {
  Package,
  IndianRupee,
  Boxes,
  ShoppingCart,
  X,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
// import axios from "axios";
import api from "../api";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_SIZE = 6;

const CustomerDashboard = () => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const loaderRef = useRef();

  const authConfig = {
    headers: {
      Authorization: `Basic ${user?.token}`,
    },
  };

  // Load categories
  const loadCategories = async () => {
    try {
      const res = await api.get(
        "/api/customer/products/categories",
        authConfig
      );
      setCategories(res.data);
    } catch (e) {
      console.error("Category load error:", e);
    }
  };

  // Load products (paginated)
  const loadProducts = async () => {
    try {
      const res = await api.get(
        `/api/customer/products?page=${page}&size=${PAGE_SIZE}&category=${selectedCategory}&search=${search}&sort=${sort}`,
        authConfig
      );

      if (page === 0) setProducts(res.data.products);
      else setProducts((prev) => [...prev, ...res.data.products]);

      setTotal(res.data.total);
    } catch (e) {
      console.error("Products load error:", e);
    }
  };

  // Reset on filter
  useEffect(() => {
    setPage(0);
    loadProducts();
  }, [selectedCategory, search, sort]);

  // Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && products.length < total) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [products, total]);

  useEffect(() => {
    if (page > 0) loadProducts();
  }, [page]);

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  // Add to cart
  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(`${product.name} is out of stock!`);
    }
  };

  const sortLabel = () => {
    switch (sort) {
      case "price_asc":
        return "Price Low → High";
      case "price_desc":
        return "Price High → Low";
      case "category_asc":
        return "Category A → Z";
      case "category_desc":
        return "Category Z → A";
      default:
        return "Sort";
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          Welcome to Your Dashboard 🍕
        </h1>

        {/* SEARCH + SORT */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* SEARCH */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-gray-300 shadow-sm bg-white 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-3 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.242-1.414 1.415-4.243-4.243zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* SORT */}
          <div className="relative w-full sm:w-48">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white shadow-sm 
              text-gray-700 flex justify-between items-center focus:outline-none focus:ring-2 
              focus:ring-green-500 hover:border-green-500 transition"
            >
              <span>{sortLabel()}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-600 transform transition ${sortOpen ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {sortOpen && (
              <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg animate-fadeIn z-50">
                {[
                  ["", "Sort"],
                  ["price_asc", "Price Low → High"],
                  ["price_desc", "Price High → Low"],
                  ["category_asc", "Category A → Z"],
                  ["category_desc", "Category Z → A"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => {
                      setSort(value);
                      setSortOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-green-50 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all shadow-sm ${selectedCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500 text-lg">
            No products found
          </div>
        )}

        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProduct(p)}
            className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="relative">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-40 object-cover"
              />

              {/* BADGE (same as before) */}
              <span
                className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${p.stock === 0
                    ? "bg-red-200 text-red-700"
                    : p.stock < 10
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
              >
                {p.stock === 0
                  ? "Sold Out"
                  : p.stock < 10
                    ? "Low Stock"
                    : "In Stock"}
              </span>
            </div>

            <div className="p-4" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {p.name}
              </h2>

              <div className="flex items-center mt-1 text-gray-700">
                <IndianRupee size={16} className="mr-1 text-green-600" />
                <span className="text-xl font-bold">{p.price}</span>
              </div>

              {/* ⭐ Availability + Category in SAME LINE */}
              <div className="flex items-center justify-between mt-3">

                {/* LEFT: Availability Badge */}
                <div className="flex items-center gap-1">
                  {p.stock === 0 ? (
                    <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                      <XCircle size={16} />
                      Currently Unavailable
                    </span>
                  ) : p.stock < 10 ? (
                    <span className="flex items-center gap-1 text-amber-600 text-sm font-medium">
                      <AlertTriangle size={16} />
                      Few Item Left
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <CheckCircle size={16} />
                      Available
                    </span>
                  )}
                </div>

                {/* RIGHT: Category */}
                <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                  <Package size={14} />
                  <span>{p.category}</span>
                </div>

              </div>


              <button
                onClick={() => handleAddToCart(p)}
                disabled={p.stock === 0}
                className={`mt-5 w-full py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium ${p.stock === 0
                    ? "bg-gray-300 text-gray-500"
                    : "bg-green-600 text-white hover:bg-green-700"
                  }`}
              >
                <ShoppingCart size={16} />
                {p.stock === 0 ? "Sold Out" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scroll Loader */}
      <div ref={loaderRef} className="flex justify-center py-10">
        {products.length < total && (
          <div className="w-8 h-8 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
        )}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 p-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-600 mt-2 text-sm">
              {selectedProduct.category}
            </p>

            <div className="flex items-center mt-3">
              <IndianRupee className="text-green-600" />
              <span className="text-2xl font-bold ml-1">
                {selectedProduct.price}
              </span>
            </div>

            {/* ⭐ PREMIUM AVAILABILITY BADGE IN MODAL */}
            <div className="mt-4">
              {selectedProduct.stock === 0 ? (
                <span className="flex items-center gap-2 text-red-600 text-sm font-medium">
                  <XCircle size={18} />
                  Currently Unavailable
                </span>
              ) : selectedProduct.stock < 10 ? (
                <span className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                  <AlertTriangle size={18} />
                  Selling Fast
                </span>
              ) : (
                <span className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle size={18} />
                  Freshly Available
                </span>
              )}
            </div>

            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="mt-5 w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
