import styled from "styled-components";

export const Page = styled.div`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px 24px;
  }

  @media (min-width: 1280px) {
    padding: 28px 48px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const AdminBadge = styled.span`
  background: #111;
  color: white;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 14px;
  margin: 16px 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  padding: 12px;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f1f5f9" : "#1e293b"};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);

  @media (min-width: 768px) {
    padding: 14px;
  }
`;

export const StatLabel = styled.div`
  font-size: 11px;
  opacity: 0.7;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const StatValue = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const FilterRow = styled.div`
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
    font-size: 13px;
    white-space: nowrap;
  }

  th {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#f8fafc" : "#020617"};
    font-weight: 600;
  }

  tbody tr:hover {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};
  }

  @media (min-width: 1024px) {
    th, td {
      font-size: 14px;
      padding: 12px;
    }
  }
`;

export const StatusChip = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 11px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }

  @media (min-width: 768px) {
    font-size: 13px;
    padding: 7px 14px;
  }
`;
