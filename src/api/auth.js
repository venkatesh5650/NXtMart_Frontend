import Cookies from "js-cookie";

// Handles user registration request
export const registerUser = async (userDetails) => {
  const API_URL = process.env.REACT_APP_API_URL;

  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  });
};

// Handles user login request
export const loginUser = async (userDetails) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Login failed");
  }

  Cookies.set("jwt_token", data.jwt_token);

  return data;
};
