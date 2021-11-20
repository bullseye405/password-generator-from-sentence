import { useState } from "react";
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
    const splittedWords = data.split(" ");
    splittedWords.map((word, i) => {
      if (word) {
        const firstLetter = word[0];
        const middleLetter = word[Math.ceil(word.length / 2) - 1];
        const lastLetter = word[word.length - 1];
        if (word.length < 3) {
          newString += firstLetter.toUpperCase();
        } else if (word.length >= 3 && word.length < 5) {
          newString += firstLetter + lastLetter.toUpperCase();
        } else {
          newString += firstLetter + middleLetter.toUpperCase() + lastLetter;
        }

        newString += specialCharacter[i % 10];
      }
      return null;
    });

    setGenerated(newString);
  };
  return (
    <div className="App">
      <div className="input-container">
        <label>Type a sentence</label>
        <input type="text" value={input} onChange={handleInputChange} />
        <div className="btn-container">
          <button onClick={clearAll} label="Clear">
            <p>Clear</p>
          </button>
          <button onClick={() => handleGenerate(input)} label="Clear">
            <p>Generate</p>
          </button>
        </div>
      </div>
      <div className="body">
        <p>{input}</p>
        <h3>{generated}</h3>
      </div>
    </div>
  );
}
