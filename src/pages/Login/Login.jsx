import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { loginSchema } from "../../validators/validation.js";
import { loginUser } from "../../api/auth";

import {
  LoginContainer,
  Logo,
  LoginCard,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  ButtonRow,
  SignupButton,
  AllInputContainer,
  Label,
  InputContainer,
  ErrorMsg,
  PasswordRow,
  DemoLoginButton,
  LoginErrorText,
} from "./styled.js";

const Login = () => {
  const [username, setUsername] = useState("demo_user");
  const [password, setPassword] = useState("Demo@9988");
  const [showPassword, setShowPassword] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) {
      const decoded = jwtDecode(token);
      navigate(decoded.role === "ADMIN" ? "/admin/orders" : "/");
    }
  }, [navigate]);

  const redirectAfterLogin = (jwtToken) => {
    const decoded = jwtDecode(jwtToken);
    navigate(decoded.role === "ADMIN" ? "/admin/orders" : "/");
  };

  const RedirectToSignup = () => navigate("/signup");

  const validateForm = () => {
    const result = loginSchema.safeParse({ username, password });

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

  const handleLogin = async (event) => {
    event.preventDefault();
    setFailureMsg("");
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const data = await loginUser({ username, password });
      localStorage.setItem("username", username);
      redirectAfterLogin(data.jwt_token);
    } catch (err) {
      console.log("Login Error:", err);
      setFailureMsg(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setUsername("demo_user");
    setPassword("Demo@9988");
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png" />

        <LoginTitle>Login</LoginTitle>

        <LoginForm onSubmit={handleLogin}>
          <AllInputContainer>
            <Label>Username</Label>
            <InputContainer>
              <CgProfile size={20} />
              <LoginInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.username && (
              <LoginErrorText>{fieldErrors.username}</LoginErrorText>
            )}

            <Label>Password</Label>
            <InputContainer>
              <TbLockPassword size={20} />
              <LoginInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            {fieldErrors.password && (
              <LoginErrorText>{fieldErrors.password}</LoginErrorText>
            )}

            <PasswordRow>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label>Show Password</label>
            </PasswordRow>

            <DemoLoginButton type="button" onClick={handleDemoLogin}>
              Use Demo Credentials
            </DemoLoginButton>

            <ButtonRow>
              <LoginButton type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </LoginButton>
              <SignupButton type="button" onClick={RedirectToSignup}>
                SignUp
              </SignupButton>
            </ButtonRow>

            {failureMsg && <ErrorMsg>{failureMsg}</ErrorMsg>}
          </AllInputContainer>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
