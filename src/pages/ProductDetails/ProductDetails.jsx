import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout.jsx";
import { fetchProductDetails, fetchSimilarProducts } from "../../api/products";

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
  CartMsg,
  LoadingText, // new styled component for consistent style
} from "./styled";

import SimilarProducts from "../../components/SimilarProducts/SimilarProducts.jsx";

/**
 * ProductDetails page:
 * - Loads product details and similar products.
 * - Keeps add-to-cart logic local and stores cart in localStorage (simple client-side cart).
 */
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [cartMsg, setCartMsg] = useState("");
  const [similarProducts, setSimilarProducts] = useState([]);

  const username = localStorage.getItem("username") || "guest";
  const storageKey = `cartList_${username}`;

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  // Add to cart: update quantity if exists, otherwise push new item.
  // State + localStorage are kept in sync for persistence.
  const onAddCart = () => {
    const cart = [...cartList];
    const index = cart.findIndex((p) => p.id === item.id);

    let msg = "";

    if (index >= 0) {
      cart[index].cartQuantity += 1;
      msg = "Updated quantity";
    } else {
      cart.push({ ...item, cartQuantity: 1 });
      msg = "Added to Cart";
    }

    setCartList(cart);
    localStorage.setItem(storageKey, JSON.stringify(cart));
    setCartMsg(msg);

    setTimeout(() => setCartMsg(""), 2000);
  };

  // Fetch main product details
  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductDetails(id);
      const data = await response.json();
      setItem(data);
    };
    loadProduct();
  }, [id]);

  // Fetch similar products after the main product is loaded.
  useEffect(() => {
    if (!item?.category) return;

    const loadSimilar = async () => {
      const response = await fetchSimilarProducts(item.category);
      let data = await response.json();
      let products = data.products || [];
      products = products.filter((p) => p.id !== item.id);
      setSimilarProducts(products);
    };

    loadSimilar();
  }, [item]);

  if (!item) {
    return (
      <DetailsContainer>
        <LoadingText>Loading...</LoadingText>
      </DetailsContainer>
    );
  }

  return (
    <MainLayout>
      <DetailsContainer>
        <div>
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

              <AddCartBtn onClick={onAddCart}>Add to Cart</AddCartBtn>
              {cartMsg && <CartMsg>{cartMsg}</CartMsg>}

              <BackBtn onClick={() => navigate(-1)}>← Back</BackBtn>
            </InfoBox>
          </DetailsWrapper>

          {/* Similar products — lightweight recommendation list */}
          <SimilarProducts list={similarProducts} />
        </div>
      </DetailsContainer>
    </MainLayout>
  );
};

export default ProductDetails;
