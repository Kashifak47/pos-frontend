// // Without Payment Gateway
// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { CheckCircle, ArrowLeft, Download } from "lucide-react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { useCart } from "../context/CartContext";

// const BillPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { clearCart } = useCart();

//     const { totalAmount, method, cartItems = [] } = location.state || {
//         totalAmount: 0,
//         method: "N/A",
//         cartItems: [],
//     };

//     useEffect(() => {
//         clearCart(); // ✅ Clears cart after payment
//     }, []);

//     // 🧾 Generate Thermal PDF Invoice
//     const generatePDF = () => {
//         const doc = new jsPDF({
//             orientation: "p",
//             unit: "mm",
//             format: [80, 200], // Thermal paper width
//         });

//         // Use monospaced font for clean alignment
//         doc.setFont("courier", "normal");
//         doc.setFontSize(10);

//         // === HEADER ===
//         doc.text("******************************", 40, 8, { align: "center" });
//         doc.setFont("courier", "bold");
//         doc.text("POS BILLING SYSTEM", 40, 13, { align: "center" });
//         doc.setFont("courier", "normal");
//         doc.text("Thank you for shopping with us!", 40, 18, { align: "center" });
//         doc.text("******************************", 40, 23, { align: "center" });

//         // === BILL INFO ===
//         const dateStr = new Date().toLocaleString();
//         doc.setFontSize(9);
//         doc.text(`Invoice No: INV-${Date.now().toString().slice(-5)}`, 5, 30);
//         doc.text(`Date: ${dateStr}`, 5, 35);
//         doc.text("----------------------------------------", 40, 40, { align: "center" });

//         // === TABLE HEADER ===
//         let y = 45;
//         doc.setFont("courier", "bold");
//         doc.text("#", 5, y);
//         doc.text("Item", 15, y);
//         doc.text("Qty", 45, y, { align: "right" });
//         doc.text("Total", 75, y, { align: "right" });
//         doc.setFont("courier", "normal");
//         doc.text("----------------------------------------", 40, y + 3, { align: "center" });

//         // === ITEMS ===
//         y += 8;
//         cartItems.forEach((item, index) => {
//             const name = item.name.length > 18 ? item.name.slice(0, 18) + "…" : item.name;
//             doc.text(`${index + 1}`, 5, y);
//             doc.text(name, 15, y);
//             doc.text(`${item.qty}`, 45, y, { align: "right" });
//             doc.text(`${(item.price * item.qty).toFixed(2)}`, 75, y, { align: "right" });
//             y += 6;
//         });

//         doc.text("----------------------------------------", 40, y, { align: "center" });
//         y += 6;

//         // === TOTALS ===
//         doc.setFont("courier", "bold");
//         doc.text("Subtotal", 45, y, { align: "right" });
//         doc.text(`${totalAmount.toFixed(2)}`, 75, y, { align: "right" });
//         y += 6;

//         doc.setFont("courier", "normal");
//         doc.text("Tax (0%)", 45, y, { align: "right" });
//         doc.text("0.00", 75, y, { align: "right" });
//         y += 6;

//         doc.setFont("courier", "bold");
//         doc.text("TOTAL", 45, y, { align: "right" });
//         doc.text(`${totalAmount.toFixed(2)}`, 75, y, { align: "right" });
//         y += 6;

//         doc.text("----------------------------------------", 40, y, { align: "center" });
//         y += 6;

//         // === PAYMENT INFO ===
//         doc.setFont("courier", "normal");
//         doc.text(`Payment Method: ${method}`, 5, y);
//         y += 8;

//         // === FOOTER ===
//         doc.text("******************************", 40, y, { align: "center" });
//         y += 6;
//         doc.setFont("courier", "bold");
//         doc.text("Thank you for visiting!", 40, y, { align: "center" });
//         y += 6;
//         doc.setFont("courier", "normal");
//         doc.text("Please come again!", 40, y, { align: "center" });
//         y += 6;
//         doc.text("******************************", 40, y, { align: "center" });

//         // === SAVE ===
//         doc.save(`Thermal_Invoice_${Date.now()}.pdf`);
//     };


