import styled from "styled-components";
import { Link } from "react-router-dom";

/* Styled Link wrapper so no inline CSS */
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ItemImg = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.35s;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: green;
`;

/* ===========================================================
   CONTROLLER THEME LOGIC
   Light Mode  → border: green, bg: white
   Dark Mode   → border: white, bg: dark card
   =========================================================== */
export const Controller = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "green" : "white")};

  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "white" : theme.card};

  border-radius: 10px;
  width: 110px;
  height: 45px;
  justify-content: space-between;
  padding: 0 10px;
  transition: 0.3s ease;

  @media (max-width: 480px) {
    width: 135px;
  }
`;

/* ===========================================================
   PLUS / MINUS BUTTONS
   Light Mode → green
   Dark Mode  → white
   =========================================================== */
export const ControlButton = styled.button`
  font-size: 26px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "white")};

  &:hover {
    transform: scale(1.25);
  }
  &:active {
    transform: scale(1.1);
  }
`;

/* ===========================================================
   QUANTITY COLOR
   Light Mode → green
   Dark Mode  → white
   =========================================================== */
export const Quantity = styled.p`
  font-size: 22px;
  font-weight: 600;

  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "white")};

  min-width: 20px;
  text-align: center;
`;

/* ===========================================================
   DIVIDER LINE BETWEEN ITEMS
   Light Mode → #ccc
   Dark Mode  → white
   =========================================================== */
export const Divider = styled.hr`
  width: 100%;
  margin-top: 12px;
  border: none;
  height: 1px;

  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#ccc" : "white"};
`;
