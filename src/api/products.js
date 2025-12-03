// src/api/products.js
import Cookies from "js-cookie";

/**
 * Fetch products with optional filters + pagination.
 */
export const fetchProducts = async (queryString = "") => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = Cookies.get("jwt_token");

  return fetch(`${API_URL}/api/products?${queryString}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * Fetch a single product by ID.
 */
export const fetchProductDetails = async (id) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = Cookies.get("jwt_token");

  return fetch(`${API_URL}/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * ✅ ✅ FIXED: Fetch similar products with pagination support
 * (This was the missing part causing similar products to not render)
 */
export const fetchSimilarProducts = async (category) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = Cookies.get("jwt_token");

  return fetch(
    `${API_URL}/api/products?category=${encodeURIComponent(
      category
    )}&page=1&limit=6`,   // ✅ PAGINATION ADDED
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
