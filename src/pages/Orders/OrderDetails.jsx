import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderTimeline from "../../components/OrderTimeline";
import api from "../../api/api.js";
import {
  Wrapper,
  HeaderRow,
  BackButton,
  Meta,
  SyncText,
  CancelButton,
  Section,
  Item,
  Total,
} from "./orderDetailsStyled";

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    let interval;

    async function fetchAll() {
      try {
        setSyncing(true);
        const [historyRes, orderRes] = await Promise.all([
          api.get(`/orders/${id}/history`),
          api.get(`/orders/${id}`),
        ]);

        setHistory(historyRes.data);
        setOrder(orderRes.data);

        const latest = historyRes.data.at(-1)?.to_status;
        if (latest === "DELIVERED" || latest === "CANCELLED")
          clearInterval(interval);
      } finally {
        setSyncing(false);
        setLoading(false);
      }
    }

    fetchAll();
    interval = setInterval(fetchAll, 5000);
    return () => clearInterval(interval);
  }, [id]);

  if (loading || !order) return <p>Loading order...</p>;

  const lastUpdate = history.at(-1)?.changed_at;
  const currentStatus = history.at(-1)?.to_status || "CREATED";

  const canCancel = ["CREATED", "PAID"].includes(currentStatus);

  const paymentStatus =
    currentStatus === "CREATED"
      ? "Pending"
      : currentStatus === "CANCELLED"
      ? "Refunded / Failed"
      : "Paid";

  const eta =
    currentStatus === "CREATED" || currentStatus === "PAID"
      ? "3 days"
      : currentStatus === "PACKED"
      ? "2 days"
      : currentStatus === "SHIPPED"
      ? "1 day"
      : currentStatus === "DELIVERED"
      ? "Delivered"
      : "—";

  async function cancelOrder() {
    await api.put(`/orders/${id}/status`, { status: "CANCELLED" });
  }

  return (
    <Wrapper>
      <HeaderRow>
        <h2>Order #{id}</h2>
        <BackButton onClick={() => navigate("/orders")}>
          ← Back to My Orders
        </BackButton>
      </HeaderRow>

      <Meta>
        <div>Status: <b>{currentStatus}</b></div>
        <div>Payment: {paymentStatus}</div>
        <div>Delivery ETA: {eta}</div>
        {lastUpdate && (
          <div>Updated: {new Date(lastUpdate).toLocaleString()}</div>
        )}
      </Meta>

      {syncing && <SyncText>Updating status...</SyncText>}

      <OrderTimeline history={history} />

      {canCancel && (
        <CancelButton onClick={cancelOrder}>Cancel Order</CancelButton>
      )}

      <Section>
        <h3>Order Items</h3>
        {order.items.map((item) => (
          <Item key={item.product_id}>
            <span>{item.name}</span>
            <span>{item.quantity} × ₹{item.price}</span>
            <span>₹ {item.quantity * item.price}</span>
          </Item>
        ))}
        <Total>Total: ₹ {order.total}</Total>
      </Section>
    </Wrapper>
  );
}
