// // For Only Frontend Use
// import React, { useState } from "react";

// const Orders = () => {
//   const [orders, setOrders] = useState([
//     { id: 1, customer: "Amit", total: 500, status: "Completed" },
//     { id: 2, customer: "Riya", total: 750, status: "Pending" },
//     { id: 3, customer: "Sahil", total: 320, status: "Preparing" },
//     { id: 4, customer: "Amit", total: 500, status: "Completed" },
//     { id: 5, customer: "Riya", total: 750, status: "Pending" },
//     { id: 6, customer: "Sahil", total: 320, status: "Preparing" },
//     { id: 7, customer: "Rahul", total: 520, status: "Completed" },
//     { id: 8, customer: "Sonu", total: 740, status: "Pending" },
//     { id: 9, customer: "Santy", total: 300, status: "Pending" },
//     { id: 10, customer: "Manty", total: 400, status: "Pending" },
//     { id: 11, customer: "Chintu", total: 950, status: "Pending" },
//     { id: 12, customer: "Mintu", total: 220, status: "Preparing" },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const totalPages = Math.ceil(orders.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

//   const handleStatusChange = (id, newStatus) => {
//     setOrders((prev) =>
//       prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
//     );
//   };

//   const handleEdit = (id) => {
//     alert(`Edit Order #${id} (You can later open edit modal or form)`);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "bg-green-100 text-green-700";
//       case "Pending":
//         return "bg-yellow-100 text-yellow-700";
//       case "Preparing":
//         return "bg-blue-100 text-blue-700";
//       default:
//         return "bg-gray-100 text-gray-600";
//     }
//   };

//   return (
//     <div className="p-4 h-full flex flex-col">
//       {/* Fixed Heading */}
//       <h1 className="text-3xl font-bold mb-4 text-gray-800 sticky top-0 bg-gray-50 z-10 py-2">
//         Orders
//       </h1>

//       <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex-1 flex flex-col overflow-hidden">
//         {/* Scrollable table area */}
//         <div className="overflow-y-auto flex-1 max-h-[calc(100vh-280px)]">
//           <table className="w-full text-left">
//             <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
//               <tr>
//                 <th className="p-3">S.No.</th>
//                 <th className="p-3">Customer</th>
//                 <th className="p-3">Total</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentOrders.map((o) => (
//                 <tr key={o.id} className="border-t hover:bg-gray-50 transition">
//                   <td className="p-3 font-medium">{o.id}</td>
//                   <td className="p-3">{o.customer}</td>
//                   <td className="p-3 font-semibold text-gray-700">
//                     ₹{o.total}
//                   </td>
//                   <td className="p-3">
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
//                         o.status
//                       )}`}
//                     >
//                       {o.status}
//                     </span>
//                   </td>
//                   <td className="p-3 flex items-center gap-2">
//                     <select
//                       value={o.status}
//                       onChange={(e) =>
//                         handleStatusChange(o.id, e.target.value)
//                       }
//                       className="border rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     >
//                       <option>Pending</option>
//                       <option>Preparing</option>
//                       <option>Completed</option>
//                     </select>
//                     <button
//                       onClick={() => handleEdit(o.id)}
//                       className="bg-green-600 text-white text-sm px-3 py-1 rounded-md hover:bg-green-700 transition"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {orders.length === 0 && (
//             <div className="text-center text-gray-500 py-6 italic">
//               No orders found.
//             </div>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-between items-center p-4 border-t bg-gray-50">
//           <span className="text-sm text-gray-600">
//             Page {currentPage} of {totalPages}
//           </span>
//           <div className="flex items-center gap-2">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//               className={`px-3 py-1 rounded-md border text-sm ${
//                 currentPage === 1
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               Prev
//             </button>
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//               className={`px-3 py-1 rounded-md border text-sm ${
//                 currentPage === totalPages
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../api";
import { toast } from "react-toastify";
import {
  Search,
  Filter,
  User,
  IndianRupee,
  Package,
  Pencil,
} from "lucide-react";

