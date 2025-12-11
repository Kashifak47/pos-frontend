// //Authcontext wint only frontend auth
// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const login = (email, password) => {
//     // 🔹 Dummy login for now
//     const fakeUser =
//       email === "admin@pos.com"
//         ? { email, role: "ADMIN" }
//         : { email, role: "CUSTOMER" };

//     localStorage.setItem("user", JSON.stringify(fakeUser));
//     setUser(fakeUser);
//   };

//   const register = (email, password, role = "CUSTOMER") => {
//     // 🔹 Simple localStorage simulation
//     const newUser = { email, role };
//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// //*** With springboot authentication ***

/* @refresh reset */

import React, { createContext, useState } from "react";
// import axios from "axios";
import api from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    const res = await api.post("/api/users/login", {
      email,
      password,
    });

    if (!res.data.success) throw new Error("Invalid Login");

    const token = btoa(`${email}:${password}`);

    const loggedUser = { email, role: res.data.role, token };

    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return loggedUser;
  };

  const register = async (name, email, password, phone, address) => {
    await api.post("/api/users/register", {
      name,
      email,
      password,
      phone,
      address,
      role: "CUSTOMER",
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
