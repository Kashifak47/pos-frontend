// //For Only Frontend Use
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/useAuth";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//     toast.warn("Please fill all fields!");
//     return;
//   }

//   try {
//     register(email, password, "CUSTOMER");
//     toast.success("Customer registered successfully!");
//     setEmail('')
//     setPassword('')
//   } catch (error) {
//     toast.error("Registration failed. Please try again.");
//   }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>
//         <ToastContainer position="top-center" autoClose={2000} />

//       </div>
//     </div>
//   );
// };

// export default Register;

// // *** With Spring Boot Backend ***

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/UseAuth";
// import { toast, ToastContainer } from "react-toastify";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { register } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !phone || !address || !email || !password) {
//       toast.warn("Please fill all fields!");
//       return;
//     }

//     try {
//       await register(name, email, password, phone, address);
//       toast.success("Registered successfully!");

//       // clear fields
//       setName("");
//       setPhone("");
//       setAddress("");
//       setEmail("");
//       setPassword("");

//     } catch (err) {
//       toast.error("Registration failed!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="border w-full p-2 mb-4 rounded"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Phone"
//             className="border w-full p-2 mb-4 rounded"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Address"
//             className="border w-full p-2 mb-4 rounded"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />

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

//           <button className="bg-green-600 w-full py-2 text-white rounded hover:bg-green-700">
//             Register
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address || !email || !password) {
      toast.warn("Please fill all fields!");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Please Enter Correct Phone Number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    try {
      await register(name, email, password, phone, address);
      toast.success("Registered successfully!");

      setName("");
      setPhone("");
      setAddress("");
      setEmail("");
      setPassword("");

    } catch (err) {
      toast.error("Registration failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

      <div className="
        w-full max-w-md bg-white p-8 rounded-2xl shadow-xl 
        border border-slate-200
      ">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="pro-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone"
            className="pro-input"
            value={phone}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // only digits
              setPhone(value);
            }}
          />

          <input
            type="text"
            placeholder="Address"
            className="pro-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

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
            Register
          </button>
        </form>

        <p className="text-center text-slate-600 mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default Register;
