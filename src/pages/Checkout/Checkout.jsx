import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout.jsx";
import api from "../../api/api.js";
import {
  CheckoutContainer,
  CheckOuts,
  SuccessContainer,
  SuccessIcon,
  PaymentSuccess,
  GreetMsg,
} from "./styled";

const Checkout = () => {
  const navigate = useNavigate();
  const hasPlacedRef = useRef(false); // 👈 prevents double execution

  useEffect(() => {
    async function placeOrder() {
      try {
        const username = localStorage.getItem("username") || "demo_user";
        const cartKey = `cartList_${username}`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        console.log("🛒 Cart:", cart);

        if (cart.length === 0) {
          console.warn("⚠ Cart is empty — not placing order.");
          return;
        }

        const items = cart.map((item) => ({
          product_id: item.id,
          quantity: Number(item.count ?? item.cartQuantity ?? 1),
          price: Number(item.price),
        }));

        const total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        console.log("📦 Sending items:", items, "Total:", total);

        const res = await api.post("/orders", { items, total });

        console.log("✅ Order API response:", res.data);

        const orderId = res.data.orderId;

        localStorage.removeItem(cartKey);
        navigate(`/orders/${orderId}`);
      } catch (err) {
        console.error(
          "❌ Order creation failed:",
          err.response?.data || err.message
        );
      }
    }

    if (!hasPlacedRef.current) {
      hasPlacedRef.current = true;
      placeOrder();
    }
  }, [navigate]);

  return (
    <MainLayout>
      <CheckoutContainer>
        <CheckOuts>
          <SuccessContainer>
            <SuccessIcon />
          </SuccessContainer>
          <PaymentSuccess>Processing Order...</PaymentSuccess>
          <GreetMsg>Please wait while we confirm your order.</GreetMsg>
        </CheckOuts>
      </CheckoutContainer>
    </MainLayout>
  );
};

export default Checkout;
