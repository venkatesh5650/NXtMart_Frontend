import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useTheme } from "styled-components";

import {
  HeaderContainer,
  MobileCartWrapper,
  MobileCartIcon,
  MobileCartBadge,
  DesktopCartWrapper,
  DesktopCartIcon,
  DesktopCartBadge,
  Logo,
  Tagline,
  NavContainer,
  NavItem,
  NavButton,
  MobileMenuIcon,
  MobileNavMenu,
} from "./styled";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount =
    JSON.parse(
      localStorage.getItem(
        `cartList_${localStorage.getItem("username") || "guest"}`
      )
    )?.length || 0;

  const theme = useTheme();

  const logout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
        alt="Logo"
        onClick={() => navigate("/")}
      />

      <Tagline>Freshness Delivered. Every Day.</Tagline>

      <NavContainer>
        <NavItem>
          <NavButton onClick={() => navigate("/")}>Home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => navigate("/cart")}>
            Cart
            {cartItemCount > 0 && (
              <DesktopCartWrapper>
                <DesktopCartIcon />
                <DesktopCartBadge>{cartItemCount}</DesktopCartBadge>
              </DesktopCartWrapper>
            )}
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={logout}>Logout</NavButton>
        </NavItem>
      </NavContainer>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
     
        <MobileCartWrapper onClick={() => navigate("/cart")}>
          <MobileCartIcon />
          {cartItemCount > 0 && (
            <MobileCartBadge>{cartItemCount}</MobileCartBadge>
          )}
        </MobileCartWrapper>

   
        <MobileMenuIcon onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <IoClose size={28} color={theme.text} />
          ) : (
            <GiHamburgerMenu size={28} color={theme.text} />
          )}
        </MobileMenuIcon>
      </div>

      {menuOpen && (
        <MobileNavMenu>
          <NavButton onClick={() => navigate("/")}>Home</NavButton>
          <NavButton onClick={() => navigate("/cart")}>Cart</NavButton>
          <NavButton onClick={logout}>Logout</NavButton>
        </MobileNavMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
