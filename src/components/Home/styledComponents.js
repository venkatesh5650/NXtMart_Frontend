import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const CategorySection = styled.div`
  width: 20%;
  min-width: 180px;
  height: calc(100vh - 70px);
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: sticky;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    position: static;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const CategoryHeader = styled.h1`
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  color: green;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CategoryContainer = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 992px) {
    flex-direction: row;
    gap: 10px;
    padding: 10px;
  }
`;

export const CategoryItem = styled.li`
  list-style: none;
  flex: 1;

  @media (max-width: 992px) {
    flex: unset;
  }
`;

export const CategoryBtn = styled.button`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.$active ? "#d9f7d9" : "transparent")};
  color: ${(props) => (props.$active ? "green" : "#374151")};
  border: none;
  font-size: 21px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  padding-left: 18px;
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: #e8ffe8;
    transform: scale(1.03);
  }

  @media (max-width: 992px) {
    font-size: 18px;
    padding: 8px 12px;
    flex: none;
  }
`;

export const ProductsSection = styled.div`
  flex: 1;
  display: grid;
  gap: 16px;
  padding-left: 16px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  overflow-x: hidden;

  @media (max-width: 480px) {
    padding-left: 0;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  }
`;

export const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  text-align: center;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.18);
  }
`;
