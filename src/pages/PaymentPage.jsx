// // Without Payment Gateway
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   CreditCard,
//   Smartphone,
//   Wallet,
//   ArrowLeft,
//   XCircle,
//   CheckCircle,
//   MapPin,
//   Home,
//   Phone,
// } from "lucide-react";

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const totalAmount = location.state?.total || 0;

//   const [showModal, setShowModal] = useState(false);
//   const [method, setMethod] = useState("");

//   // ✅ Handle Payment Confirm
//   const handleConfirmPayment = () => {
//     setTimeout(() => {
//       setShowModal(false);
//       // 🧾 Get products from cart or location (assuming you pass cart items here)
//       const cartItems = location.state?.cartItems || [];
//       navigate("/bill", {
//         state: { totalAmount, method, cartItems },
//       });
//     }, 1000);
//   };


//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate("/cart")}
//         className="absolute top-6 left-6 text-gray-500 hover:text-gray-700 flex items-center gap-1"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       {/* 💳 Main Card */}
//       <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-green-100 backdrop-blur-sm">
//         <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
//           Complete Your Payment 💳
//         </h1>

//         {/* 🧾 Summary */}
//         <div className="bg-green-50 p-5 rounded-xl mb-6 border border-green-200 flex flex-col items-center shadow-sm">
//           <CheckCircle className="text-green-600 mb-2" size={32} />
//           <span className="text-gray-600 text-lg font-medium">
//             Total Amount
//           </span>
//           <span className="text-green-700 text-3xl font-extrabold mt-1">
//             ₹{totalAmount.toLocaleString()}
//           </span>
//         </div>

//         {/* 💰 Payment Buttons */}
//         <div className="space-y-4">
//           <button
//             onClick={() => {
//               setMethod("UPI");
//               setShowModal(true);
//             }}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold shadow transition-transform hover:scale-[1.02]"
//           >
//             <Smartphone size={22} /> Pay with UPI
//           </button>

//           <button
//             onClick={() => {
//               setMethod("Card");
//               setShowModal(true);
//             }}
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold shadow transition-transform hover:scale-[1.02]"
//           >
//             <CreditCard size={22} /> Pay with Card
//           </button>

//           <button
//             onClick={() => {
//               setMethod("Cash on Delivery");
//               setShowModal(true);
//             }}
//             className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold shadow transition-transform hover:scale-[1.02]"
//           >
//             <Wallet size={22} /> Cash on Delivery
//           </button>
//         </div>

//         {/* 🔒 Footer */}
//         <p className="text-center text-gray-500 text-sm mt-6">
//           Secure Payment powered by{" "}
//           <span className="font-semibold text-green-700">
//             POS Billing System
//           </span>{" "}
//           🔒
//         </p>
//       </div>

//       {/* 💳 Payment Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-sm relative">
//             {/* ❌ Close */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
//             >
//               <XCircle size={22} />
//             </button>

//             {/* 💳 Header */}
//             <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
//               {method}
//             </h2>

//             {/* 💡 UPI Form */}
//             {method === "UPI" && (
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Enter your UPI ID (e.g. name@upi)"
//                   className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//               </div>
//             )}

//             {/* 💳 Card Form */}
//             {method === "Card" && (
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
//                 />
//                 <div className="flex gap-3">
//                   <input
//                     type="text"
//                     placeholder="MM/YY"
//                     className="w-1/2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="CVV"
//                     className="w-1/2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Name on Card"
//                   className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
//                 />
//               </div>
//             )}

//             {/* 🏠 Cash on Delivery Form */}
//             {method === "Cash on Delivery" && (
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2">
//                   <Home className="text-green-600" size={18} />
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
//                   />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin className="text-green-600" size={18} />
//                   <input
//                     type="text"
//                     placeholder="Full Address"
//                     className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
//                   />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone className="text-green-600" size={18} />
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* ✅ Confirm Button */}
//             <button
//               onClick={handleConfirmPayment}
//               className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow transition-transform hover:scale-[1.02]"
//             >
//               Confirm ₹{totalAmount.toLocaleString()}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;

