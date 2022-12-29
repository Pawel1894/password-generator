import { PasswordSets } from "../Types";

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getRandomCharacter(charset: string) {
  return charset.charAt(Math.floor(Math.random() * charset.length));
}

function shuffleArray(array: Array<any>) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export function GeneratePassword(
  useUpperLetters: boolean,
  useNumbers: boolean,
  useSymbols: boolean,
  length: number
): string {
  const charset: PasswordSets = {
    lowerLetters: lowerLetters,
  };
  let allCharacters = "";
  let password = [];

  if (length <= 0) return "";

  if (useUpperLetters) charset.upperLetters = upperLetters;
  if (useNumbers) charset.numbers = numbers;
  if (useSymbols) charset.symbols = symbols;

  for (const property in charset) {
    if (property in charset)
      if (property in charset) {
        allCharacters += charset[property];
        password.push(getRandomCharacter(charset[property]));
      }
  }

  for (let index = Object.keys(charset).length; index < length; index++) {
    password.push(getRandomCharacter(allCharacters));
  }

  const result = shuffleArray(password).join("");
  return result;
}
