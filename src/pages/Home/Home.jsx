import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout.jsx";
import ProductItem from "../../components/ProductItem/ProductItem";
import { fetchProducts } from "../../api/products";

import {
  HomeContainer,
  HomeSection,
  CategorySection,
  CategoryHeader,
  CategoryContainer,
  CategoryItem,
  CategoryBtn,
  TopControlsContainer,
  SearchInput,
  SortSelect,
  ProductsSection,
  ProductCard,
  MainContent,
  EmptyResults,
  LoaderContainer,
  PaginationContainer,
  PageButton,
} from "./styled";

const categoriesList = [
  { categoryId: 1, categoryName: "All" },
  { categoryId: 2, categoryName: "Fruits & Vegetables" },
  { categoryId: 3, categoryName: "Prepared Foods" },
  { categoryId: 4, categoryName: "Oil" },
  { categoryId: 5, categoryName: "Frozen Foods" },
  { categoryId: 6, categoryName: "Meat & Seafood" },
  { categoryId: 7, categoryName: "Home Needs" },
  { categoryId: 8, categoryName: "Beverages" },
];

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //  PAGINATION STATE (ADDED)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const username = localStorage.getItem("username") || "guest";
  const storageKey = `cartList_${username}`;

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  const onAddCart = (product) => {
    const cart = [...cartList];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      cart[index].cartQuantity += 1;
      cart[index].addCartMsg = "Updated Quantity";
    } else {
      cart.push({ ...product, cartQuantity: 1, addCartMsg: "Added to Cart" });
    }

    setCartList(cart);
    localStorage.setItem(storageKey, JSON.stringify(cart));

    setTimeout(() => {
      const updated = [...cart];
      const i = updated.findIndex((item) => item.id === product.id);
      if (i >= 0) {
        updated[i].addCartMsg = "";
        setCartList(updated);
        localStorage.setItem(storageKey, JSON.stringify(updated));
      }
    }, 2000);
  };

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      const orderBy = sortOrder === "" ? "id" : "price";
      const order = sortOrder === "" ? "ASC" : sortOrder;

      let query = `search_q=${searchInput}&order_by=${orderBy}&order=${order}&page=${currentPage}&limit=${limit}`;

      if (activeCategory !== "All") {
        query += `&category=${encodeURIComponent(activeCategory)}`;
      }

      const response = await fetchProducts(query);
      if (response.ok) {
        const data = await response.json();
        setProductsData(data.products);       
        setTotalPages(data.totalPages);       
      }

      setIsLoading(false);
    };

    loadProducts();
  }, [activeCategory, searchInput, sortOrder, currentPage]);

  return (
    <MainLayout>
      <HomeContainer>
        <HomeSection>
          <CategorySection>
            <CategoryHeader>Categories</CategoryHeader>

            <CategoryContainer>
              {categoriesList.map((cat) => (
                <CategoryItem key={cat.categoryId}>
                  <CategoryBtn
                    $active={activeCategory === cat.categoryName}
                    onClick={() => {
                      setActiveCategory(cat.categoryName);
                      setCurrentPage(1);   // RESET PAGE ON FILTER CHANGE
                    }}
                  >
                    {cat.categoryName}
                  </CategoryBtn>
                </CategoryItem>
              ))}
            </CategoryContainer>
          </CategorySection>

          <MainContent>
            <TopControlsContainer>
              <SearchInput
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setCurrentPage(1); 
                }}
              />

              <SortSelect
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1); 
                }}
              >
                <option value="">Sort Price</option>
                <option value="ASC">Low → High</option>
                <option value="DESC">High → Low</option>
              </SortSelect>
            </TopControlsContainer>

            <ProductsSection $empty={productsData.length === 0}>
              {isLoading ? (
                <LoaderContainer>Loading...</LoaderContainer>
              ) : productsData.length === 0 ? (
                <EmptyResults>No Results Found</EmptyResults>
              ) : null}

              {productsData.map((product) => {
                const cartItem = cartList.find((x) => x.id === product.id);

                return (
                  <ProductCard key={product.id}>
                    <ProductItem
                      productDetails={product}
                      onAddCart={onAddCart}
                      addCartMsg={cartItem?.addCartMsg || ""}
                    />
                  </ProductCard>
                );
              })}
            </ProductsSection>

            {/*PAGINATION BUTTONS (GREEN - NXT MART THEME) */}
            {totalPages > 1 && (
              <PaginationContainer>
                <PageButton
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Prev
                </PageButton>

                {[...Array(totalPages)].map((_, index) => (
                  <PageButton
                    key={index}
                    $active={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PageButton>
                ))}

                <PageButton
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </PageButton>
              </PaginationContainer>
            )}
          </MainContent>
        </HomeSection>
      </HomeContainer>
    </MainLayout>
  );
};

export default Home;
