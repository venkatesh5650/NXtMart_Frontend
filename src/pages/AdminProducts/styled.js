import styled from "styled-components";

/* ---------- Page ---------- */

export const PageWrapper = styled.div`
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1280px) {
    padding: 32px 48px;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

/* ---------- Header ---------- */

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  h1 {
    font-size: 16px;
    margin: 0;
  }

  p {
    font-size: 11px;
    color: #64748b;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }
`;

/* ---------- Filters ---------- */

export const FilterRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;

  label {
    font-size: 11px;
  }

  select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    font-size: 11px;
  }

  @media (min-width: 768px) {
    label,
    select {
      font-size: 13px;
    }
  }
`;

/* ---------- Table ---------- */

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 6px 8px;
    font-size: 10.5px;
    white-space: nowrap;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
  }

  th {
    color: #475569;
    background: #f8fafc;
    font-weight: 600;
  }

  @media (min-width: 480px) {
    th,
    td {
      font-size: 11.5px;
      padding: 8px 10px;
    }
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 13px;
      padding: 12px;
    }
  }
`;

/* ---------- Badges ---------- */

export const StatusBadge = styled.span`
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 10px;

  background: ${({ status }) => (status ? "#dcfce7" : "#fee2e2")};
  color: ${({ status }) => (status ? "#166534" : "#b91c1c")};

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

/* ---------- Buttons ---------- */

export const ActionButton = styled.button`
  padding: 4px 8px;
  font-size: 10.5px;
  border-radius: 6px;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  background: ${({ variant }) =>
    variant === "danger" ? "#fee2e2" : "#dcfce7"};
  color: ${({ variant }) => (variant === "danger" ? "#b91c1c" : "#166534")};

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

/* ---------- Modal ---------- */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 12px;
`;

export const ModalCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 18px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  h3 {
    margin-top: 0;
    font-size: 16px;
  }

  p {
    font-size: 12px;
    color: #64748b;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    margin-top: 10px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    resize: none;
    font-size: 11px;
  }

  @media (min-width: 768px) {
    padding: 24px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    textarea {
      font-size: 13px;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;

  button {
    padding: 6px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 11px;
  }

  .danger {
    background: #ef4444;
    color: white;
  }

  @media (min-width: 768px) {
    button {
      padding: 8px 14px;
      font-size: 13px;
    }
  }
`;
