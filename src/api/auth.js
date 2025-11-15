// Handles user registration request
export const registerUser = async (userDetails) => {
  const API_URL = process.env.REACT_APP_API_URL;

  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails), // send JSON payload
  });
};

// Handles user login request
export const loginUser = async (userDetails) => {
  const API_URL = process.env.REACT_APP_API_URL;

  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails), // send JSON payload
  });
};
