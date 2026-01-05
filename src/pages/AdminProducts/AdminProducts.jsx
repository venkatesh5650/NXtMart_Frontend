import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  PageWrapper,
  Header,
  Table,
  ActionButton,
  FilterRow,
  StatusBadge,
  ModalOverlay,
  ModalCard,
  ModalActions,
} from "./styled";

const DEACTIVATION_REASONS = [
  "Out of stock",
  "Incorrect price uploaded",
  "Quality issue reported",
  "Compliance review pending",
  "Seasonal product",
  "Product discontinued",
  "Incorrect product data",
  "Policy violation",
  "Temporary removal",
  "Other",
];

export default function AdminProducts() {
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [targetId, setTargetId] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await api.get("/admin/products");
    setProducts(res.data || []);
    setLoading(false);
  };

  const toggleStatus = async (id) => {
    const res = await api.patch(`/admin/products/${id}/toggle`);
    setProducts((prev) => prev.map((p) => (p.id === id ? res.data : p)));
  };

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter((p) => (filter === "ACTIVE" ? p.active : !p.active));

  if (loading) return <p>Loading products...</p>;

  return (
    <PageWrapper>
      <Header>
        <div>
          <h1>Products</h1>
          <p>Manage all store products</p>
        </div>

        <FilterRow>
          <label>Status:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="ALL">All</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </FilterRow>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td title={p.deactivated_reason || ""}>
                <StatusBadge status={p.active}>
                  {p.active ? "Active" : "Inactive"}
                </StatusBadge>
              </td>
              <td>
                <ActionButton
                  variant={p.active ? "danger" : "success"}
                  onClick={() => {
                    if (p.active) {
                      setTargetId(p.id);
                      setShowModal(true);
                    } else {
                      toggleStatus(p.id);
                    }
                  }}
                >
                  {p.active ? "Deactivate" : "Activate"}
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showModal && (
        <ModalOverlay>
          <ModalCard>
            <h3>Deactivate Product</h3>
            <p>Select a reason for deactivation.</p>

            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: 8 }}
            >
              <option value="">Select reason</option>
              {DEACTIVATION_REASONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {reason === "Other" && (
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Enter custom reason..."
                style={{ marginTop: 10 }}
              />
            )}

            <ModalActions>
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                className="danger"
                disabled={!reason}
                onClick={async () => {
                  const finalReason =
                    reason === "Other" ? customReason : reason;

                  await api.patch(`/admin/products/${targetId}/toggle`, {
                    reason: finalReason,
                  });

                  setShowModal(false);
                  setReason("");
                  setCustomReason("");
                  loadProducts();
                }}
              >
                Confirm
              </button>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}
