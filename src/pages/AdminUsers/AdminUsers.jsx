import { useEffect, useState, useMemo } from "react";
import api from "../../api/api";
import {
  PageWrapper,
  Header,
  TableWrapper,
  Table,
  StatusBadge,
  FilterRow,
  SearchInput,
  HealthBadge,
  Tooltip,
  ActionButton,
  ModalOverlay,
  OrdersModalCard,
  OrdersList,
  OrdersRow,
  OrdersHeaderRow,
  ModalActions,
  StatsRow,
  StatCard,
  PaginationRow,
} from "./styled";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [search, setSearch] = useState("");

  const [orders, setOrders] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
    api.get("/admin/users").then((res) => setUsers(res.data || []));
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setSelectedUser(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const filtered = useMemo(() => {
    return users
      .filter((u) => {
        if (filter === "ACTIVE" && !u.active) return false;
        if (filter === "BLOCKED" && u.active) return false;
        if (role !== "ALL" && u.role !== role) return false;
        if (!u.email.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      })
      .sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];
        if (valA < valB) return sortDir === "asc" ? -1 : 1;
        if (valA > valB) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
  }, [users, filter, role, search, sortBy, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const getHealth = (u) => {
    if (u.role === "ADMIN") return { label: "System", color: "blue" };
    if (u.orders_count === 0) return { label: "Inactive", color: "gray" };
    if (u.total_spent > 10000) return { label: "High Value", color: "green" };
    if (u.orders_count > 5 && u.total_spent < 1000)
      return { label: "Risk", color: "red" };
    return { label: "Normal", color: "blue" };
  };

  const viewOrders = async (user) => {
    const res = await api.get(`/admin/users/${user.id}/orders`);
    setOrders(res.data || []);
    setSelectedUser(user);
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  const exportCSV = () => {
    const csv = [
      ["ID", "Email", "Role", "Status"],
      ...filtered.map((u) => [
        u.id,
        u.email,
        u.role,
        u.active ? "Active" : "Blocked",
      ]),
    ]
      .map((r) => r.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  const activeCount = users.filter((u) => u.active).length;
  const highValueCount = users.filter((u) => u.total_spent > 10000).length;

  return (
    <PageWrapper>
      <Header>
        <h1>Users</h1>

        <FilterRow>
          <SearchInput
            className="filter-input"
            placeholder="Search email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="ALL">All Roles</option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="BLOCKED">Blocked</option>
          </select>

          <ActionButton onClick={exportCSV}>Export CSV</ActionButton>
        </FilterRow>
      </Header>

      <StatsRow>
        <StatCard>Total Users: {users.length}</StatCard>
        <StatCard>Active: {activeCount}</StatCard>
        <StatCard>High Value: {highValueCount}</StatCard>
      </StatsRow>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th onClick={() => toggleSort("id")}>ID</th>
              <th onClick={() => toggleSort("email")}>Email</th>
              <th onClick={() => toggleSort("role")}>Role</th>
              <th>Health</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((u) => {
              const health = getHealth(u);
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <HealthBadge color={health.color}>
                      {health.label}
                    </HealthBadge>
                  </td>
                  <td>
                    <Tooltip data-text={u.blocked_reason || "No issues"}>
                      <StatusBadge status={u.active}>
                        {u.active ? "Active" : "Blocked"}
                      </StatusBadge>
                    </Tooltip>
                  </td>
                  <td>
                    <ActionButton onClick={() => viewOrders(u)}>
                      View Orders
                    </ActionButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>

      <PaginationRow>
        <ActionButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </ActionButton>
        <span>
          Page {page} / {totalPages}
        </span>
        <ActionButton
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </ActionButton>
      </PaginationRow>

      {selectedUser && (
        <ModalOverlay onClick={() => setSelectedUser(null)}>
          <OrdersModalCard onClick={(e) => e.stopPropagation()}>
            <h3>Orders of {selectedUser.email}</h3>

            <OrdersHeaderRow>
              <span>Order ID</span>
              <span>Total</span>
              <span>Status</span>
            </OrdersHeaderRow>

            <OrdersList>
              {orders.length === 0 ? (
                <p style={{ padding: "12px 0" }}>No orders found.</p>
              ) : (
                orders.map((o) => (
                  <OrdersRow key={o.id}>
                    <span>#{o.id}</span>
                    <span>₹{o.total}</span>
                    <span>{o.status}</span>
                  </OrdersRow>
                ))
              )}
            </OrdersList>

            <ModalActions>
              <button
                className="secondary"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </ModalActions>
          </OrdersModalCard>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}
