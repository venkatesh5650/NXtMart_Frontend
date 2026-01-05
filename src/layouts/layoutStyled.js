import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* ---------- Root ---------- */

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

/* ---------- Top Bar ---------- */

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
`;

/* ---------- Body Wrapper ---------- */

export const AppContainer = styled.div`
  display: flex;
  margin-top: 56px; /* Push content below header */
  min-height: calc(100vh - 56px);
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

/* ---------- Brand ---------- */

export const Brand = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

/* ---------- Actions ---------- */

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${({ theme }) => theme.mutedText};
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
`;

/* ---------- Sidebar ---------- */

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  transition: transform 0.3s ease;

  ${({ isMobile, open }) =>
    isMobile
      ? `
    position: fixed;
    top: 56px;
    left: 0;
    bottom: 0;
    width: 75vw;
    max-width: 260px;
    transform: ${open ? "translateX(0)" : "translateX(-100%)"};
    z-index: 1001;
    padding: 12px;
  `
      : `
    position: sticky;
    top: 56px;
    width: 240px;
    padding: 16px;
    transform: translateX(0);
  `}
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
`;

/* ---------- Overlay ---------- */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1000;
`;

/* ---------- Content ---------- */

export const ContentArea = styled.main`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  max-width: 100%;
`;
