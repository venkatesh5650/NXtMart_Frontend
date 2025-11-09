import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url("https://res.cloudinary.com/dpiu7mohv/image/upload/v1756465869/Background_po1fpj.png");
  background-size: cover;
  background-position: center;
  text-align: center;
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 25px 20px;
  width: 450px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.6s ease-in-out;

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;
  margin-bottom: 8px;
`;

export const LoginTitle = styled.h2`
  color: darkgreen;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AllInputContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 93%;
  margin: 12px 0;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  padding: 0 10px;
  background: white;

  &:focus-within {
    border-color: #22c55e;
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
  }
`;

export const LoginInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 8px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
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
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: black;
    transform: scale(1.03);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SignupButton = styled(LoginButton)`
  background-color: black;

  &:hover {
    background-color: green;
    transform: scale(1.03);
  }
`;

export const ErrorMsg = styled.p`
  color: #dc2626;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;
