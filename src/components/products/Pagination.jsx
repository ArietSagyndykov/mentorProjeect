import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ page, countPage, handleChange }) => {
  return (
    <div>
      <Stack>
        <Typography>Page {page} :</Typography>
        <Pagination
          count={countPage}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default PaginationControlled;
