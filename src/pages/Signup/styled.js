import styled from "styled-components";

/* PAGE BACKGROUND */
export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  /* Background image stays same in both themes */
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1762679187/Background_4_zyy2ep.png");
  }
`;

/* CARD WRAPPER */
export const SignUpCard = styled.div`
  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#ffffff" : theme.card};

  color: ${({ theme }) => theme.text};

  box-shadow: 0 4px 12px
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(0,0,0,0.12)"
        : "rgba(255,255,255,0.15)"};

  border-radius: 7px;
  padding: 16px;
  width: 380px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 88%;
    padding: 12px;
  }
`;

/* LOGO */
export const Logo = styled.img`
  width: 90px;
  height: 60px;
  display: block;
`;

/* TITLE */
export const SignUpTitle = styled.h2`
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "darkgreen" : "lightgreen"};
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

/* FORM */
export const SignUpForm = styled.form`
  width: 100%;
  margin-top: 10px;
`;

/* INPUT SECTION */
export const AllInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  width: 85%;
  color: ${({ theme }) => theme.text};
  margin-top: 6px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 85%;
  margin: 8px auto;
  border-radius: 6px;

  background: ${({ theme }) =>
    theme.background === "#ffffff" ? "#fff" : theme.card};

  border: 1px solid
    ${({ theme }) => (theme.background === "#ffffff" ? "#ccc" : "#555")};

  padding: 0 8px;

  &:focus-within {
    border-color: green;
    box-shadow: 0 0 4px
      ${({ theme }) =>
        theme.background === "#ffffff"
          ? "rgba(0,128,0,0.3)"
          : "rgba(255,255,255,0.3)"};
  }
`;

export const SignUpInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  background: transparent;

  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => (theme.background === "#ffffff" ? "#777" : "#ccc")};
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 85%;
  margin: 6px auto 14px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: green;
`;

/* BUTTONS */
export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 15px;
`;

export const SignUpButton = styled.button`
  width: 45%;
  padding: 10px;
  font-size: 16px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: black;
  }
`;

export const LoginButton = styled.button`
  width: 45%;
  padding: 10px;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: green;
  }
`;

/* MESSAGES */
export const SignUpMessage = styled.p`
  width: 85%;
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
  color: ${({ type }) => (type === "success" ? "green" : "red")};
`;

export const ErrorText = styled.p`
  width: 85%;
  color: red;
  font-size: 12px;
  margin: 2px 0;
`;

export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
