import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const BackButton = styled.button`
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.primarySoft || "rgba(59,130,246,0.15)"};
    color: ${({ theme }) => theme.primary || "#3b82f6"};
  }
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin: 1rem 0;
  font-size: 0.9rem;
`;

export const SyncText = styled.div`
  font-size: 0.75rem;
  opacity: 0.6;
`;

export const CancelButton = styled.button`
  margin-top: 1rem;
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const Section = styled.div`
  margin-top: 2rem;
  padding: 1.2rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 0.6rem 0;
  font-size: 14px;

  span:last-child {
    text-align: right;
  }
`;

export const Total = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
  font-size: 15px;
`;
