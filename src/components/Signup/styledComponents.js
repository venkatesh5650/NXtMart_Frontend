import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1762679187/Background_4_zyy2ep.png");
  }
`;

export const SignUpCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 20px;
  width: 400px;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* ✅ Mobile Responsive */
  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 40px;
`;

export const SignUpTitle = styled.h2`
  color: darkgreen;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const AllInputContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  width: 90%;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 0 10px;
`;

export const SignUpInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 15px;
  outline: none;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 18px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
`;

export const SignUpButton = styled.button`
  padding: 12px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: black;
  }
`;

export const LoginButton = styled.button`
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: green;
  }
`;
