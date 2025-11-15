import Header from "../components/Header/Header";

/**
 * MainLayout:
 * Centralizes shared UI such as Header and keeps pages clean.
 * Ensures consistent structure across all routes without repeating layout code.
 */
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
