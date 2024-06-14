import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, getOneProduct, oneProduct } = useProduct();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => setProduct(oneProduct), [oneProduct]);

  const handleInput = (e) => {
    console.log(e);
    if (e.target.name == "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>

      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        onChange={handleInput}
        value={product.image}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
        value={product.price}
      />
      <Button onClick={handleClick} fullWidth variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default EditProduct;
