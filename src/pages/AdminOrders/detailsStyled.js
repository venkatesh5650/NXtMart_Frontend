import styled from "styled-components";

/* ---------- Page ---------- */

export const Page = styled.div`
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 20px 24px;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    padding: 32px 0;
  }
`;

/* ---------- Back ---------- */

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 6px;
  padding: 4px 0;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

/* ---------- Title ---------- */

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

/* ---------- Section ---------- */

export const Section = styled.div`
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f8fafc" : "#0f172a"};

  @media (min-width: 768px) {
    padding: 18px;
  }
`;

/* ---------- Status ---------- */

export const Status = styled.span`
  padding: 3px 8px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: white;
  font-size: 11px;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

/* ---------- Summary ---------- */

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

/* ---------- Items ---------- */

export const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;

  th,
  td {
    border-bottom: 1px solid #cbd5e1;
    padding: 6px 8px;
    text-align: left;
    font-size: 11px;
    white-space: nowrap;
  }

  th {
    color: #64748b;
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 13px;
      padding: 8px 10px;
    }
  }
`;

/* ---------- Total ---------- */

export const TotalRow = styled.div`
  margin-top: 8px;
  text-align: right;
  font-size: 13px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

/* ---------- Actions ---------- */

export const ActionsRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  background: #22c55e;
  color: white;
  cursor: pointer;
  font-size: 11px;

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 8px 14px;
    font-size: 13px;
  }
`;
