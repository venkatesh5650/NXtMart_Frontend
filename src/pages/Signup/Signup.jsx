import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../validators/validation.js";
import { registerUser } from "../../api/auth"; // ⭐ NEW

import {
  SignUpContainer,
  Logo,
  SignUpCard,
  SignUpTitle,
  SignUpForm,
  SignUpInput,
  AllInputContainer,
  Label,
  InputContainer,
  Row,
  Checkbox,
  ButtonRow,
  SignUpButton,
  LoginButton,
  SignUpMessage,
  ErrorText,
  ShowPasswordLabel,
} from "./styled.js";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupMsg, setSignupMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  const RedirectToLogin = () => navigate("/login");

  // Validate signup fields using Zod schema before submission
  const validateForm = () => {
    const result = registerSchema.safeParse({
      name,
      username,
      email,
      password,
    });

    if (result.success) {
      setFieldErrors({});
      return true;
    }

    const errors = {};
    result.error.issues.forEach((err) => {
      errors[err.path[0]] = err.message;
    });

    setFieldErrors(errors);
    return false;
  };

  // Handles signup request → clean API logic with server validation fallback

  const handleSignUp = async (event) => {
    event.preventDefault();
    setSignupMsg("");
    setMsgType("");

    if (!validateForm()) return;

    try {
      const response = await registerUser({
        name,
        username,
        password,
        email,
      });

      const data = await response.json();

      if (response.ok) {
        setSignupMsg("User Registered Successfully");
        setMsgType("success");
        navigate("/login", { replace: true });
      } else {
        setSignupMsg(data.error);
        setMsgType("error");
      }
    } catch (err) {
      console.log("Signup Error:", err);
    }
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <Logo src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png" />

        <SignUpTitle>Signup</SignUpTitle>

        <SignUpForm onSubmit={handleSignUp}>
          <AllInputContainer>
            {/* NAME */}
            <Label>Name</Label>
            <InputContainer>
              <CiUser size={20} color="gray" />
              <SignUpInput
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.name && <ErrorText>{fieldErrors.name}</ErrorText>}

            {/* USERNAME */}
            <Label>Username</Label>
            <InputContainer>
              <CgProfile size={20} color="gray" />
              <SignUpInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.username && (
              <ErrorText>{fieldErrors.username}</ErrorText>
            )}

            {/* PASSWORD */}
            <Label>Password</Label>
            <InputContainer>
              <TbLockPassword size={20} color="gray" />
              <SignUpInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.password && (
              <ErrorText>{fieldErrors.password}</ErrorText>
            )}

            {/* SHOW PASSWORD CHECKBOX */}
            <Row>
              <Checkbox
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <ShowPasswordLabel>Show password</ShowPasswordLabel>
            </Row>

            {/* EMAIL */}
            <Label>Email</Label>
            <InputContainer>
              <CgProfile size={20} color="gray" />
              <SignUpInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.email && <ErrorText>{fieldErrors.email}</ErrorText>}

            {/* BUTTONS */}
            <ButtonRow>
              <SignUpButton type="submit">SignUp</SignUpButton>
              <LoginButton type="button" onClick={RedirectToLogin}>
                Login
              </LoginButton>
            </ButtonRow>

            <SignUpMessage type={msgType}>{signupMsg}</SignUpMessage>
          </AllInputContainer>
        </SignUpForm>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUp;
