import {
  ProductWrapper,
  ProductImg,
  DetailsSection,
  ProductInfo,
  ProductTitle,
  ProductQuantity,
  ProductPrice,
  AddCartBtn,
  CartMsg,
  ProductLink, // styled Link replacing inline styles
} from "./styled";

const ProductItem = ({ productDetails, onAddCart, addCartMsg }) => {
  const { name, price, quantity, image_url, id } = productDetails;

  // Keep navigation on card click, but prevent navigation when clicking Add to Cart
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

          <div>
            <AddCartBtn
              onClick={(e) => {
                // Prevent Link navigation when Add to Cart button is clicked
                e.preventDefault();
                e.stopPropagation();
                onAddCart(productDetails);
              }}
            >
              Add to Cart
            </AddCartBtn>

            {addCartMsg && <CartMsg>{addCartMsg}</CartMsg>}
          </div>
        </DetailsSection>
      </ProductWrapper>
    </ProductLink>
  );
};

export default ProductItem;
