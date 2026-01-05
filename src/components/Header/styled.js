import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

/* Desktop Cart Wrapper */
export const DesktopCartWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DesktopCartIcon = styled(FaShoppingCart)`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export const DesktopCartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  min-width: 16px;
  height: 16px;
  background-color: #22c55e;
  color: white;
  font-size: 9px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileCartWrapper = styled.div`
  display: none;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileCartIcon = styled(FaShoppingCart)`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
`;

export const MobileCartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #22c55e;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 50%;
`;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f2f4f7" : "#0b0b0b"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.25);
`;

export const Logo = styled.img`
  width: 110px;
  cursor: pointer;
  height: 50px;

  @media (max-width: 480px) {
    width: 90px;
  }
`;

export const Tagline = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: green;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-left: 12px;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: green;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#111" : "#86efac"};
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavMenu = styled.div`
  position: fixed;
  top: 65px;
  right: 0;
  width: 100%;
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#ffffff" : "#0d0d0d"};
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid #22c55e;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
