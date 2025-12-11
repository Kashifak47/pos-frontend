import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import {
  User,
  Mail,
  Shield,
  Edit,
  Lock,
  LogOut,
  ArrowLeft,
} from "lucide-react";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        No user data found.
      </div>
    );

  const handleBack = () => {
    if (user.role === "ADMIN") navigate("/admin-dashboard");
    else navigate("/customer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6 py-10">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 border border-green-100">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-5 left-5 flex items-center gap-1 text-sm text-green-600 hover:text-green-800 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-lg mb-4 border-4 border-white">
            <User size={50} className="text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
            {user.name || "User"}
          </h2>
          <p className="text-green-600 text-sm uppercase mt-1 tracking-wider font-medium">
            {user.role}
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-green-50 rounded-xl px-5 py-3 border border-green-100 hover:bg-green-100/70 transition">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-green-600" />
              <span className="text-gray-700 font-medium">Email</span>
            </div>
            <span className="text-gray-600">{user.email}</span>
          </div>

          <div className="flex items-center justify-between bg-green-50 rounded-xl px-5 py-3 border border-green-100 hover:bg-green-100/70 transition">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-green-600" />
              <span className="text-gray-700 font-medium">Role</span>
            </div>
            <span className="capitalize text-gray-600">{user.role}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-xl hover:shadow-lg transition-all duration-300">
            <Edit size={18} /> Edit
          </button>

          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-green-500 text-white py-2.5 rounded-xl hover:shadow-lg transition-all duration-300">
            <Lock size={18} /> Password
          </button>

          <button
            onClick={logout}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2.5 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-green-600 font-semibold">
            POS Billing System
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
