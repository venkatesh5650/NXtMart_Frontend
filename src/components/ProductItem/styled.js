import styled from "styled-components";
import { Link } from "react-router-dom";

/* Product card link — replaces inline Link styles for consistency */
export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

/* CARD WRAPPER: visual container for a product card */
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Light → theme.card | Dark → pure white */
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? theme.card : "#ffffff"};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 14px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px
      ${({ theme }) =>
        theme.background === "#ffffff"
          ? "rgba(0,0,0,0.15)"
          : "rgba(0,0,0,0.2)"};
    transform: translateY(-4px);
  }
`;

/* PRODUCT IMAGE */
export const ProductImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

/* LAYOUT: details and actions */
export const DetailsSection = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;

export const ProductInfo = styled.div`
  text-align: left;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

/* INDIVIDUAL TEXT COMPONENTS */

export const ProductTitle = styled.h4`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: black;
`;

export const ProductQuantity = styled.p`
  margin: 4px 0;
  font-size: 14px;

  color: ${({ theme }) =>
    theme.background === "#ffffff" ? theme.text : "black"};

  opacity: 0.8;
`;

export const ProductPrice = styled.h4`
  margin: 4px 0;
  font-size: 17px;
  font-weight: 700;

  /* DARK MODE TEXT MUST BE BLACK */
  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "black")};
`;

/* ADD CART BUTTON */
export const AddCartBtn = styled.button`
  padding: 10px 14px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.35s ease;

  /* Dark Mode → white bg, black text */
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "white" : "#ffffff"};

  border: 2px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "green" : "black")};

  color: ${({ theme }) => (theme.background === "#ffffff" ? "green" : "black")};

  &:hover {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "green" : "black"};

    color: white;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* CART MESSAGE: small confirmation text after add-to-cart */
export const CartMsg = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-top: 6px;
  text-align: center;
  color: green;
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-right: 5px;
  border-radius: 6px;

  @media (max-width: 480px) {
    flex-direction: row;
    padding-left: 10px;
  }
`;

export const ControlButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "green" : "black"};
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
// #504a4c

export const Quantity = styled.span`
  min-width: 20px;
  text-align: center;
  font-weight: 600;
  color: black;
`;
