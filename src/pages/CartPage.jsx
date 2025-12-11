// Old Version
// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Minus, Plus, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CartPage = () => {
//   const { cart, updateQty, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   // 🧾 Calculate total
//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   // ✅ Handle checkout
//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }
//     toast.success("Checkout successful! 🎉");
//     // clearCart();
//     // Inside handleCheckout() before navigate
//     setTimeout(() => {
//     navigate("/payment", { state: { total, cartItems: cart } }); // ✅ pass full cart
//   }, 1500);

//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-50">
//       {/* 🔝 Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
//           <ShoppingBag className="text-green-600" size={28} />
//           Your Cart 🛍️
//         </h1>
//         <button
//           onClick={() => navigate("/customer-dashboard")}
//           className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition font-medium"
//         >
//           ← Back to Dashboard
//         </button>
//       </div>

//       {cart.length === 0 ? (
//         <div className="text-center py-20">
//           <p className="text-gray-500 text-lg">Your cart is empty.</p>
//         </div>
//       ) : (
//         <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 py-4 last:border-b-0"
//             >
//               {/* 🖼️ Product Info */}
//               <div className="flex items-center gap-4 w-full sm:w-auto">
//                 <img
//                   src={
//                     item.image ||
//                     "https://via.placeholder.com/60?text=🍔" // fallback icon
//                   }
//                   alt={item.name}
//                   className="w-14 h-14 rounded-lg object-cover border border-gray-200"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h2>
//                   <p className="text-gray-500 text-sm">
//                     ₹{item.price} each •{" "}
//                     <span
//                       className={`${item.qty > 10
//                           ? "text-green-600"
//                           : item.qty > 5
//                             ? "text-yellow-500"
//                             : "text-red-500"
//                         } font-medium`}
//                     >
//                       {item.qty > 10
//                         ? "In Stock"
//                         : item.qty > 5
//                           ? "Limited"
//                           : "Low Stock"}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {/* Quantity + Actions */}
//               <div className="flex items-center gap-4 mt-3 sm:mt-0">
//                 <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
//                   <button
//                     onClick={() => updateQty(item.id, -1)}
//                     className="text-gray-700 hover:text-green-600 transition"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="font-semibold text-gray-800">{item.qty}</span>
//                   <button
//                     onClick={() => updateQty(item.id, 1)}
//                     className="text-gray-700 hover:text-green-600 transition"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* 💰 Total + Checkout */}
//           <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
//             <div className="text-lg font-semibold text-gray-800">
//               Total:{" "}
//               <span className="text-green-600 text-2xl font-bold">
//                 ₹{total}
//               </span>
//             </div>

//             <button
//               onClick={handleCheckout}
//               className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all"
//             >
//               Proceed to Checkout →
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-center" autoClose={2000} />
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Checkout successful! 🎉");

    setTimeout(() => {
      navigate("/payment", { state: { total, cartItems: cart } });
    }, 1500);
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-8 gap-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          <ShoppingBag className="text-green-600" size={28} />
          Your Cart 🛍️
        </h1>

        <button
          onClick={() => navigate("/customer-dashboard")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition font-medium w-full sm:w-auto text-center"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 border border-gray-100">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 py-4 last:border-b-0"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/60?text=🍔"
                  }
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-gray-200"
                />

                <div>
                  <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    ₹{item.price} each •{" "}
                    <span
                      className={`${
                        item.qty > 10
                          ? "text-green-600"
                          : item.qty > 5
                          ? "text-yellow-500"
                          : "text-red-500"
                      } font-medium`}
                    >
                      {item.qty > 10
                        ? "In Stock"
                        : item.qty > 5
                        ? "Limited"
                        : "Low Stock"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Quantity + Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                {/* Quantity Control */}
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold text-gray-900 min-w-[20px] text-center">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total + Checkout */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="text-xl font-semibold text-gray-800">
              Total:{" "}
              <span className="text-green-600 text-3xl font-bold">
                ₹{total}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all w-full sm:w-auto text-center"
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default CartPage;