// // With Payment Gateway

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CreditCard,
  Smartphone,
  Wallet,
  ArrowLeft,
  XCircle,
  CheckCircle,
  MapPin,
  Home,
  Phone,
  Loader2,
} from "lucide-react";
// import axios from "axios";
import api from "../api";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const totalAmount = location.state?.total || 0;
  const cartItems = location.state?.cartItems || [];
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // ========================================================
  // 1️⃣ VERIFY PAYMENT AFTER SUCCESSFUL RAZORPAY POPUP
  // ========================================================
  const verifyPayment = async (response) => {
    try {
      setIsProcessing(true);

      const res = await api.post(
        "/api/payment/verify-and-create",
        {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,

          totalAmount,
          method,
          items: cartItems.map((i) => ({
            productId: i.id,
            qty: i.qty,
            price: i.price,
          })),
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );

      if (res.data.status === "SUCCESS") {
        navigate("/bill", {
          state: { totalAmount, method, cartItems },
        });
      }
    } catch (err) {
      alert("Payment verification failed!");
    } finally {
      setIsProcessing(false);
    }
  };

  // ========================================================
  // 2️⃣ START RAZORPAY PAYMENT
  // ========================================================
  const startOnlinePayment = async () => {
    try {
      setIsProcessing(true);

      const { data } = await api.post(
        "/api/payment/create",
        { amount: totalAmount },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );

      const options = {
        key: data.key,
        order_id: data.orderId,
        amount: data.amount,
        currency: "INR",
        name: "POS Billing System",
        handler: verifyPayment,
        theme: { color: "#16a34a" }, // nice green
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment create error:", err?.response?.data || err);
      alert("Failed to start online payment");
    } finally {
      // remove loader once Razorpay popup is triggered
      setIsProcessing(false);
    }
  };

  // ========================================================
  // 3️⃣ COD ORDER
  // ========================================================
  const placeCodOrder = async () => {
    try {
      setIsProcessing(true);

      await api.post(
        "/api/orders/create",
        {
          paymentMethod: "Cash on Delivery",
          totalAmount,
          items: cartItems.map((i) => ({
            productId: i.id,
            productName: i.name,   // REQUIRED
            price: i.price,
            quantity: i.qty,       // MATCH BACKEND

          })),
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );

      navigate("/bill", {
        state: { totalAmount, method: "Cash on Delivery", cartItems },
      });
    } catch (err) {
      // 🔥 FIX: Capture backend stock error message
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.response?.data ||
        "COD Order failed";

      alert(msg); // 👈 you said you only want alert, not toast
      console.log("COD ERROR:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  // ========================================================
  // 4️⃣ CONFIRM ACTION INSIDE MODAL
  // ========================================================
  const handleConfirmPayment = () => {
    setShowModal(false);

    if (method === "UPI" || method === "Card") {
      startOnlinePayment();
    } else {
      placeCodOrder();
    }
  };

  // Helper for method subtitle text
  const methodSubtitle = () => {
    if (method === "UPI") return "You will be redirected to a secure UPI gateway.";
    if (method === "Card") return "Use any debit / credit card via secure gateway.";
    if (method === "Cash on Delivery")
      return "Pay in cash at the time of delivery.";
    return "";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 overflow-hidden">

      {/* Subtle gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -right-20 w-64 h-64 bg-green-300/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/cart")}
        className="absolute top-5 left-4 md:left-8 text-gray-500 hover:text-gray-800 flex items-center gap-1 text-sm md:text-base bg-white/60 px-3 py-1.5 rounded-full shadow-sm backdrop-blur"
      >
        <ArrowLeft size={16} /> Back to Cart
      </button>

      {/* 💳 Main Card */}
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/70 transform transition-all duration-300 hover:shadow-[0_20px_60px_rgba(22,163,74,0.25)]">
        {/* Small glowing bar */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-500" />

        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-6 sm:mb-8 tracking-tight">
          Secure Payment
          <span className="block text-base font-medium text-emerald-600 mt-1">
            Complete your order in one step
          </span>
        </h1>

        {/* 🧾 Summary */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 sm:p-5 rounded-2xl mb-6 border border-emerald-100 flex flex-col items-center shadow-inner">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-emerald-600" size={28} />
            <span className="text-gray-700 text-sm sm:text-base font-medium">
              Total Payable
            </span>
          </div>
          <span className="text-emerald-700 text-3xl sm:text-4xl font-extrabold tracking-tight">
            ₹{totalAmount.toLocaleString()}
          </span>
          <span className="mt-1 text-xs sm:text-sm text-gray-500">
            Taxes & charges included (if any)
          </span>
        </div>

        {/* 💰 Payment Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => {
              setMethod("UPI");
              setShowModal(true);
            }}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-2xl flex items-center justify-between px-4 text-sm sm:text-base font-semibold shadow-lg shadow-sky-500/30 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/20">
                <Smartphone size={20} />
              </div>
              <span>Pay with UPI</span>
            </div>
            <span className="text-xs text-blue-50">GPay / PhonePe / BHIM</span>
          </button>

          <button
            onClick={() => {
              setMethod("Card");
              setShowModal(true);
            }}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 rounded-2xl flex items-center justify-between px-4 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/30 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/20">
                <CreditCard size={20} />
              </div>
              <span>Pay with Card</span>
            </div>
            <span className="text-xs text-indigo-50">Visa / MasterCard / Rupay</span>
          </button>

          <button
            onClick={() => {
              setMethod("Cash on Delivery");
              setShowModal(true);
            }}
            className="w-full bg-gradient-to-r from-slate-800 to-gray-900 hover:from-black hover:to-neutral-800 text-white py-3 rounded-2xl flex items-center justify-between px-4 text-sm sm:text-base font-semibold shadow-lg shadow-gray-700/40 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/10">
                <Wallet size={20} />
              </div>
              <span>Cash on Delivery</span>
            </div>
            <span className="text-xs text-gray-200">Pay at the counter / delivery</span>
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-5">
          Payments are processed securely by{" "}
          <span className="font-semibold text-emerald-600">POS Billing System</span>{" "}
          with bank-grade encryption 🔒
        </p>
      </div>

      {/* =================================================
          ✔ PREMIUM MODAL
      ================================================= */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={() => !isProcessing && setShowModal(false)}
          />

          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-[92%] max-w-sm p-6 sm:p-7 animate-[fadeIn_0.2s_ease-out,scaleIn_0.18s_ease-out]">
            {/* Close */}
            <button
              onClick={() => !isProcessing && setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
              disabled={isProcessing}
            >
              <XCircle size={22} />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                {method === "UPI" && <Smartphone size={20} />}
                {method === "Card" && <CreditCard size={20} />}
                {method === "Cash on Delivery" && <Wallet size={20} />}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {method || "Payment"}
                </h2>
                <p className="text-xs text-gray-500">{methodSubtitle()}</p>
              </div>
            </div>

            {/* COD FORM ONLY */}
            {method === "Cash on Delivery" && (
              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2.5">
                  <Home className="text-emerald-600" size={18} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-none outline-none text-sm"
                  />
                </div>

                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2.5">
                  <MapPin className="text-emerald-600" size={18} />
                  <input
                    type="text"
                    placeholder="Full Address"
                    className="w-full bg-transparent border-none outline-none text-sm"
                  />
                </div>

                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2.5">
                  <Phone className="text-emerald-600" size={18} />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-none outline-none text-sm"
                  />
                </div>
              </div>
            )}

            {/* Info for online methods (no inputs) */}
            {(method === "UPI" || method === "Card") && (
              <div className="mt-4 text-xs text-gray-500 bg-emerald-50 border border-emerald-100 rounded-2xl px-3 py-2">
                ✅ You&apos;ll be redirected to a secure payment page.
                We never store your card or UPI details.
              </div>
            )}

            {/* Confirm Button */}
            <button
              onClick={handleConfirmPayment}
              disabled={isProcessing}
              className={`mt-6 w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-md transition-all
                ${isProcessing
                  ? "bg-emerald-500/70 text-white cursor-wait"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white active:scale-[0.98]"
                }`}
            >
              {isProcessing && <Loader2 size={18} className="animate-spin" />}
              <span>
                {isProcessing
                  ? "Processing..."
                  : `Confirm ₹${totalAmount.toLocaleString()}`}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* GLOBAL LOADER OVERLAY (extra safe) */}
      {isProcessing && (
        <div className="pointer-events-none fixed inset-0 z-[9998] flex items-end justify-center pb-8 sm:pb-10">
          <div className="bg-black/70 text-white text-xs sm:text-sm px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
            <Loader2 size={16} className="animate-spin" />
            <span>Processing your secure payment…</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
