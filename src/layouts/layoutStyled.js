import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

/* ---------------- Top Bar ---------------- */

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

  @media (min-width: 1024px) {
    padding: 0 24px;
  }

  @media (min-width: 1440px) {
    padding: 0 32px;
  }
`;

export const Brand = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding: 6px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.mutedText};

  @media (min-width: 1024px) {
    font-size: 13px;
    gap: 14px;
  }
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

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

/* ---------------- Sidebar ---------------- */

export const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.border};
  padding: 80px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.3s ease;

  @media (min-width: 1024px) {
    width: 240px;
    padding: 90px 16px 24px;
  }

  @media (min-width: 1440px) {
    width: 260px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1001;
    padding-top: 70px;
    width: 75%;
    max-width: 260px;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  transition: background 0.2s ease;

  &.active {
    background: ${({ theme }) => theme.primarySoft || "#e0f2fe"};
    color: ${({ theme }) => theme.primary || "#2563eb"};
    font-weight: 500;
  }

  &:hover {
    background: ${({ theme }) => theme.hover || "#f1f5f9"};
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 15px;
  }
`;

/* ---------------- Overlay ---------------- */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

/* ---------------- Content Area ---------------- */

export const ContentArea = styled.main`
  flex: 1;
  padding: 80px 20px 20px;

  @media (min-width: 768px) {
    padding: 80px 24px 24px 24px;
  }

  @media (min-width: 1024px) {
    padding: 90px 32px 32px;
  }

  @media (min-width: 1440px) {
    padding: 100px 48px 48px;
  }

  @media (max-width: 480px) {
    padding: 72px 14px 14px;
  }
`;
