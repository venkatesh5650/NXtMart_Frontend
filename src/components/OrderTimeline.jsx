import styled from "styled-components";

const steps = ["CREATED", "PAID", "PACKED", "SHIPPED", "DELIVERED"];

export default function OrderTimeline({ history }) {
  const currentStatus =
    history.length > 0 ? history[history.length - 1].to_status : "CREATED";

  return (
    <>
      <TimelineWrapper>
        {steps.map((step, index) => {
          const isCompleted = steps.indexOf(currentStatus) >= index;

          return (
            <Step key={step}>
              <Circle $completed={isCompleted}>
                {isCompleted ? "✔" : index + 1}
              </Circle>
              <Label>{step}</Label>
              {index < steps.length - 1 && <Line $completed={isCompleted} />}
            </Step>
          );
        })}
      </TimelineWrapper>

      {currentStatus === "CANCELLED" && (
        <CancelledBox>
          ❌ This order has been cancelled
        </CancelledBox>
      )}
    </>
  );
}

/* ================= Styles ================= */

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ $completed, theme }) =>
    $completed ? theme.primary : theme.border};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: all 0.3s ease;
`;

const Label = styled.div`
  margin-left: 0.5rem;
  font-size: 0.85rem;
`;

const Line = styled.div`
  width: 40px;
  height: 2px;
  background: ${({ $completed, theme }) =>
    $completed ? theme.primary : theme.border};
  margin: 0 0.5rem;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    width: 2px;
    height: 24px;
    margin: 0.5rem 0;
  }
`;

const CancelledBox = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #e74c3c;
  color: white;
  border-radius: 6px;
  font-size: 0.9rem;
`;
