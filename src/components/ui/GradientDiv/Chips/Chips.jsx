import React from "react";
import { Chip, Stack } from "@mui/material";

const ChipsList = ({ items = [], color, size = "small" }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {items.map((item, index) => (
        <Chip
          key={index}
          label={item}
          variant="outlined"
          color={color}
          size={size}
          sx={{ fontSize: "0.8rem", borderRadius: "12px", marginTop: "0.3rem", marginBottom: "0rem" }}
        />
      ))}
    </Stack>
  );
};

export default ChipsList;
