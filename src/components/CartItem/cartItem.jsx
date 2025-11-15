import {
  CartItemContainer,
  ItemContainer,
  ItemDetails,
  ItemImg,
  ItemTextBlock,
  ItemName,
  ItemPrice,
  Controller,
  ControlButton,
  Quantity,
  StyledLink,
  Divider,
} from "./styled";

const CartItem = ({ itemDetails, Increase, Decrease }) => {
  const { id, name, image_url, price, cartQuantity, quantity } = itemDetails;

  return (
    <StyledLink to={`/product/${id}`}>
      <CartItemContainer>
        <ItemContainer>
          {/* Product Thumbnail + Basic Info */}
          <ItemDetails>
            <ItemImg src={image_url} alt={name} />
            <ItemTextBlock>
              <ItemName>{name}</ItemName>
              <p>{quantity}</p>
              <ItemPrice>₹ {price}</ItemPrice>
            </ItemTextBlock>
          </ItemDetails>

          {/* Quantity Controller – prevents page navigation while adjusting */}
          <Controller
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ControlButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Increase();
              }}
            >
              +
            </ControlButton>

            <Quantity>{cartQuantity}</Quantity>

            <ControlButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Decrease();
              }}
            >
              -
            </ControlButton>
          </Controller>
        </ItemContainer>

        <Divider />
      </CartItemContainer>
    </StyledLink>
  );
};

export default CartItem;
