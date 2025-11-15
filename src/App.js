import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

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

import GlobalStyles from "./theme/GlobalStyles.js";
import { ThemeToggleButton } from "./theme/ThemeToggleButton.js";

function App() {
  const token = localStorage.getItem("jwt_token");

  /**
   * Global theme state.
   * UI theme is persisted so the user's preference survives page reloads.
   */
  const [theme, setTheme] = useState("light");

  // Load theme only once on initial mount.
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  /**
   * Toggle between light and dark mode.
   * Stored in localStorage to sync theme across refreshes.
   */
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <BrowserRouter>
        {/* Floating Theme Toggle */}
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </ThemeToggleButton>

        <Routes>
          {/* Auto-redirect authenticated users away from Login */}
          <Route
            exact
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />

          <Route exact path="/signup" element={<SignUp />} />

          {/* Auth-protected pages */}
          <Route exact path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route
            exact
            path="/cart"
            element={<ProtectedRoute Component={Cart} />}
          />

          <Route
            exact
            path="/Checkout"
            element={<ProtectedRoute Component={Checkout} />}
          />

          {/* Fallback route for unmatched URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
