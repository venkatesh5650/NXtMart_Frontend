import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import CartItem from "../../components/CartItem/cartItem";
import MainLayout from "../../layouts/MainLayout.jsx";

import {
  CartContainer,
  CartHeader,
  CartsView,
  CartItemsContainer,
  EmptyCartContainer,
  EmptyCartIcon,
  EmptyCartMsg,
  BillContainer,
  BillMsg,
  CheckoutButton,
  QueryContainer,
  ContactMedia,
  QueryText,
  MediaContainer,
  Media,
  CopyRight,
  SearchContainer,
  SearchInput,
  NoResultsText,
  ItemCount,
} from "./styled";

const Cart = () => {
  const username = localStorage.getItem("username") || "guest";
  const storageKey = `cartList_${username}`;

  const [Cartlist, setCartlist] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  const [TotalAmount, SetTotalAmount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Centralized updater → ensures consistent state + storage sync
  const updateLocalStorage = (updated) => {
    setCartlist(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  // Increase product quantity for a specific index
  const increaseQuantity = (index) => {
    const updated = [...Cartlist];
    updated[index].cartQuantity += 1;
    updateLocalStorage(updated);
  };

  // Decrease quantity or remove product when quantity hits zero
  const decreaseQuantity = (index) => {
    const updated = [...Cartlist];
    if (updated[index].cartQuantity > 1) {
      updated[index].cartQuantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateLocalStorage(updated);
  };

  // Recalculate total whenever cart changes
  useEffect(() => {
    const total = Cartlist.reduce(
      (acc, cart) => acc + cart.price * cart.cartQuantity,
      0
    );
    SetTotalAmount(total);
  }, [Cartlist]);

  // Simple checkout handler with state reset for user
  const directToCheckout = () => {
    navigate("/Checkout");
    localStorage.removeItem(storageKey);
  };

  // Real-time search inside cart for better UX
  const filteredList = Cartlist.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <CartContainer>
        {Cartlist.length > 0 && <CartHeader>My Cart</CartHeader>}

        <CartsView>
          {Cartlist.length > 0 ? (
            <CartItemsContainer>
              <SearchContainer>
                <SearchInput
                  placeholder="Search items in cart..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ItemCount>{filteredList.length} items</ItemCount>
              </SearchContainer>

              {filteredList.length === 0 && (
                <NoResultsText>No matching items found</NoResultsText>
              )}

              {filteredList.map((item, index) => (
                <CartItem
                  key={item.id}
                  itemDetails={item}
                  Increase={() => increaseQuantity(index)}
                  Decrease={() => decreaseQuantity(index)}
                />
              ))}
            </CartItemsContainer>
          ) : (
            <EmptyCartContainer>
              <EmptyCartIcon />
              <EmptyCartMsg>Your Cart is Empty</EmptyCartMsg>
            </EmptyCartContainer>
          )}
        </CartsView>

        {Cartlist.length > 0 && (
          <BillContainer>
            <BillMsg>
              Total ({Cartlist.length} items): ₹ {TotalAmount}/-
            </BillMsg>

            <CheckoutButton onClick={directToCheckout}>
              Checkout
            </CheckoutButton>
          </BillContainer>
        )}

        <QueryContainer>
          <ContactMedia>
            <QueryText>
              For any queries, contact +91-9666677770 or mail us at
              help@nxtmart.co.in
            </QueryText>

            <MediaContainer>
              <Media>
                <FaFacebook />
              </Media>
              <Media>
                <FaPinterest />
              </Media>
              <Media>
                <FaTwitter />
              </Media>
              <Media>
                <FaInstagram />
              </Media>
            </MediaContainer>
          </ContactMedia>

          <CopyRight>© 2023 NxtMart Groceries Supply Pvt Ltd</CopyRight>
        </QueryContainer>
      </CartContainer>
    </MainLayout>
  );
};

export default Cart;
