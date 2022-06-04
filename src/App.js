import { useState } from "react";
import { Input, Button, TextField, Box, Typography, Card } from "@mui/material";

import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [generated, setGenerated] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const clearAll = () => {
    setInput("");
    setGenerated("");
  };
  const handleGenerate = (sentence) => {
    const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    let data = sentence;
    let newString = "";
    const splitWords = data.split(" ");
    splitWords.map((word, i) => {
      if (word) {
        const firstLetter = word[0];
        const middleLetter = word[Math.ceil(word.length / 2) - 1];
        const lastLetter =
          i % 2 === 0 ? word[word.length - 1] : word[word.length - 1].toUpperCase();
        if (word.length < 3) {
          newString += firstLetter;
        } else if (word.length >= 3 && word.length < 5) {
          newString += lastLetter + firstLetter;
        } else {
          newString += lastLetter + middleLetter + firstLetter;
        }

        newString += specialCharacter[i % 10];
      }
      return null;
    });

    setGenerated(newString);
  };
  return (
    <Box
      sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}
    >
      <Card variant="outlined">
        <TextField
          id="outlined-basic"
          label="Type your sentence"
          variant="outlined"
          required
          onChange={handleInputChange}
        />

        <Box flex={1}>
          <Button onClick={clearAll} label="Clear">
            Clear
          </Button>
          <Button variant="contained" onClick={() => handleGenerate(input)} label="Clear">
            Generate
          </Button>
        </Box>
        <Box>
          <Typography>{input}</Typography>
          <Typography variant="h6">{generated}</Typography>
        </Box>
      </Card>
    </Box>
  );
}
