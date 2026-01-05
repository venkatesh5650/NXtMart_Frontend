import styled from "styled-components";

/* ---------- Page ---------- */

export const Page = styled.div`
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 20px 24px;
  }

  @media (min-width: 1280px) {
    padding: 28px 48px;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

/* ---------- Header ---------- */

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  align-items: flex-start;

  h1 {
    font-size: 16px;
    margin: 0;
  }

  @media (min-width: 768px) {
    align-items: center;

    h1 {
      font-size: 22px;
    }
  }
`;

export const AdminBadge = styled.span`
  background: #111;
  color: white;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 10px;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

/* ---------- Stats ---------- */

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 10px;
  margin: 12px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  padding: 8px;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f1f5f9" : "#1e293b"};
  border-radius: 10px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 14px;
  }
`;

export const StatLabel = styled.div`
  font-size: 10px;
  opacity: 0.7;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const StatValue = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

/* ---------- Filters ---------- */

export const FilterRow = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;

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

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 6px 8px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
    font-size: 10.5px;
    white-space: nowrap;
  }

  th {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#f8fafc" : "#020617"};
    font-weight: 600;
    color: ${({ theme }) => theme.mutedText || "#475569"};
  }

  tbody tr:hover {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};
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

/* ---------- Status ---------- */

export const StatusChip = styled.span`
  padding: 3px 8px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 10px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

/* ---------- Actions ---------- */

export const ActionButton = styled.button`
  padding: 4px 8px;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 10.5px;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }

  @media (min-width: 768px) {
    font-size: 13px;
    padding: 7px 14px;
  }
`;
