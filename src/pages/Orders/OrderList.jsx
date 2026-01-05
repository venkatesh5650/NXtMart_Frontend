import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import {
  Wrapper,
  HeaderRow,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Grid,
  OrderCard,
  OrderId,
  Status,
  DateText,
  EmptyState,
} from "./ordersListStyled";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await api.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchOrders();
  }, []);

  return (
    <Wrapper>
      <HeaderRow>
        <h2>My Orders</h2>
        <Actions>
          <SecondaryButton onClick={() => navigate("/cart")}>
            View Cart
          </SecondaryButton>
          <PrimaryButton onClick={() => navigate("/")}>
            Browse Products
          </PrimaryButton>
        </Actions>
      </HeaderRow>

      {orders.length === 0 ? (
        <EmptyState>
          <p>You haven’t placed any orders yet.</p>
          <Actions>
            <PrimaryButton onClick={() => navigate("/")}>
              Browse Products
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate("/cart")}>
              Go to Cart
            </SecondaryButton>
          </Actions>
        </EmptyState>
      ) : (
        <Grid>
          {orders.map((o) => (
            <OrderCard key={o.id} to={`/orders/${o.id}`}>
              <div>
                <OrderId>Order #{o.id}</OrderId>
                <Status status={o.status}>{o.status}</Status>
              </div>
              <DateText>{new Date(o.created_at).toLocaleDateString()}</DateText>
            </OrderCard>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
}
