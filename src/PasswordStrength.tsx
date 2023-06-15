import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { CustomLinearProgress } from "./CustomProgress";
import Emoji from "./Emoji";

type Props = {
  color: string;
  value: number;
  emoji: string;
};

const PasswordStrength = ({ color, value, emoji }: Props) => {
  return (
    <Card>
      <Box p={3}>
        <Box display={"flex"} justifyContent={"space-between"} my={1} alignItems={"center"}>
          <Typography>Password Strength</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography color={color} mr={1}>
              Poor
            </Typography>
            <Emoji label="Sad" symbol={emoji} />
          </Box>
        </Box>

        <CustomLinearProgress value={value} color={color} />
      </Box>
    </Card>
  );
};

export default PasswordStrength;
