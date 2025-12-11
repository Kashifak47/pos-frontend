// //For Only Frontend Use
// import React, { useState } from "react";
// import { Package, Edit2, Trash2, PlusCircle } from "lucide-react";

// const Products = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Veg Burger", price: 120, stock: 15, category: "Burgers" },
//     { id: 2, name: "Cheese Pizza", price: 250, stock: 8, category: "Pizza" },
//     { id: 3, name: "French Fries", price: 90, stock: 20, category: "Snacks" },
//     { id: 4, name: "Cold Coffee", price: 110, stock: 10, category: "Drinks" },
//     { id: 5, name: "Coke (500ml)", price: 60, stock: 30, category: "Drinks" },
//     { id: 6, name: "Chicken Sandwich", price: 180, stock: 12, category: "Sandwiches" },
//     { id: 7, name: "Margarita Pizza", price: 220, stock: 9, category: "Pizza" },
//     { id: 8, name: "Onion Rings", price: 100, stock: 18, category: "Snacks" },
//     { id: 9, name: "Hot Chocolate", price: 130, stock: 14, category: "Drinks" },
//     { id: 10, name: "Aloo Tikki Burger", price: 100, stock: 25, category: "Burgers" },
//   ]);

//   const [form, setForm] = useState({ id: null, name: "", price: "", stock: "", category: "" });
//   const [editing, setEditing] = useState(false);

//   // ✅ Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.price || !form.stock || !form.category) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (editing) {
//       setProducts((prev) =>
//         prev.map((p) => (p.id === form.id ? { ...form, price: +form.price, stock: +form.stock } : p))
//       );
//       setEditing(false);
//     } else {
//       const newProduct = {
//         ...form,
//         id: Date.now(),
//         price: +form.price,
//         stock: +form.stock,
//       };
//       setProducts([...products, newProduct]);
//     }

//     setForm({ id: null, name: "", price: "", stock: "", category: "" });
//   };

//   const handleEdit = (product) => {
//     setForm(product);
//     setEditing(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       setProducts(products.filter((p) => p.id !== id));
//     }
//   };

//   // ✅ Pagination functions
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
//       {/* Fixed header & form */}
//       <div className="flex-shrink-0 bg-gray-50 border-b border-gray-200 p-6">
//         <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
//           <Package className="text-green-600" /> Manage Products
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-xl p-4 border border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
//           />
//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={form.stock}
//             onChange={handleChange}
//             className="border p-2 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
//           />

//           <button
//             type="submit"
//             className="md:col-span-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2"
//           >
//             <PlusCircle size={18} />
//             {editing ? "Update Product" : "Add Product"}
//           </button>
//         </form>
//       </div>

//       {/* ✅ Scrollable List (fixed height) */}
//       <div className="flex-1 px-6 pb-6 overflow-hidden">
//         <div className="bg-white rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
//           <div className="flex-1">
//             <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
//               <thead className="bg-green-100 text-gray-700 sticky top-0 z-10">
//                 <tr>
//                   <th className="py-3 px-4 font-semibold">S.No.</th>
//                   <th className="py-3 px-4 font-semibold">Product Name</th>
//                   <th className="py-3 px-4 font-semibold">Category</th>
//                   <th className="py-3 px-4 font-semibold">Price (₹)</th>
//                   <th className="py-3 px-4 font-semibold">Stock</th>
//                   <th className="py-3 px-4 font-semibold text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {currentItems.map((p, index) => (
//                   <tr
//                     key={p.id}
//                     className="border-b hover:bg-gray-50 transition duration-150"
//                   >
//                     <td className="py-3 px-4">{startIndex + index + 1}</td>
//                     <td className="py-3 px-4 font-medium">{p.name}</td>
//                     <td className="py-3 px-4">{p.category}</td>
//                     <td className="py-3 px-4 font-semibold text-green-600">
//                       ₹{p.price}
//                     </td>
//                     <td
//                       className={`py-3 px-4 font-medium ${
//                         p.stock < 10 ? "text-red-500" : "text-gray-700"
//                       }`}
//                     >
//                       {p.stock}
//                     </td>
//                     <td className="py-3 px-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <button
//                           onClick={() => handleEdit(p)}
//                           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
//                         >
//                           <Edit2 size={14} /> Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(p.id)}
//                           className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1"
//                         >
//                           <Trash2 size={14} /> Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}

