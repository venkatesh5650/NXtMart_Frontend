import {
  ProductWrapper,
  ProductImg,
  DetailsSection,
  ProductInfo,
  ProductTitle,
  ProductQuantity,
  ProductPrice,
  AddCartBtn,
  ProductLink, // styled Link replacing inline styles
  Controller,
  ControlButton,
  Quantity,
} from "./styled";

const ProductItem = ({
  productDetails,
  cartQuantity,
  onAddCart,
  onIncrease,
  onDecrease,
}) => {
  const { name, price, quantity, image_url, id } = productDetails;

  return (
    <ProductLink to={`/product/${id}`}>
      <ProductWrapper>
        <ProductImg src={image_url} alt={name} />

        <DetailsSection>
          <ProductInfo>
            <ProductTitle>{name}</ProductTitle>
            <ProductQuantity>Quantity: {quantity}</ProductQuantity>
            <ProductPrice>₹ {price}</ProductPrice>
          </ProductInfo>

          {/* CART ACTION AREA */}
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {cartQuantity === 0 ? (
              <AddCartBtn onClick={() => onAddCart(productDetails)}>
                Add to Cart
              </AddCartBtn>
            ) : (
              <Controller>
                <ControlButton onClick={() => onDecrease(id)}>-</ControlButton>

                <Quantity>{cartQuantity}</Quantity>

                <ControlButton onClick={() => onIncrease(id)}>+</ControlButton>
              </Controller>
            )}
          </div>
        </DetailsSection>
      </ProductWrapper>
    </ProductLink>
  );
};

export default ProductItem;
