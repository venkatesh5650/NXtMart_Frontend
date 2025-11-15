// src/api/products.js
import Cookies from "js-cookie";

/**
 * Fetch products with optional filters.
 * Keeping this API layer separate improves scalability and testability.
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
 * Centralizing fetch logic avoids duplication across components.
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
 * Fetch similar products belonging to the same category.
 * Encapsulated API utility ensures consistent token usage.
 */
export const fetchSimilarProducts = async (category) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = Cookies.get("jwt_token");

  return fetch(
    `${API_URL}/api/products?category=${encodeURIComponent(category)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