//                 {products.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="py-6 text-center text-gray-500 italic"
//                     >
//                       No products available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* ✅ Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="border-t border-gray-100 p-4 flex items-center justify-center gap-2 bg-gray-50 rounded-b-xl">
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className={`px-3 py-1 text-sm rounded-md border ${
//                   currentPage === 1
//                     ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                     : "bg-white hover:bg-gray-100 text-gray-700"
//                 } transition`}
//               >
//                 Previous
//               </button>

//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handlePageChange(i + 1)}
//                   className={`px-3 py-1 text-sm rounded-md border transition ${
//                     currentPage === i + 1
//                       ? "bg-green-600 text-white border-green-600"
//                       : "bg-white text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}

//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`px-3 py-1 text-sm rounded-md border ${
//                   currentPage === totalPages
//                     ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                     : "bg-white hover:bg-gray-100 text-gray-700"
//                 } transition`}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// // *** With Spring Boot Backend ***

import React, { useState, useEffect } from "react"; 
// import axios from "axios";
import api from "../api";
import { Package, Edit2, Trash2, PlusCircle } from "lucide-react";
import { useAuth } from "../context/UseAuth";

const Products = () => {
  const { user } = useAuth();

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  const [editing, setEditing] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const authConfig = {
    headers: {
      Authorization: `Basic ${user?.token}`,
    },
  };

  // Load products
  const loadProducts = async () => {
    try {
      const res = await api.get(
        "/api/admin/products",
        authConfig
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error loading products:", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add / Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock || !form.category) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editing) {
        await api.put(
          `/api/admin/products/update/${form.id}`,
          form,
          authConfig
        );
      } else {
        await api.post(
          "/api/admin/products/add",
          form,
          authConfig
        );
      }

      // Reset form
      setForm({
        id: null,
        name: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: "",
      });

      setEditing(false);
      loadProducts();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setForm(product);
    setEditing(true);
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await api.delete(
      `/api/admin/products/delete/${id}`,
      authConfig
    );

    loadProducts();
  };

  // Pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-50 overflow-y-auto md:overflow-hidden">

      {/* HEADER + FORM */}
      <div className="flex-shrink-0 bg-gray-50 border-b border-gray-200 p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <Package className="text-green-600" /> Manage Products
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-4 border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />

          {/* ⭐ FIXED CATEGORY DROPDOWN */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          >
            <option value="">Select Category</option>
            <option value="Biryani">Biryani</option>
            <option value="Chicken Item">Chicken Item</option>
            <option value="Burger">Burger</option>
            <option value="Chowmin">Chowmin</option>
            <option value="Momo">Momo</option>
            <option value="Pizza">Pizza</option>
            <option value="Shake">Shake</option>
          </select>

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition col-span-full flex items-center justify-center gap-2"
          >
            <PlusCircle size={18} />
            {editing ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* ================= TABLE SECTION ================= */}
      <div className="flex-1 px-2 sm:px-4 lg:px-6 pb-4 sm:pb-6">
        <div className="bg-white rounded-xl shadow-md border border-black/20 w-full h-full flex flex-col">

          <div className="flex-1 w-full overflow-y-auto">
            <table className="w-full text-[10px] sm:text-sm text-gray-700 border-collapse">
              <thead className="bg-green-100 sticky top-0 z-10">
                <tr>
                  <th className="py-2 px-1 sm:px-3">S.No.</th>
                  <th className="py-2 px-1 sm:px-3">Product</th>
                  <th className="py-2 px-1 sm:px-3">Category</th>
                  <th className="py-2 px-1 sm:px-3">Price</th>
                  <th className="py-2 px-1 sm:px-3">Stock</th>
                  <th className="py-2 px-1 sm:px-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((p, index) => (
                  <tr key={p.id} className="border-b text-center">
                    <td className="py-2 px-1 sm:px-3">
                      {startIndex + index + 1}
                    </td>

                    <td className="py-2 px-1 sm:px-3 break-words">{p.name}</td>

                    <td className="py-2 px-1 sm:px-3 break-words">
                      {p.category}
                    </td>

                    <td className="py-2 px-1 sm:px-3 text-green-600">
                      ₹{p.price}
                    </td>

                    <td className="py-2 px-1 sm:px-3">{p.stock}</td>

                    <td className="py-2 px-1 sm:px-3 text-center">
                      <div className="flex justify-center gap-2 flex-wrap">
                        <button
                          onClick={() => handleEdit(p)}
                          className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded"
                        >
                          <Edit2 size={14} />
                        </button>

                        <button
                          onClick={() => handleDelete(p.id)}
                          className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {products.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6">
                      No products available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="p-2 sm:p-4 flex justify-center gap-2 bg-gray-50 border-t">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-green-600 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Products;
