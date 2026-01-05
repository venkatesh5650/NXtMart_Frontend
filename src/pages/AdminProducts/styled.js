import styled from "styled-components";

/* ---------- Page ---------- */

export const PageWrapper = styled.div`
  padding: 14px;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1280px) {
    padding: 32px 48px;
  }
`;

export const Header = styled.div`
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    font-size: 20px;
  }

  p {
    color: #64748b;
    font-size: 13px;
  }

  @media (min-width: 768px) {
    align-items: center;

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
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  select {
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    select {
      font-size: 13px;
    }
  }
`;

/* ---------- Table ---------- */

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
    font-size: 12px;
    white-space: nowrap;
  }

  th {
    background: #f8fafc;
    font-size: 12px;
    color: #475569;
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 13px;
      padding: 12px;
    }
  }
`;

/* ---------- Buttons ---------- */

export const ActionButton = styled.button`
  background: ${({ variant }) =>
    variant === "danger" ? "#fee2e2" : "#dcfce7"};
  color: ${({ variant }) => (variant === "danger" ? "#b91c1c" : "#166534")};
  border: none;
  padding: 6px 10px;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background: ${({ status }) => (status ? "#dcfce7" : "#fee2e2")};
  color: ${({ status }) => (status ? "#166534" : "#b91c1c")};

  @media (min-width: 768px) {
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
  z-index: 50;
  padding: 14px;
`;

export const ModalCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  h3 {
    margin-top: 0;
    font-size: 18px;
  }

  p {
    font-size: 13px;
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
    font-size: 12px;
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
  gap: 10px;
  margin-top: 16px;

  button {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 12px;
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
