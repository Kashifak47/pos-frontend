// //For Only Frontend Use
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/useAuth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    if (!email || !password) {
//       toast.warn("Please fill all fields!");
//       return;
//     }

//     if (email === "admin@pos.com" && password === "admin123") {
//       login(email, password);
//       toast.success("Welcome Admin!" );
//       setTimeout(() => navigate("/admin-dashboard"), 1000);
//     } else if (email === "customer@pos.com" && password === "customer123") {
//       login(email, password);
//       toast.success("Welcome Customer!");
//       setTimeout(() => navigate("/customer-dashboard"), 1000);
//     } else {
//       toast.error("User not valid! Please try again or register.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="border w-full p-2 mb-4 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border w-full p-2 mb-4 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-green-600 w-full py-2 text-white rounded hover:bg-green-700"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-green-600 font-semibold">
//             Register
//           </Link>
//           {/* Toast container for notifications */}
//       <ToastContainer position="top-center" autoClose={2000} />
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // *** With Spring Boot Backend ***

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/UseAuth";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.warn("Please fill all fields!");
//       return;
//     }

//     try {
//       const user = await login(email, password);

//       toast.success("Login successful!");

//       setTimeout(() => {
//         if (user.role === "ADMIN") navigate("/admin-dashboard");
//         else navigate("/customer-dashboard");
//       }, 800);

//     } catch (err) {
//       toast.error("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="border w-full p-2 mb-4 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="border w-full p-2 mb-4 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="bg-green-600 w-full py-2 text-white rounded hover:bg-green-700"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-green-600 font-semibold">
//             Register
//           </Link>
//         </p>

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     </div>
//   );
// };

// export default Login;

// // With Loader

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // 🔥 NEW

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Please fill all fields!");
      return;
    }

    try {
      setLoading(true); // 🔥 SHOW LOADER

      const user = await login(email, password);

      toast.success("Login successful!");

      setTimeout(() => {
        if (user.role === "ADMIN") navigate("/admin-dashboard");
        else navigate("/customer-dashboard");
      }, 700);

    } catch (err) {
      toast.error("Invalid email or password!");
    } finally {
      setLoading(false); // 🔥 HIDE LOADER
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative">

      {/* 🔥 PREMIUM FULL SCREEN LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">

          <div className="relative">
            {/* Outer spinning glow ring */}
            <div className="w-20 h-20 border-4 border-indigo-500/30 border-t-indigo-600 rounded-full animate-spin"></div>

            {/* Inner pulsing circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-full animate-ping"></div>
            </div>
          </div>

        </div>
      )}

      {/* CARD */}
      <div className="
        w-full max-w-md bg-white p-8 rounded-2xl shadow-xl 
        border border-slate-200
      ">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Login Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="pro-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="pro-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold 
              hover:bg-indigo-700 transition-all shadow-md
            "
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-600 mt-5 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </Link>
        </p>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default Login;




// // Without loader

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/UseAuth";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.warn("Please fill all fields!");
//       return;
//     }

//     try {
//       const user = await login(email, password);
//       toast.success("Login successful!");

//       setTimeout(() => {
//         if (user.role === "ADMIN") navigate("/admin-dashboard");
//         else navigate("/customer-dashboard");
//       }, 700);

//     } catch (err) {
//       toast.error("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

//       {/* CARD */}
//       <div className="
//         w-full max-w-md bg-white p-8 rounded-2xl shadow-xl 
//         border border-slate-200
//       ">
//         <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
//           Login Page
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           <input
//             type="email"
//             placeholder="Email"
//             className="pro-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="pro-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="
//               w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold 
//               hover:bg-indigo-700 transition-all shadow-md
//             "
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-slate-600 mt-5 text-sm">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     </div>
//   );
// };

// export default Login;

