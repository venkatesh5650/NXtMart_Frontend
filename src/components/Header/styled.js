import styled from "styled-components";

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
