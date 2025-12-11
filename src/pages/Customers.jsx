// //For Only Frontend Use
// import React, { useState } from "react";

// const Customers = () => {
//   const allCustomers = [
//     { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
//     { id: 2, name: "Riya Patel", email: "riya@gmail.com" },
//     { id: 3, name: "Karan Mehta", email: "karan@gmail.com" },
//     { id: 4, name: "Priya Singh", email: "priya@gmail.com" },
//     { id: 5, name: "Rohit Gupta", email: "rohit@gmail.com" },
//     { id: 6, name: "Sneha Verma", email: "sneha@gmail.com" },
//   ];

//   // Pagination setup
//   const [currentPage, setCurrentPage] = useState(1);
//   const customersPerPage = 5;
//   const totalPages = Math.ceil(allCustomers.length / customersPerPage);

//   const startIndex = (currentPage - 1) * customersPerPage;
//   const currentCustomers = allCustomers.slice(
//     startIndex,
//     startIndex + customersPerPage
//   );

//   return (
//     <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex-1 flex flex-col overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b bg-gray-50">
//         <h1 className="text-2xl font-semibold text-gray-800">Customers</h1>
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm">
//           + Add Customer
//         </button>
//       </div>

//       {/* Scrollable table area */}
//       <div className="overflow-y-auto flex-1 max-h-[calc(100vh-280px)]">
//         <table className="w-full text-left">
//           <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
//             <tr>
//               <th className="p-3">S.No.</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCustomers.map((c) => (
//               <tr
//                 key={c.id}
//                 className="border-t hover:bg-gray-50 transition-colors"
//               >
//                 <td className="p-3">{c.id}</td>
//                 <td className="p-3 font-medium text-gray-800">{c.name}</td>
//                 <td className="p-3 text-gray-600">{c.email}</td>
//                 <td className="p-3 text-right">
//                   <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//                     Edit
//                   </button>
//                   <button className="text-sm px-3 py-1 bg-red-500 text-white rounded-md ml-2 hover:bg-red-600 transition">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {currentCustomers.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center text-gray-500 py-6 italic">
//                   No customers found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center p-4 border-t bg-gray-50">
//         <span className="text-sm text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span>
//         <div className="flex items-center gap-2">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//             className={`px-3 py-1 rounded-md border text-sm ${
//               currentPage === 1
//                 ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//           >
//             Prev
//           </button>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//             className={`px-3 py-1 rounded-md border text-sm ${
//               currentPage === totalPages
//                 ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customers;

// // With Backend ***

import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../api";
import { toast } from "react-toastify";
import { Edit2, Trash2, UserPlus } from "lucide-react";
import { useAuth } from "../context/UseAuth";

const Customers = () => {
  const { user } = useAuth();

  const [customers, setCustomers] = useState([]);

  // Search + Sort
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  const authConfig = {
    headers: {
      Authorization: `Basic ${user?.token}`,
    },
  };

  // Load customers
  const loadCustomers = async () => {
    try {
      const res = await api.get("/api/admin/customers", authConfig);
      setCustomers(res.data);
    } catch (e) {
      console.error("Customer load error", e);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  // Search + Sort logic
  const filtered = customers
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "az") return a.name.localeCompare(b.name);
      if (sortOrder === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const currentCustomers = filtered.slice(startIndex, startIndex + customersPerPage);

  // Handle add/edit
  const openAddModal = () => {
    setEditing(false);
    setForm({
      id: null,
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
    });
    setModalOpen(true);
  };

  const openEditModal = (cust) => {
    setEditing(true);
    setForm({
      id: cust.id,
      name: cust.name,
      email: cust.email,
      phone: cust.phone,
      address: cust.address,
      password: "",
    });
    setModalOpen(true);
  };

  const saveCustomer = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await api.put(
          `/api/admin/customers/${form.id}`,
          form,
          authConfig
        );
        toast.success("Customer updated!");
      } else {
        await api.post(
          "/api/admin/customers",
          form,
          authConfig
        );
        toast.success("Customer added!");
      }

      setModalOpen(false);
      loadCustomers();
    } catch (e) {
      console.error(e);
      toast.error("Error saving customer");
    }
  };

  // Delete
  const deleteCustomer = async (id) => {
    if (!window.confirm("Delete this customer?")) return;

    await api.delete(`/api/admin/customers/${id}`, authConfig);
    toast.success("Customer deleted");
    loadCustomers();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex-1 flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-800">Customers</h1>
        <button
          onClick={openAddModal}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm flex items-center gap-2"
        >
          <UserPlus size={18} /> Add Customer
        </button>
      </div>

      {/* SEARCH + SORT */}
      <div className="p-4 border-b bg-white flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

        {/* SEARCH */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-11 pr-4 py-2.5 rounded-xl 
              border-2 border-gray-300 
              shadow-sm bg-white 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
              transition-all
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.242-1.414 1.415-4.243-4.243z" />
          </svg>
        </div>

        {/* SORT */}
        <div className="relative w-full sm:w-48">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="
              w-full px-4 py-2.5 rounded-xl 
              border-2 border-gray-300 bg-white 
              shadow-sm text-gray-700 flex justify-between items-center
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
              transition-all
            "
          >
            <span>
              {sortOrder === "" ? "Sort" : sortOrder === "az" ? "A → Z" : "Z → A"}
            </span>
            <svg
              className={`h-5 w-5 text-gray-600 transition ${sortOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.23 7.21 10 11.99l4.77-4.78" />
            </svg>
          </button>

          {sortOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg z-50 animate-fadeIn">
              <button
                onClick={() => {
                  setSortOrder("az");
                  setSortOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left hover:bg-green-50"
              >
                A → Z
              </button>
              <button
                onClick={() => {
                  setSortOrder("za");
                  setSortOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left hover:bg-green-50"
              >
                Z → A
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= TABLE (DESKTOP) ================= */}
      <div className="hidden sm:block overflow-y-auto flex-1">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="p-3">S.No.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Address</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentCustomers.map((c, i) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{startIndex + i + 1}</td>
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.address}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => openEditModal(c)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => deleteCustomer(c.id)}
                    className="bg-red-500 text-white px-3 py-1 ml-2 rounded-md"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="sm:hidden p-3 space-y-3">
        {currentCustomers.map((c, i) => (
          <div
            key={c.id}
            className="border p-3 rounded-xl shadow-sm bg-white space-y-1"
          >
            <div className="text-xs text-gray-400">#{startIndex + i + 1}</div>

            <div className="font-semibold text-gray-800">{c.name}</div>
            <div className="text-gray-600">{c.email}</div>
            <div className="text-gray-600">{c.phone}</div>
            <div className="text-gray-600">{c.address}</div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => openEditModal(c)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                <Edit2 size={14} />
              </button>
              <button
                onClick={() => deleteCustomer(c.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center p-4 border-t bg-gray-50">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-white"
            }`}
          >
            Prev
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-xl animate-fadeIn">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editing ? "Edit Customer" : "Add Customer"}
            </h2>

            <form onSubmit={saveCustomer} className="space-y-3">

              <input
                className="w-full border p-2 rounded-md"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded-md"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded-md"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded-md"
                placeholder="Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />

              {!editing && (
                <input
                  className="w-full border p-2 rounded-md"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setModalOpen(false)}
                  type="button"
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  {editing ? "Update" : "Add"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Customers;
