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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  height: 32px;
  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  min-width: 180px;

  @media (min-width: 768px) {
    font-size: 13px;
    height: 34px;
  }
`;

/* ---------- Table ---------- */

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  background: ${({ theme }) => theme.surface};
  border-radius: 12px;
  overflow: hidden;

  th,
  td {
    padding: 10px 12px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    text-align: left;
    font-size: 12px;
    white-space: nowrap;
  }

  th {
    font-size: 12px;
    color: ${({ theme }) => theme.mutedText};
    font-weight: 600;
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 13px;
      padding: 12px 14px;
    }
  }
`;

/* ---------- Badges ---------- */

export const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  background: ${({ status }) => (status ? "#dcfce7" : "#fee2e2")};
  color: ${({ status }) => (status ? "#166534" : "#b91c1c")};

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const HealthBadge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  background: ${({ color }) =>
    color === "green"
      ? "#dcfce7"
      : color === "red"
      ? "#fee2e2"
      : color === "blue"
      ? "#e0f2fe"
      : "#e5e7eb"};
  color: ${({ color }) =>
    color === "green"
      ? "#166534"
      : color === "red"
      ? "#b91c1c"
      : color === "blue"
      ? "#0369a1"
      : "#374151"};

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

/* ---------- Tooltip ---------- */

export const Tooltip = styled.span`
  position: relative;

  &:hover::after {
    content: attr(data-text);
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    font-size: 10px;
    padding: 6px 8px;
    border-radius: 6px;
    white-space: nowrap;
    z-index: 10;
  }
`;

/* ---------- Filters ---------- */

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  .filter-input,
  .filter-select {
    height: 32px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    background: #ffffff;
    color: #000000;
    font-size: 12px;
  }

  .filter-select option {
    background: #ffffff;
    color: #000000;
  }

  @media (min-width: 768px) {
    .filter-input,
    .filter-select {
      height: 34px;
      font-size: 13px;
    }
  }
`;

/* ---------- Buttons ---------- */

export const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 999px;
  border: none;
  background: #e5e7eb;
  color: #111827;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #d1d5db;
  }

  @media (min-width: 768px) {
    padding: 6px 14px;
    font-size: 13px;
  }
`;

/* ---------- Modal ---------- */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 14px;
`;

export const OrdersModalCard = styled.div`
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#ffffff" : "#020617"};
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#000000" : "#ffffff"};
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    padding: 26px 28px;
  }
`;

export const OrdersHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;
  font-weight: 600;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const OrdersList = styled.div``;

export const OrdersRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  .secondary {
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    .secondary {
      font-size: 13px;
    }
  }
`;

/* ---------- Stats ---------- */

export const StatsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 768px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;

export const PaginationRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
  align-items: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 13px;
    gap: 12px;
  }
`;
