import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 24px;
`;

export const Header = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
  }

  p {
    color: #64748b;
    font-size: 14px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
  }

  th {
    background: #f8fafc;
    font-size: 13px;
    color: #475569;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
  }
`;

export const ActionButton = styled.button`
  background: ${({ variant }) =>
    variant === "danger" ? "#fee2e2" : "#dcfce7"};
  color: ${({ variant }) => (variant === "danger" ? "#b91c1c" : "#166534")};
  border: none;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

export const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ status }) => (status ? "#dcfce7" : "#fee2e2")};
  color: ${({ status }) => (status ? "#166534" : "#b91c1c")};
`;

/* ---------- Modal ---------- */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 16px;
`;

export const ModalCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  h3 {
    margin-top: 0;
  }

  p {
    font-size: 14px;
    color: #64748b;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    margin-top: 12px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    resize: none;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;

  button {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .danger {
    background: #ef4444;
    color: white;
  }
`;
