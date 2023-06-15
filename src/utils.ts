import { patterns, specialCharacter } from "./constants";

export const handlePasswordGenerate = (sentence: string) => {
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

export function checkPasswordStrengthSimple(password: string) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
  if (password.length < 8 || !regex.test(password)) {
    return "weak";
  } else if (password.length < 12) {
    return "medium";
  } else {
    return "strong";
  }
}

export const StrengthEnum = {
  VERY_WEAK: {
    strength: "Very weak",
    color: "#db2828",
    emoji: "&#128531;",
    value: 25,
  },
  WEAK: {
    strength: "Weak",
    color: "#f2711c",
    emoji: "&#128532;",
    value: 50,
  },
  Moderate: {
    strength: "Moderate",
    color: "#fbbd08",
    emoji: "&#128512;",
    value: 75,
  },
  Strong: {
    strength: "Strong",
    color: "#21ba45",
    emoji: "&#128513;",
    value: 100,
  },
};

interface ICheckPasswordStrength {
  message?: string;
  color: string;
  emoji: string;
  strength?: string;
  complexity?: number;
  value?: number;
}

export function checkPasswordStrength(password: string): ICheckPasswordStrength {
  let strength = 0;
  let message = "";

  let color = "";

  // Check length
  if (password.length >= 8) {
    strength += 1;
  } else {
    message = "Password must be at least 8 characters long";
  }

  // Check complexity
  let complexity = 0;
  for (let key in patterns) {
    if (patterns.hasOwnProperty(key)) {
      let regex = new RegExp(key, "g");
      let count = (password.match(regex) || []).length;

      complexity += count * patterns[key];
    }
  }

  if (complexity > 0) {
    strength += 1;
  } else {
    message =
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  // Check uniqueness
  if (password.length === new Set(password).size) {
    strength += 1;
  } else {
    message = "Password must not contain repeating characters";
  }

  let returnData: ICheckPasswordStrength = {
    message: "",
    color: "",
    emoji: "",
    value: 0,
  };
  // Check strength
  if (strength === 0) {
    returnData = StrengthEnum.VERY_WEAK;
  } else if (strength === 1) {
    returnData = StrengthEnum.WEAK;
  } else if (strength === 2) {
    returnData = StrengthEnum.Moderate;
  } else if (strength === 3) {
    returnData = StrengthEnum.Strong;
  }

  return {
    ...returnData,
    // strength,
    message,
    complexity,
  };
}
