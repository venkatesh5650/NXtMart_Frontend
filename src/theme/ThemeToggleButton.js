import styled from "styled-components";

export const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2000;

  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;

  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};

  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    bottom: 18px;
    right: 18px;
    font-size: 14px;
    padding: 10px 16px;
  }
`;
