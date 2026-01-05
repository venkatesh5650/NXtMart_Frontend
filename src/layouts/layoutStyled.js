import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
`;

export const Brand = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.mutedText};
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.hover || "#f1f5f9"};
  }
`;

export const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.border};
  padding: 80px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1001;
    padding-top: 70px;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 14px;

  &.active {
    background: ${({ theme }) => theme.primarySoft || "#e0f2fe"};
    color: ${({ theme }) => theme.primary || "#2563eb"};
    font-weight: 500;
  }

  &:hover {
    background: ${({ theme }) => theme.hover || "#f1f5f9"};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 80px 24px 24px 24px;

  @media (max-width: 768px) {
    padding: 72px 16px 16px 16px;
  }
`;
