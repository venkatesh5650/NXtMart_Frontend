import { useParams, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import api from "../../api/api";
import {
  Page,
  Section,
  Title,
  Status,
  SummaryGrid,
  SummaryItem,
  ItemsTable,
  ActionsRow,
  ActionButton,
  TotalRow,
  BackButton,
} from "./detailsStyled";

const statusColors = {
  CREATED: "#94a3b8",
  PAID: "#3b82f6",
  PACKED: "#6366f1",
  SHIPPED: "#f59e0b",
  DELIVERED: "#16a34a",
  CANCELLED: "#dc2626",
};

const transitions = {
  CREATED: ["PAID", "CANCELLED"],
  PAID: ["PACKED", "CANCELLED"],
  PACKED: ["SHIPPED"],
  SHIPPED: ["DELIVERED"],
};

export default function AdminOrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [nextStatus, setNextStatus] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await api.get(`/admin/orders/${id}`);
      setOrder(res.data.order || res.data);
    } catch {
      setError("Failed to load order");
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus() {
    try {
      await api.put(`/admin/orders/${id}/status`, { status: nextStatus });
      setNextStatus("");
      load();
    } catch {
      setError("Failed to update status");
    }
  }

  if (error) return <Page style={{ color: "red" }}>{error}</Page>;
  if (!order) return <Page>Loading…</Page>;

  const total = order.items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <Page>
      <BackButton onClick={() => navigate("/admin/orders")}>
        ← Back to Orders
      </BackButton>

      <Title>Order #{order.id}</Title>

      <Section>
        <SummaryGrid>
          <SummaryItem>
            <span>Status</span>
            <Status color={statusColors[order.status]}>{order.status}</Status>
          </SummaryItem>
          <SummaryItem>
            <span>Total Amount</span>
            <b>₹{total}</b>
          </SummaryItem>
          <SummaryItem>
            <span>Items</span>
            <b>{order.items.length}</b>
          </SummaryItem>
        </SummaryGrid>
      </Section>

      <Section>
        <h3>Order Items</h3>
        <ItemsTable>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </ItemsTable>
        <TotalRow>Grand Total: ₹{total}</TotalRow>
      </Section>

      {transitions[order.status] && (
        <Section>
          <h3>Update Order Status</h3>
          <ActionsRow>
            <select
              value={nextStatus}
              onChange={(e) => setNextStatus(e.target.value)}
            >
              <option value="">Select next</option>
              {transitions[order.status].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ActionButton disabled={!nextStatus} onClick={updateStatus}>
              Update Status
            </ActionButton>
          </ActionsRow>
        </Section>
      )}
    </Page>
  );
}
