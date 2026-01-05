import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { FiEye } from "react-icons/fi";

import {
  Page,
  HeaderRow,
  AdminBadge,
  StatsRow,
  StatCard,
  StatLabel,
  StatValue,
  FilterRow,
  OrdersTable,
  StatusChip,
  TableWrapper,
  ActionButton,
} from "./styled";

const statusColors = {
  CREATED: "#94a3b8",
  PAID: "#3b82f6",
  PACKED: "#6366f1",
  SHIPPED: "#f59e0b",
  DELIVERED: "#16a34a",
  CANCELLED: "#dc2626",
};

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loadOrders = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/orders", {
        params: statusFilter === "ALL" ? {} : { status: statusFilter },
      });
      setOrders(res.data.orders || res.data || []);
    } catch {
      setError("Failed to load orders");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  if (loading) return <Page>Loading orders...</Page>;
  if (error) return <Page style={{ color: "red" }}>{error}</Page>;

  const total = orders.length;
  const pending = orders.filter((o) => o.status === "CREATED").length;
  const inProgress = orders.filter((o) =>
    ["PAID", "PACKED", "SHIPPED"].includes(o.status)
  ).length;

  return (
    <Page>
      <HeaderRow>
        <h1>Admin — Orders</h1>
        <AdminBadge>ADMIN MODE</AdminBadge>
      </HeaderRow>

      <StatsRow>
        <StatCard>
          <StatLabel>Total</StatLabel>
          <StatValue>{total}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Pending</StatLabel>
          <StatValue>{pending}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>In Progress</StatLabel>
          <StatValue>{inProgress}</StatValue>
        </StatCard>
      </StatsRow>

      <FilterRow>
        <label>Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="CREATED">Created</option>
          <option value="PAID">Paid</option>
          <option value="PACKED">Packed</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </FilterRow>

      <TableWrapper>
        <OrdersTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Status</th>
              <th>Total</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.username || "-"}</td>
                <td>
                  <StatusChip color={statusColors[o.status]}>
                    {o.status}
                  </StatusChip>
                </td>
                <td>₹{o.total}</td>
                <td>{new Date(o.updated_at).toLocaleString()}</td>
                <td>
                  <ActionButton
                    onClick={() => navigate(`/admin/orders/${o.id}`)}
                  >
                    <FiEye style={{ marginRight: 4 }} /> View
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </OrdersTable>
      </TableWrapper>
    </Page>
  );
}
