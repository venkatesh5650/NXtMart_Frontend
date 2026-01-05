import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.primary || "#3b82f6"};
  color: white;
  font-size: 13px;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export const SecondaryButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: ${({ theme }) => theme.hover || "rgba(0,0,0,0.05)"};
  }
`;

export const Grid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
`;

export const OrderCard = styled(Link)`
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) =>
      theme.shadowSoft || "0 8px 20px rgba(0,0,0,0.12)"};
  }
`;

export const OrderId = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const Status = styled.div`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ status }) =>
    status === "DELIVERED"
      ? "#22c55e"
      : status === "SHIPPED"
      ? "#3b82f6"
      : status === "PACKED"
      ? "#facc15"
      : status === "PAID"
      ? "#8b5cf6"
      : "#64748b"};
  color: white;
`;

export const DateText = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
`;

export const EmptyState = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  border-radius: 16px;
  border: 1px dashed ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.mutedText};

  p {
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;
