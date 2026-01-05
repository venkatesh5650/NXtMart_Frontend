import styled from "styled-components";

export const Page = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: auto;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const Section = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};
`;

export const Status = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 13px;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

export const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border-bottom: 1px solid #cbd5e1;
    padding: 8px;
    text-align: left;
  }

  th {
    font-size: 13px;
    color: #64748b;
  }
`;

export const TotalRow = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ActionButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: #00ff00;
  color: white;
  cursor: pointer;

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;
