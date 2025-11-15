import styled from "styled-components";

export const SimilarSection = styled.div`
  margin-top: 40px;
  padding: 20px 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const SimilarTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: green;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const SimilarList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 18px;
`;

/* Card stays visually consistent in both light & dark themes */
export const SimilarCard = styled.div`
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "white" : "white"};

  border: 1px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "#e5e5e5" : "#ccc")};

  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  text-align: center;
  transition: 0.25s ease;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) =>
      theme.background === "#ffffff" ? "green" : "black"};
  }
`;

export const SimilarImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 10px;
`;

/* Name is kept readable across theme modes */
export const SimilarName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;

  color: ${({ theme }) =>
    theme.background === "#ffffff" ? theme.text : "black"};
`;

/* Price styling is static to maintain visual consistency */
export const SimilarPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: green;
`;