//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
//             <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-green-200">
//                 {/* ✅ Success Header */}
//                 <div className="text-center mb-6">
//                     <CheckCircle className="text-green-600 mx-auto mb-2" size={48} />
//                     <h1 className="text-3xl font-extrabold text-gray-800">
//                         Payment Successful 🎉
//                     </h1>
//                     <p className="text-gray-500">Thank you for shopping with us!</p>
//                 </div>

//                 {/* 🧾 Bill Summary */}
//                 <div className="border-t border-b border-gray-200 py-4 my-4">
//                     <h2 className="text-xl font-bold text-gray-700 mb-3">Bill Summary</h2>
//                     <table className="w-full text-left border-collapse">
//                         <thead>
//                             <tr className="border-b border-gray-200 text-gray-600">
//                                 <th className="py-2">#</th>
//                                 <th className="py-2">Product</th>
//                                 <th className="py-2 text-center">Qty</th>
//                                 <th className="py-2 text-right">Price (₹)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartItems.length > 0 ? (
//                                 cartItems.map((item, index) => (
//                                     <tr
//                                         key={index}
//                                         className="border-b border-gray-100 hover:bg-green-50 transition"
//                                     >
//                                         <td className="py-2 text-gray-600">{index + 1}</td>
//                                         <td className="py-2 font-medium text-gray-800">
//                                             {item.name}
//                                         </td>
//                                         <td className="py-2 text-center text-gray-700">
//                                             {item.qty}
//                                         </td>
//                                         <td className="py-2 text-right text-gray-800">
//                                             ₹{(item.price * item.qty).toLocaleString()}
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="4" className="text-center py-3 text-gray-500">
//                                         No items found.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* 💵 Payment Info */}
//                 <div className="text-gray-700 space-y-2 mb-4">
//                     <p>
//                         Payment Method:{" "}
//                         <span className="font-semibold text-green-700">{method}</span>
//                     </p>
//                     <p>
//                         Total Amount:{" "}
//                         <span className="font-bold text-green-700 text-lg">
//                             ₹{totalAmount.toLocaleString()}
//                         </span>
//                     </p>
//                     <p>Date: {new Date().toLocaleString()}</p>
//                 </div>

//                 {/* 🔘 Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-3">
//                     <button
//                         onClick={generatePDF}
//                         className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
//                     >
//                         <Download size={18} /> Download Invoice (PDF)
//                     </button>

//                     <button
//                         onClick={() => navigate("/customer-dashboard")}
//                         className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
//                     >
//                         <ArrowLeft size={18} /> Back to Dashboard
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BillPage;

// // With Payment Gateway

import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useCart } from "../context/CartContext";

const BillPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { totalAmount, method, cartItems = [] } = location.state || {
    totalAmount: 0,
    method: "N/A",
    cartItems: [],
  };

  useEffect(() => {
    clearCart(); // Clear cart after payment
  }, []);

  // ⭐ AUTO-GENERATED BILL NUMBER
  const billNumber = useMemo(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = ("0" + (now.getMonth() + 1)).slice(-2);
    const dd = ("0" + now.getDate()).slice(-2);
    const rand = Math.floor(10000 + Math.random() * 90000);
    return `BB-${yyyy}${mm}${dd}-${rand}`;
  }, []);

  // ⭐ PDF GENERATION (invoice style untouched)
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: [80, 200],
    });

    doc.setFont("courier", "normal");
    doc.setFontSize(10);

    // === HEADER ===
    doc.text("******************************", 40, 8, { align: "center" });
    doc.setFont("courier", "bold");
    doc.text("POS BILLING SYSTEM", 40, 13, { align: "center" });
    doc.setFont("courier", "normal");
    doc.text("Thank you for shopping with us!", 40, 18, { align: "center" });
    doc.text("******************************", 40, 23, { align: "center" });

    // 💥 ONLY THIS IS ADDED (bill number)
    doc.text(`Invoice No: ${billNumber}`, 5, 28);

    const dateStr = new Date().toLocaleString();
    doc.text(`Date: ${dateStr}`, 5, 33);

    doc.text("----------------------------------------", 40, 38, { align: "center" });

    // === TABLE HEADER ===
    let y = 43;
    doc.setFont("courier", "bold");
    doc.text("#", 5, y);
    doc.text("Item", 15, y);
    doc.text("Qty", 45, y, { align: "right" });
    doc.text("Total", 75, y, { align: "right" });

    doc.setFont("courier", "normal");
    doc.text("----------------------------------------", 40, y + 3, { align: "center" });

    // === ITEMS ===
    y += 8;
    cartItems.forEach((item, index) => {
      const name = item.name.length > 18 ? item.name.slice(0, 18) + "…" : item.name;

      doc.text(`${index + 1}`, 5, y);
      doc.text(name, 15, y);
      doc.text(`${item.qty}`, 45, y, { align: "right" });
      doc.text(`${(item.price * item.qty).toFixed(2)}`, 75, y, { align: "right" });

      y += 6;
    });

    doc.text("----------------------------------------", 40, y, { align: "center" });
    y += 6;

    // === TOTAL ===
    doc.setFont("courier", "bold");
    doc.text("Subtotal", 45, y, { align: "right" });
    doc.text(`${totalAmount.toFixed(2)}`, 75, y, { align: "right" });

    y += 6;

    doc.setFont("courier", "normal");
    doc.text("Tax (0%)", 45, y, { align: "right" });
    doc.text("0.00", 75, y, { align: "right" });

    y += 6;

    doc.setFont("courier", "bold");
    doc.text("TOTAL", 45, y, { align: "right" });
    doc.text(`${totalAmount.toFixed(2)}`, 75, y, { align: "right" });

    y += 6;
    doc.text("----------------------------------------", 40, y, { align: "center" });

    y += 6;
    doc.setFont("courier", "normal");
    doc.text(`Payment Method: ${method}`, 5, y);

    y += 8;
    doc.text("******************************", 40, y, { align: "center" });
    y += 6;
    doc.setFont("courier", "bold");
    doc.text("Thank you for visiting!", 40, y, { align: "center" });
    y += 6;
    doc.setFont("courier", "normal");
    doc.text("Please come again!", 40, y, { align: "center" });
    y += 6;
    doc.text("******************************", 40, y, { align: "center" });

    doc.save(`Thermal_Invoice_${billNumber}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-green-200">

        {/* SUCCESS HEADER (UNCHANGED) */}
        <div className="text-center mb-6">
          <CheckCircle className="text-green-600 mx-auto mb-2" size={48} />
          <h1 className="text-3xl font-extrabold text-gray-800">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-500">Thank you for shopping with us!</p>
        </div>

        {/* ⭐ ONLY NEW THING ADDED ON PAGE (text only) */}
        <p className="text-gray-700 text-center mb-3 font-semibold">
          Invoice No: {billNumber}
        </p>

        {/* EVERYTHING BELOW IS ORIGINAL UI */}
        <div className="border-t border-b border-gray-200 py-4 my-4">
          <h2 className="text-xl font-bold text-gray-700 mb-3">Bill Summary</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-2">#</th>
                <th className="py-2">Product</th>
                <th className="py-2 text-center">Qty</th>
                <th className="py-2 text-right">Price (₹)</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-green-50 transition">
                    <td className="py-2 text-gray-600">{index + 1}</td>
                    <td className="py-2 font-medium text-gray-800">{item.name}</td>
                    <td className="py-2 text-center text-gray-700">{item.qty}</td>
                    <td className="py-2 text-right text-gray-800">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-3 text-gray-500">No items found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAYMENT INFO (UNCHANGED) */}
        <div className="text-gray-700 space-y-2 mb-4">
          <p>Payment Method: <span className="font-semibold text-green-700">{method}</span></p>
          <p>Total Amount: <span className="font-bold text-green-700 text-lg">₹{totalAmount.toLocaleString()}</span></p>
          <p>Date: {new Date().toLocaleString()}</p>
        </div>

        {/* BUTTONS (UNCHANGED) */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={generatePDF}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Download size={18} /> Download Invoice (PDF)
          </button>

          <button
            onClick={() => navigate("/customer-dashboard")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillPage;
