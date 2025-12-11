import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/UseAuth";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import CartPage from "./pages/CartPage";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/topbar";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import BillPage from "./pages/BillPage";
import { CartProvider } from "./context/CartContext";




const AdminLayout = () => (
  <div className="flex h-screen overflow-hidden">
    {/* Sidebar (fixed height, no scroll) */}
    <Sidebar />

    {/* Right section: Topbar + main content */}
    <div className="flex flex-col flex-1">
      {/* Topbar fixed/sticky */}
      <div className="sticky top-0 z-20">
        <Topbar />
      </div>

      {/* Scrollable main content area */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Routes>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/profile" element={<ProfilePage />} />  */}
          {/* ✅ Unknown admin URL */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </div>
);


const CustomerLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Topbar />
    <div className="p-6">
      <Routes>
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/bill" element={<BillPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} />  */}
         {/* ✅ Unknown customer URL */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </div>
);

const App = () => {
  const { user } = useAuth();

  return (
     <>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />

         {/* ✅ Standalone profile route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Protected (Admin + Customer) */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              {user?.role === "ADMIN" ? <AdminLayout /> : <CustomerLayout />}
            </ProtectedRoute>
          }
        />
        {/* ✅ Global fallback for any totally invalid URL */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <ToastContainer/> */}
    </>
  );
};

const Root = () => (
  <AuthProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </AuthProvider>
);

export default Root;

