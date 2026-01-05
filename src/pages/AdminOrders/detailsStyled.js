import styled from "styled-components";

export const Page = styled.div`
  padding: 14px;
  max-width: 900px;
  margin: auto;

  @media (min-width: 768px) {
    padding: 20px 24px;
  }

  @media (min-width: 1280px) {
    padding: 32px 0;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 8px;
  padding: 4px 0;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Section = styled.div`
  margin-bottom: 18px;
  padding: 14px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};

  @media (min-width: 768px) {
    padding: 18px;
  }
`;

export const Status = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 12px;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  min-width: 520px;

  th,
  td {
    border-bottom: 1px solid #cbd5e1;
    padding: 8px;
    text-align: left;
    font-size: 12px;
    white-space: nowrap;
  }

  th {
    font-size: 12px;
    color: #64748b;
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 13px;
    }
  }
`;

export const TotalRow = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 15px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  padding: 7px 12px;
  border-radius: 8px;
  border: none;
  background: #00ff00;
  color: white;
  cursor: pointer;
  font-size: 12px;

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 8px 14px;
    font-size: 13px;
  }
`;
