import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Fullscreen container with a dark radial background.
 * Creates a strong visual hierarchy for the 404 state.
 */
export const NotFoundContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #0a0a0a, #000000);
  color: white;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
`;

/**
 * Main card holding 404 text + message + action button.
 * Layered above the glow animation for clarity.
 */
export const NotFoundContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px 50px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff88;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

/**
 * Highlighted 404 title with neon pulse animation.
 */
export const NotFoundTitle = styled.h1`
  font-size: 100px;
  font-weight: bold;
  margin: 0;
  color: #00ff88;
  text-shadow: 0 0 15px #00ff88, 0 0 30px #00ff88;
  animation: pulse 2s infinite alternate;

  @keyframes pulse {
    0% {
      text-shadow: 0 0 10px green, 0 0 20px #00ff88;
    }
    100% {
      text-shadow: 0 0 25px green, 0 0 40px #00ff88;
    }
  }
`;

/**
 * Short explanation message with readable contrast.
 */
export const NotFoundMessage = styled.p`
  font-size: 18px;
  margin: 15px 0 25px;
  color: #ffffffcc;
  letter-spacing: 0.5px;
`;

/**
 * CTA button that encourages the user to return.
 * Styled as a pill button with dynamic hover effects.
 */
export const NotFoundButton = styled(Link)`
  text-decoration: none;
  padding: 12px 30px;
  background-color: #00ff88;
  color: #000;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00cc6a;
    color: #fff;
    box-shadow: 0 0 15px #00ff88;
    transform: scale(1.05);
  }
`;

/**
 * Floating animated glow for futuristic visual depth.
 */
export const GlowEffect = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.15), transparent);
  border-radius: 50%;
  filter: blur(90px);
  animation: float 5s ease-in-out infinite alternate;

  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-25px);
    }
  }
`;
