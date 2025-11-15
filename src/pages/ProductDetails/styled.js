import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  padding: 20px;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  box-sizing: border-box;
`;

/* Main card wrapping image + info */
export const DetailsWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  gap: 30px;

  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 30px;
  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "0px 4px 20px rgba(0, 0, 0, 0.12)"
      : "0px 4px 20px rgba(255, 255, 255, 0.05)"};

  box-sizing: border-box;
  margin-top: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 380px;
    object-fit: contain;
    border-radius: 10px;
    padding: 12px;

    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.card};

    transition: 0.25s;
  }

  img:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

export const Price = styled.h2`
  font-size: 26px;
  color: green;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const CategoryText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text};

  span {
    color: green;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.75;

  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#f9f9f9" : "#1f1f1f"};

  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#1f1f1f" : "#e8e8e8"};

  margin-bottom: 30px;
  padding: 14px 18px;

  border-left: 4px solid green;
  border-radius: 6px;

  @media (max-width: 900px) {
    text-align: left;
    font-size: 17px;
  }
`;

export const AddCartBtn = styled.button`
  padding: 12px 22px;
  background: green;
  color: white;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;
  margin-bottom: 10px;

  &:hover {
    background: #005f00;
    transform: translateY(-2px);
  }
`;

export const BackBtn = styled.button`
  padding: 12px 22px;

  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "black" : "white"};

  color: ${({ theme }) => (theme.background === "#ffffff" ? "white" : "black")};

  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

export const CartMsg = styled.p`
  color: green;
  font-size: 16px;
  font-weight: 600;
  margin-top: 6px;
  text-align: center;
`;

/* Loading text uses the project's theme and keeps markup consistent */
export const LoadingText = styled.h2`
  color: green;
  margin: 40px 0;
`;
