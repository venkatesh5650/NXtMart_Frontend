import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FiMenu, FiLogOut } from "react-icons/fi";
import {
  LayoutWrapper,
  AppContainer,
  Sidebar,
  NavItem,
  ContentArea,
  TopBar,
  MenuButton,
  Overlay,
  RightActions,
  LogoutButton,
  Brand,
} from "./layoutStyled";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <LayoutWrapper>
      <TopBar>
        <MenuButton onClick={() => setOpen(true)}>
          <FiMenu size={22} />
        </MenuButton>

        <Brand>NxtMart Admin</Brand>

        <RightActions>
          <span>ADMIN MODE</span>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut size={16} />
            Logout
          </LogoutButton>
        </RightActions>
      </TopBar>

      <AppContainer>
        <Sidebar open={open}>
          <NavItem to="/admin/orders" onClick={() => setOpen(false)}>
            Orders
          </NavItem>
          <NavItem to="/admin/products" onClick={() => setOpen(false)}>
            Products
          </NavItem>
          <NavItem to="/admin/users" onClick={() => setOpen(false)}>
            Users
          </NavItem>
        </Sidebar>

        <ContentArea>
          <Outlet />
        </ContentArea>
      </AppContainer>

      {open && <Overlay onClick={() => setOpen(false)} />}
    </LayoutWrapper>
  );
}
