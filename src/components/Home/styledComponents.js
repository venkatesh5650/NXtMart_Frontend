import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 90px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const HomeSection = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const CategorySection = styled.div`
  width: 20%;
  height: 90vh;
  position: sticky;
  top: 90px;
  background-color: #ffffff;
  overflow-y: auto;
  padding-right: 15px;
  border-right: 1px solid #e5e7eb;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    position: static;
    border-right: none;
    padding: 0;
    margin-bottom: 12px;
  }
`;

export const CategoryHeader = styled.h1`
  font-size: 20px;
  color: green;
  font-weight: 700;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

export const CategoryContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 8px;

  /* ✅ Horizontal Scroll on Mobile */
  @media (max-width: 992px) {
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 8px;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #94a3b8;
    border-radius: 8px;
  }
`;

export const CategoryItem = styled.li`
  list-style: none;

  @media (max-width: 992px) {
    margin-right: 10px;
  }
`;

export const CategoryBtn = styled.button`
  background: ${(props) => (props.$isActive ? "#e8f5e9" : "transparent")};
  color: ${(props) => (props.$isActive ? "green" : "#374151")};
  font-weight: 600;
  border: none;
  padding: 10px 14px;
  font-size: 17px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e8f5e9;
    color: green;
    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ProductsSection = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
  padding: 10px;

  @media (max-width: 992px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const ProductContainer = styled.div`
  padding: 14px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
