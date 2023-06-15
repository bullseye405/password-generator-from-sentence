import { Box, Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

import { StrengthEnum, checkPasswordStrength, handlePasswordGenerate } from "./utils";

import { ContentCopy } from "@mui/icons-material";
import "./styles.css";
import { CustomLinearProgress } from "./CustomProgress";
import PasswordStrength from "./PasswordStrength";

export default function App() {
  const [input, setInput] = useState("");
  const [generated, setGenerated] = useState("");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInput(e.target.value);
  };

  const clearAll = () => {
    setInput("");
    setGenerated("");
  };

  useEffect(() => {
    const password = handlePasswordGenerate(input);
    setGenerated(password);
  }, [input]);

  const strengthData = useMemo(() => {
    return checkPasswordStrength(generated);
  }, [generated]);

  console.log({ strengthData });

  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2} pt={2}>
        {/* <Grid item lg md xs>
          Left Section
        </Grid> */}
        <Grid item lg={8} md={10} xs={12}>
          <Box display={"flex"}>
            <TextField
              id="outlined-basic"
              label="Type your sentence"
              value={input}
              variant="outlined"
              onChange={handleInputChange}
              fullWidth
              // multiline
            />
            <Box p={1}>
              <Button onClick={clearAll} variant="text">
                Clear
              </Button>
            </Box>
          </Box>

          <Box display={"flex"}>
            {!generated ? (
              <Typography variant="subtitle1">
                Type a sentence that you will never forget! Password based on your sentence will be
                generated here.
              </Typography>
            ) : (
              <>
                <Box
                  borderRadius={1}
                  p={1}
                  mr={1}
                  mt={1}
                  flex={1}
                  display={"flex"}
                  justifyContent={"space-between"}
                  bgcolor={"#f5f5f5"}
                >
                  <Typography variant="subtitle1">{input}</Typography>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(input);
                    }}
                  >
                    <ContentCopy />
                  </Button>
                </Box>

                <Box
                  borderRadius={1}
                  p={1}
                  mr={1}
                  mt={1}
                  flex={1}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems="center"
                  bgcolor={"#f5f5f5"}
                >
                  <Typography
                    variant="subtitle1"
                    alignContent={"center"}
                    style={{ wordBreak: "break-word" }}
                  >
                    {generated}
                  </Typography>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(generated);
                    }}
                  >
                    <ContentCopy />
                  </Button>
                </Box>
              </>
            )}
          </Box>
          <PasswordStrength
            // color={StrengthEnum.VERY_WEAK.color}
            // value={45}
            // emoji={StrengthEnum.VERY_WEAK.emoji}
            {...strengthData}
            value={strengthData.value || 0}
          />
        </Grid>
        {/* <Grid item lg md xs>
          <Box>Right Section</Box>
        </Grid> */}
      </Grid>
    </Container>
  );
}
