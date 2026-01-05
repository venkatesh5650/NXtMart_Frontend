import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";

import SignUp from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import OrderDetails from "./pages/Orders/OrderDetails.jsx";
import OrderList from "./pages/Orders/OrderList.jsx";
import AdminOrders from "./pages/AdminOrders/AdminOrders";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import AdminOrderDetails from "./pages/AdminOrders/AdminOrderDetails";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers/AdminUsers";

import GlobalStyles from "./theme/GlobalStyles.js";
import { ThemeToggleButton } from "./theme/ThemeToggleButton.js";

function App() {
  const token = Cookies.get("jwt_token");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/health").catch(() => {});
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </ThemeToggleButton>

        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace /> : <Login />}
          />

          <Route path="/signup" element={<SignUp />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="products"
              element={
                <ProtectedRoute role="ADMIN" Component={AdminProducts} />
              }
            />
            <Route
              path="orders"
              element={<ProtectedRoute role="ADMIN" Component={AdminOrders} />}
            />
            <Route
              path="orders/:id"
              element={
                <ProtectedRoute role="ADMIN" Component={AdminOrderDetails} />
              }
            />
            <Route
              path="users"
              element={<ProtectedRoute role="ADMIN" Component={AdminUsers} />}
            />
          </Route>

          {/* User routes */}
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ProtectedRoute Component={Cart} />} />
          <Route
            path="/orders"
            element={<ProtectedRoute Component={OrderList} />}
          />
          <Route
            path="/orders/:id"
            element={<ProtectedRoute Component={OrderDetails} />}
          />
          <Route
            path="/checkout"
            element={<ProtectedRoute Component={Checkout} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
