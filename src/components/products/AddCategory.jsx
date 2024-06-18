import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddCategory = ({ open, handleClose }) => {
  const { createCategory } = useProduct();
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: "700",
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "bakcground-paper",
    p: 4,
  };

  const [category, setCategory] = useState("");
  const handleClick = () => {
    console.log(category);
    if (!category.trim()) {
      alert("Enter data");
      return;
    }
    const newCategory = {
      name: category,
    };
    createCategory(newCategory);
    setCategory("");
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title">Add new category</Typography>
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button onClick={handleClick}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategory;
