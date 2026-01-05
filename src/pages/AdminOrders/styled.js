import styled from "styled-components";

export const Page = styled.div`
  padding: 20px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdminBadge = styled.span`
  background: #111;
  color: white;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  margin: 16px 0;
`;

export const StatCard = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.background === "#ffffff" ? "#f1f5f9" : "#1e293b"};
  border-radius: 12px;
  text-align: center;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

export const StatValue = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const FilterRow = styled.div`
  margin-bottom: 12px;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #e2e8f0;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};
  }
`;

export const StatusChip = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 12px;
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #1d4ed8;
  }
`;
