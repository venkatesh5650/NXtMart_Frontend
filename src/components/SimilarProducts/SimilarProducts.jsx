import { useNavigate } from "react-router-dom";

import {
  SimilarSection,
  SimilarTitle,
  SimilarList,
  SimilarCard,
  SimilarImage,
  SimilarName,
  SimilarPrice,
} from "./styled";

/**
 * Renders a lightweight, grid-based recommendation list.
 * Optimized to avoid unnecessary DOM rendering when list is empty.
 */
const SimilarProducts = ({ list }) => {
  const navigate = useNavigate();

  if (!list || list.length === 0) return null; // prevents layout shift and improves UX

  return (
    <SimilarSection>
      <SimilarTitle>Similar Products</SimilarTitle>

      <SimilarList>
        {list.map((product) => (
          <SimilarCard
            key={product.id}
            onClick={() => {
              // Instant product navigation with a smooth viewport reset
              navigate(`/product/${product.id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <SimilarImage src={product.image_url} alt={product.name} />
            <SimilarName>{product.name}</SimilarName>
            <SimilarPrice>₹{product.price}</SimilarPrice>
          </SimilarCard>
        ))}
      </SimilarList>
    </SimilarSection>
  );
};

export default SimilarProducts;
