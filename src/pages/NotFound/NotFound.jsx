import React from "react";

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundMessage,
  NotFoundButton,
  GlowEffect,
} from "./styled.js";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundMessage>
          Oops! The page you’re looking for doesn’t exist.
        </NotFoundMessage>

        <NotFoundButton to="/login">Go Back to Login</NotFoundButton>
      </NotFoundContent>

      <GlowEffect />
    </NotFoundContainer>
  );
};

export default NotFound;
