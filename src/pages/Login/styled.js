import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1762679187/Background_4_zyy2ep.png");
  }
`;

export const LoginCard = styled.div`
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "rgba(255,255,255,0.92)"
      : "rgba(20,20,20,0.92)"};

  backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 25px 20px;
  width: 400px;

  box-shadow: 0px 6px 18px
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(0,0,0,0.18)"
        : "rgba(255,255,255,0.12)"};

  @media (max-width: 600px) {
    width: 92%;
  }
`;

export const Logo = styled.img`
  width: 120px;
  display: block;
  margin: 0 auto 10px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "darkgreen" : "white"};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AllInputContainer = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 12px 0;
  border-radius: 7px;
  padding: 0 10px;

  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#fff" : "#2a2a2a"};

  border: 1px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "#cbd5e1" : "#555")};

  &:focus-within {
    border-color: green;
    box-shadow: 0 0 4px rgba(0, 128, 0, 0.4);
  }

  svg {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "gray" : "white"};
  }
`;

export const LoginInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-left: 8px;
  font-size: 16px;

  color: ${({ theme }) => (theme.background === "#ffffff" ? "black" : "white")};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => (theme.background === "#ffffff" ? "#666" : "#aaa")};
  }

  @media (min-width: 600px) {
    margin-left: 20px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => (theme.background === "#ffffff" ? "black" : "white")};
`;

export const PasswordRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -5px 0 15px;

  label {
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#334155" : "white"};
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: green;
    cursor: pointer;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LoginButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: green;
  color: white;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: black;
    transform: scale(1.04);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SignupButton = styled(LoginButton)`
  background-color: black;

  &:hover {
    background-color: green;
  }
`;

export const DemoLoginButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#e6e6e6" : "#444"};
  color: ${({ theme }) => (theme.background === "#ffffff" ? "#333" : "white")};
  padding: 10px;
  border-radius: 6px;
  border: none;
  margin: 12px 0;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#d1d1d1" : "#555"};
  }
`;

export const ErrorMsg = styled.p`
  color: #dc2626;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;

export const LoginErrorText = styled.p`
  width: 100%;
  color: red;
  font-size: 14px;
  text-align: left;
  margin-bottom: 8px;
  margin-top: -8px;
`;

export const LoadingText = styled.p`
  text-align: center;
  color: green;
  margin-top: 12px;
  font-size: 15px;
  font-weight: 500;
`;
