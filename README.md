# POS Billing System (Full Stack)

A full-stack **Point of Sale (POS) Billing System** built with **React (Vite)** and **Spring Boot**.  
This application provides product management, billing, inventory control, authentication, and secure online payments using **Razorpay**.

The project is designed to simulate a **real-world retail POS system** and is production-ready.

---

## Live Demo

- Full Stack POS System: https://pos-by-kashif.vercel.app  
  _(Hosted on free tier — may take a few seconds to wake up)_

---

## Features

### Authentication
- User registration and login
- JWT-based authentication
- Role-based access control

### POS & Billing
- Add products to cart
- Quantity and price calculation
- Order creation and billing workflow

### Inventory Management
- Product CRUD operations
- Stock management
- Prevents billing when stock is insufficient

### Online Payments
- Razorpay integration
- Payment order creation on backend
- Secure payment verification
- No secret keys exposed on frontend

### Production Ready
- Environment-based configuration
- CORS configured for local and production
- Backend uptime monitoring
- SPA routing support on deployment

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Spring Boot
- Spring Security
- Basic Auth
- Hibernate / JPA

### Database
- MySQL (Clever Cloud)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Clever Cloud
- Uptime Monitoring: UptimeRobot

