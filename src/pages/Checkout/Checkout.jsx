import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout.jsx";

import {
  CheckoutContainer,
  CheckOuts,
  SuccessContainer,
  SuccessIcon,
  PaymentSuccess,
  GreetMsg,
  ReturnBtn,
} from "./styled";

/**
 * Checkout Success Page:
 * Communicates a complete payment state and
 * keeps UI minimal to avoid post-payment friction.
 */
const Checkout = () => {
  const navigate = useNavigate();

  // Redirect users to homepage after successful payment
  const RedirectToHome = () => navigate("/");

  return (
    <MainLayout>
      <CheckoutContainer>
        <CheckOuts>
          <SuccessContainer>
            <SuccessIcon />
          </SuccessContainer>

          <PaymentSuccess>Payment Successful</PaymentSuccess>
          <GreetMsg>Thank you for ordering!</GreetMsg>
          <GreetMsg>Your payment was completed successfully.</GreetMsg>

          <ReturnBtn onClick={RedirectToHome}>Return to Homepage</ReturnBtn>
        </CheckOuts>
      </CheckoutContainer>
    </MainLayout>
  );
};

export default Checkout;
