// //For Only Frontend Use
// import React, { useEffect, useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";
// import { ShoppingCart, Users, DollarSign } from "lucide-react";

// const Dashboard = () => {
//   const [animatedStats, setAnimatedStats] = useState({
//     sales: 0,
//     orders: 0,
//     customers: 0,
//   });

//   const stats = [
//     {
//       title: "Total Sales",
//       value: 52340,
//       format: (v) => `₹${v.toLocaleString()}`,
//       icon: <DollarSign className="text-emerald-500" size={26} />,
//       color: "from-emerald-50 to-emerald-100",
//       chartColor: "#10b981",
//       miniData: [400, 800, 600, 1200, 900, 1500, 1300],
//       key: "sales",
//     },
//     {
//       title: "Total Orders",
//       value: 123,
//       format: (v) => v.toLocaleString(),
//       icon: <ShoppingCart className="text-blue-500" size={26} />,
//       color: "from-blue-50 to-blue-100",
//       chartColor: "#3b82f6",
//       miniData: [50, 80, 60, 90, 70, 100, 95],
//       key: "orders",
//     },
//     {
//       title: "Customers",
//       value: 47,
//       format: (v) => v.toLocaleString(),
//       icon: <Users className="text-violet-500" size={26} />,
//       color: "from-violet-50 to-violet-100",
//       chartColor: "#8b5cf6",
//       miniData: [10, 20, 15, 25, 30, 28, 35],
//       key: "customers",
//     },
//   ];

//   const salesData = [
//     { name: "Mon", sales: 1200 },
//     { name: "Tue", sales: 1800 },
//     { name: "Wed", sales: 900 },
//     { name: "Thu", sales: 2200 },
//     { name: "Fri", sales: 1500 },
//     { name: "Sat", sales: 2500 },
//     { name: "Sun", sales: 2000 },
//   ];

//   // 💫 Animate numbers on load
//   useEffect(() => {
//     const duration = 1500;
//     const start = performance.now();

//     const step = (now) => {
//       const progress = Math.min((now - start) / duration, 1);
//       setAnimatedStats({
//         sales: Math.floor(52340 * progress),
//         orders: Math.floor(123 * progress),
//         customers: Math.floor(47 * progress),
//       });
//       if (progress < 1) requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//   }, []);

//   return (
//     <div className="h-[calc(100vh-64px)] flex flex-col bg-gray-50 overflow-hidden select-none">
//       {/* 🧭 Header */}
//       <div className="p-6 pb-6 flex items-center justify-between bg-gray-50  backdrop-blur-sm">
//         <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
//           <span className="text-emerald-500">📈</span> Dashboard Overview
//         </h1>
//         <span className="text-xs md:text-sm text-gray-500 bg-white/70 border rounded-full px-3 py-1 shadow-sm">
//           Updated just now
//         </span>
//       </div>

//       {/* 🌟 Stats Cards */}
//       <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
//         {stats.map((item, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-br ${item.color} border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between backdrop-blur-sm`}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <div>
//                 <p className="text-gray-500 font-semibold text-xs uppercase tracking-wide">
//                   {item.title}
//                 </p>
//                 <h3 className="text-3xl font-bold text-gray-800 mt-1">
//                   {item.format(animatedStats[item.key])}
//                 </h3>
//               </div>
//               <div className="bg-white p-3 rounded-xl shadow-sm ring-1 ring-gray-100">
//                 {item.icon}
//               </div>
//             </div>

//             {/* 📊 Mini Chart */}
//             <div className="h-12">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                   data={item.miniData.map((v, i) => ({ index: i, value: v }))}
//                 >
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke={item.chartColor}
//                     strokeWidth={2.5}
//                     dot={false}
//                     isAnimationActive={true}
//                     animationDuration={1000}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 📊 Main Chart Section */}
//       <div className="flex-1 p-6 pt-2">
//         <div className="bg-white rounded-2xl shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
//           <div className="flex items-center justify-between px-6 pt-6">
//             <h2 className="text-xl font-semibold text-gray-800">
//               Weekly Sales Summary
//             </h2>
//             <span className="text-sm text-gray-500">Last 7 Days</span>
//           </div>

