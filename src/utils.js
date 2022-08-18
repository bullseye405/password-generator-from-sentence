import { specialCharacter } from "./constants";

export const handlePasswordGenerate = (sentence) => {
  let data = sentence;
  let newString = "";
  const splitWords = data.split(" ");
  splitWords.map((word, i) => {
    if (word) {
      const firstLetter = word[0];
      const middleLetter = word[Math.ceil(word.length / 2) - 1];
      const lastLetter = i % 2 === 0 ? word[word.length - 1] : word[word.length - 1].toUpperCase();
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

  return newString;
};
