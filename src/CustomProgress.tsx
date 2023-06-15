import { Box } from "@mui/material";
import React from "react";

export const CustomLinearProgress = ({ value, color }: { value: number; color: string }) => {

  console.log({value})
  return (
    <Box
      border={1}
      sx={{ background: "#f5f5f5", padding: "0.5px" }}
      borderRadius={10}
      height={10}
      borderColor={"#d9d9d9"}
    >
      <Box
        // border={1}
        sx={{ background: color, width: `${value}%` }}
        height={10}
        borderRadius={4}
      ></Box>
    </Box>
  );
};