//           <div className="flex-1 px-6 pb-6">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart
//                 data={salesData}
//                 margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
//               >
//                 <defs>
//                   <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
//                     <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
//                 <YAxis tick={{ fill: "#6b7280" }} />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "white",
//                     borderRadius: "10px",
//                     border: "1px solid #e5e7eb",
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="sales"
//                   stroke="#10b981"
//                   fillOpacity={1}
//                   fill="url(#colorSales)"
//                   strokeWidth={3}
//                   isAnimationActive={true}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// // *** With Spring Boot Backend ***

import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../api";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { ShoppingCart, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [animatedStats, setAnimatedStats] = useState({
    sales: 0,
    orders: 0,
    customers: 0,
  });

  const [weeklySales, setWeeklySales] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchDashboardStats = async () => {
    try {
      const res = await api.get(
        "/api/admin/dashboard/stats",
        {
          headers: { Authorization: `Basic ${user.token}` },
        }
      );

      const { totalSales, totalOrders, totalCustomers } = res.data;
      animateNumbers(totalSales, totalOrders, totalCustomers);
    } catch (error) {
      console.log("Stats error:", error);
    }
  };

  const fetchWeeklySales = async () => {
    try {
      const res = await api.get(
        "/api/admin/dashboard/weekly-sales",
        {
          headers: { Authorization: `Basic ${user.token}` },
        }
      );

      console.log("WEEKLY DATA FROM BACKEND:", res.data);

      const formatted = res.data.map((item) => ({
        name: item.day,
        sales: item.sales,
      }));

      setWeeklySales(formatted);
    } catch (error) {
      console.log("Weekly sales error:", error);
    }
  };

  const animateNumbers = (sales, orders, customers) => {
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      setAnimatedStats({
        sales: Math.floor(sales * progress),
        orders: Math.floor(orders * progress),
        customers: Math.floor(customers * progress),
      });

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    fetchDashboardStats();
    fetchWeeklySales();
  }, []);

  const stats = [
    {
      title: "Total Sales",
      value: animatedStats.sales,
      format: (v) => `₹${v.toLocaleString()}`,
      icon: <DollarSign className="text-emerald-500" size={26} />,
      color: "from-emerald-50 to-emerald-100",
      chartColor: "#10b981",
      miniData: [400, 800, 600, 1200, 900, 1500, 1300],
    },
    {
      title: "Total Orders",
      value: animatedStats.orders,
      format: (v) => v.toLocaleString(),
      icon: <ShoppingCart className="text-blue-500" size={26} />,
      color: "from-blue-50 to-blue-100",
      chartColor: "#3b82f6",
      miniData: [50, 80, 60, 90, 70, 100, 95],
    },
    {
      title: "Customers",
      value: animatedStats.customers,
      format: (v) => v.toLocaleString(),
      icon: <Users className="text-violet-500" size={26} />,
      color: "from-violet-50 to-violet-100",
      chartColor: "#8b5cf6",
      miniData: [10, 20, 15, 25, 30, 28, 35],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-y-auto">

      {/* Header */}
      <div className="px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
          📈 Dashboard Overview
        </h1>

        <span className="text-xs sm:text-sm text-gray-500 bg-white/70 border rounded-full px-3 py-1 shadow-sm">
          Updated just now
        </span>
      </div>

      {/* Stats Cards */}
      <div className="px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 flex flex-col`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 font-semibold text-xs uppercase">
                  {item.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
                  {item.format(item.value)}
                </h3>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
            </div>

            <div className="h-10 sm:h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={item.miniData.map((v, i) => ({ index: i, value: v }))}
                >
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={item.chartColor}
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Chart */}
      <div className="flex-1 px-4 sm:px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 w-full h-[360px] sm:h-[420px] p-4 sm:p-6 flex flex-col">

          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Weekly Sales Summary
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">
              Last 7 Days
            </span>
          </div>

          {/* SAFE RENDER — NO DATA = NO CHART BUG */}
          <div className="flex-1">
            {weeklySales.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklySales}>
                  <defs>
                    <linearGradient id="smoothFlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />

                  <Tooltip
                    contentStyle={{
                      background: "white",
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
                      padding: "10px",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#10b981"
                    fill="url(#smoothFlow)"
                    strokeWidth={3}
                    animationDuration={1800}
                    isAnimationActive
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                No weekly sales data available
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
