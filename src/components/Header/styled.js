import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";

/* Desktop Cart Icon Wrapper */
export const DesktopCartWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Desktop Cart Icon */
export const DesktopCartIcon = styled(FaShoppingCart)`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

/* Desktop Cart Badge */
export const DesktopCartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  min-width: 16px;
  height: 16px;

  background-color: #ff3b30;
  color: #ffffff;

  font-size: 9px;
  font-weight: 700;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 1;
`;

/* Mobile Cart Wrapper */
export const MobileCartWrapper = styled.div`
  display: none;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* Cart Icon */
export const MobileCartIcon = styled(FaShoppingCart)`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
`;

/* Cart Count Badge */
export const MobileCartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #ff3b30;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 50%;
  line-height: 1;
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
  box-sizing: border-box;
  z-index: 1000;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0, 255, 0, 0.18);

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: 60px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 90px;
  }
`;

export const Tagline = styled.p`
  font-size: 18px;
  font-weight: 600;

  /* Light → default green | Dark → green */
  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "green")};

  margin: 0 auto;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "black" : "white"};
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

  /* Light → green | Dark → green */
  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "green")};

  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "black" : "lightgreen"};
  }
`;

export const CartBadge = styled.span`
  background-color: green; /* NxtMart green */
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  padding: 2px 6px;
  margin-left: 6px;
  margin-bottom: 1px;
  min-width: 18px;
  text-align: center;
`;
// #22c55e
export const MobileMenuIcon = styled.div`
  display: none;

  /* Light → green | Dark → green */
  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "green")};

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

  /* Light → white | Dark → black card */
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "white" : "#0d0d0d"};

  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;

  border-bottom: 1px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "#d1d5db" : "green")};

  animation: slideDown 0.3s ease-in-out;

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
