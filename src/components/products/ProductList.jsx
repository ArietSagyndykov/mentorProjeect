import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const { getProducts, products } = useProduct();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  const itemsPerPage = 6;
  const countPage = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const beginIndex = (page - 1) * itemsPerPage;
    const endIndex = beginIndex + itemsPerPage;
    return products.slice(beginIndex, endIndex);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PaginationControlled
        page={page}
        countPage={countPage}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
