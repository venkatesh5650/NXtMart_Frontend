import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  DetailsContainer,
  DetailsWrapper,
  ImageBox,
  InfoBox,
  Title,
  Price,
  CategoryText,
  Description,
  AddCartBtn,
  BackBtn,
} from "./styledComponents";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token=Cookies.get("token");
      const response = await fetch(
        `https://nxtmartbackend-5.onrender.com/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );

      const data = await response.json();
      setItem(data);
    };

    fetchProduct();
  }, [id]);

  if (!item) {
    return (
      <DetailsContainer>
        <h2 style={{ color: "green" }}>Loading...</h2>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
      <DetailsWrapper>
        <ImageBox>
          <img src={item.image_url} alt={item.name} />
        </ImageBox>

        <InfoBox>
          <Title>{item.name}</Title>
          <Price>₹{item.price}</Price>

          <CategoryText>
            Category: <span>{item.category}</span>
          </CategoryText>

          <Description>{item.description}</Description>

          <AddCartBtn>Add to Cart</AddCartBtn>

          <BackBtn onClick={() => window.history.back()}>← Back</BackBtn>
        </InfoBox>
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default ProductDetails;
