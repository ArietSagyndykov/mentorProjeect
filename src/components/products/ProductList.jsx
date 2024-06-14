import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Box>
        {products.map((elem) => (
          <ProductCard key={elem.id} {...elem} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;
