import React from "react";
import { Chip, Stack } from "@mui/material";

const ChipsList = ({ items = [], color, textColor, size = "small" }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {items.map((item, index) => (
        <Chip
          key={index}
          label={item}
          variant="outlined"
          size={size}
          sx={{
            padding: "2px",
            fontSize: "0.7rem",
            borderRadius: "12px",
            marginTop: "0.3rem",
            marginBottom: "0rem",
            backgroundColor: color, // 🔹 dynamic background
            color: textColor, // 🔹 dynamic text color
            border: "none",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        />
      ))}
    </Stack>
  );
};

export default ChipsList;
