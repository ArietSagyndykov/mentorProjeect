import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label="Category"
          //   onChange={handleChange}
          name="category"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
