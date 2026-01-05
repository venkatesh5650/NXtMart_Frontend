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
  height: 56px;
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  z-index: 1000;

  @media (min-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }

  @media (min-width: 1280px) {
    padding: 0 32px;
  }
`;

export const Brand = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 15px;
  }
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
  gap: 10px;
  font-size: 11px;
  color: ${({ theme }) => theme.mutedText};

  @media (min-width: 768px) {
    font-size: 12px;
    gap: 12px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${({ theme }) => theme.hover || "#f1f5f9"};
  }
`;

/* ---------------- Sidebar ---------------- */

export const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.border};
  padding: 70px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    inset: 0 auto 0 0;
    width: 75%;
    max-width: 260px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1001;
    padding-top: 60px;
  }

  @media (min-width: 1024px) {
    width: 240px;
    padding: 80px 16px 24px;
  }

  @media (min-width: 1440px) {
    width: 260px;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 13px;

  &.active {
    background: ${({ theme }) => theme.primarySoft || "#e0f2fe"};
    color: ${({ theme }) => theme.primary || "#2563eb"};
    font-weight: 500;
  }

  &:hover {
    background: ${({ theme }) => theme.hover || "#f1f5f9"};
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

/* ---------------- Content ---------------- */

export const ContentArea = styled.main`
  flex: 1;
  padding: 70px 14px 14px;

  @media (min-width: 768px) {
    padding: 80px 20px 20px;
  }

  @media (min-width: 1280px) {
    padding: 90px 32px 32px;
  }
`;