const Orders = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // UI States
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  // Animated dropdown state for modal
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  // Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const authConfig = {
    headers: {
      Authorization: `Basic ${user?.token}`,
    },
  };

  // ================= LOAD ORDERS =================
  const loadOrders = async () => {
    try {
      const res = await api.get("/api/orders", authConfig);
      setOrders(res.data);
    } catch (err) {
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // ================= STATUS COLOR =================
  const getStatusColor = (status) => {
    const s = status?.toLowerCase();

    switch (s) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "preparing":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // ================= OPEN MODAL =================
  const openEditModal = (order, item) => {
    const st = item.status?.toUpperCase();

    if (st === "COMPLETED" || st === "CANCELLED") {
      toast.error("This order cannot be updated.");
      return;
    }

    setSelectedOrder(order);
    setSelectedItem(item);
    setSelectedStatus(item.status);
    setModalOpen(true);
    setStatusDropdownOpen(false);
    setSortOpen(false);
  };

  // ================= UPDATE STATUS =================
  const updateStatus = async (itemId, status) => {
    try {
      await api.put(
        `/api/order-items/${itemId}/status?status=${status}`,
        {},
        authConfig
      );

      toast.success("Order status updated successfully!");

      setOrders((prev) =>
        prev.map((o) => ({
          ...o,
          items: o.items.map((i) =>
            i.id === itemId ? { ...i, status } : i
          ),
        }))
      );

      setModalOpen(false);
      setShowCancelConfirm(false);
      setStatusDropdownOpen(false);
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  // ================= PAGINATION =================
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex-1 flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
      </div>

      {/* PAGE CONTENT WRAPPER — blur when modal open */}
      <div className={`${modalOpen || showCancelConfirm ? "blur-sm pointer-events-none" : ""}`}>

        {/* SEARCH + SORT */}
        <div className="p-4 border-b bg-white flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

          {/* SEARCH */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full pl-11 pr-4 py-2.5 rounded-xl 
                border-2 border-gray-300 
                shadow-sm bg-white 
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all
              "
            />
            <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
          </div>

          {/* SORT DROPDOWN */}
          <div className="relative w-full sm:w-48 z-[9]">
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
              <span>{selectedSort || "Sort"}</span>
              <Filter
                className={`h-5 w-5 text-gray-600 transition ${sortOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {sortOpen && (
              <div
                className="
                  absolute mt-2 w-full bg-white rounded-xl shadow-lg z-[9999] animate-fadeIn
                  max-h-48 overflow-y-auto
                "
              >
                {["Newest", "Oldest", "Pending", "Completed", "Cancelled"].map((label) => (
                  <button
                    key={label}
                    className="w-full px-4 py-2.5 text-left hover:bg-green-50 text-sm"
                    onClick={() => {
                      setSelectedSort(label);
                      setSortOpen(false);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* TABLE (DESKTOP) */}
        <div className="hidden sm:block overflow-y-auto flex-1">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="p-3">S.No.</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentOrders.map((o, index) => (
                <tr key={o.orderId} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">{startIndex + index + 1}</td>

                  <td className="p-3 font-medium">{o.customerName}</td>

                  <td className="p-3 font-semibold text-gray-700">
                    ₹{o.totalAmount}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                        o.items[0]?.status
                      )}`}
                    >
                      {o.items[0]?.status}
                    </span>
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(o, o.items[0])}
                      className="bg-green-600 text-white text-sm px-3 py-1 rounded-md hover:bg-green-700 transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="sm:hidden p-3 space-y-3">
          {currentOrders.map((o, i) => (
            <div key={o.orderId} className="border p-4 rounded-xl shadow-sm bg-white">

              {/* Order Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <Package size={16} />
                  Order #{startIndex + i + 1}
                </div>

                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                    o.items[0]?.status
                  )}`}
                >
                  {o.items[0]?.status}
                </span>
              </div>

              {/* Customer */}
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
                <User size={16} className="text-gray-500" />
                <span className="font-medium">{o.customerName}</span>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-2 text-gray-700 mt-1">
                <IndianRupee size={16} className="text-green-600" />
                <span className="font-semibold">₹{o.totalAmount}</span>
              </div>

              {/* Edit Button */}
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => openEditModal(o, o.items[0])}
                  className="flex items-center gap-1 bg-green-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-green-700"
                >
                  <Pencil size={14} /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-3 py-1 rounded border ${currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
                }`}
            >
              Prev
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-3 py-1 rounded border ${currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div> {/* END blurred wrapper */}



      {/* ================= MODAL (WITH ANIMATED DROPDOWN) ================= */}
      {modalOpen && selectedOrder && selectedItem && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1000]">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-xl animate-fadeIn">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Update Order Status
            </h2>

            {/* Animated Dropdown */}
            <label className="text-sm text-gray-600">Status</label>

            <div className="relative mt-1">
              <button
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className="
                  w-full px-4 py-2.5 rounded-xl 
                  border-2 border-gray-300 
                  shadow-sm bg-white 
                  text-gray-700 flex justify-between items-center
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                  transition-all
                "
              >
                <span className="text-sm font-medium">
                  {selectedStatus}
                </span>

                <svg
                  className={`h-5 w-5 text-gray-600 transition-transform ${statusDropdownOpen ? "rotate-180" : ""
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21 10 11.99l4.77-4.78" />
                </svg>
              </button>

              {/* Dropdown list */}
              {statusDropdownOpen && (
                <div
                  className="
                    absolute mt-2 w-full bg-white rounded-xl shadow-lg z-[9999] animate-fadeIn 
                    max-h-48 overflow-y-auto
                  "
                >
                  {["PENDING", "PREPARING", "COMPLETED", "CANCELLED"].map((status) => (
                    <button
                      key={status}
                      className="w-full px-4 py-2.5 text-left hover:bg-green-50 text-sm"
                      onClick={() => {
                        if (status === "CANCELLED") setShowCancelConfirm(true);
                        setSelectedStatus(status);
                        setStatusDropdownOpen(false);
                      }}
                    >
                      {status.charAt(0) + status.slice(1).toLowerCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setStatusDropdownOpen(false);
                }}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700"
              >
                Close
              </button>

              <button
                onClick={() => updateStatus(selectedItem.id, selectedStatus)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}



      {/* ================= CANCEL CONFIRM MODAL ================= */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1100]">
          <div className="bg-white p-5 rounded-xl w-80 shadow-xl animate-fadeIn">
            <h3 className="text-lg font-semibold mb-3 text-red-600">
              Confirm Cancellation?
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to cancel this order?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700"
              >
                No
              </button>

              <button
                onClick={() => {
                  updateStatus(selectedItem.id, "CANCELLED");
                  setShowCancelConfirm(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Orders;
