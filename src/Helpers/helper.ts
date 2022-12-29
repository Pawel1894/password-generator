import { OptionsState, PasswordSets, StrengthIndicator } from "../Types";

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

function checkNumberOfUsedOptions(options: OptionsState) {
  let userOptions = 0;
  if (options.useNumbers) userOptions++;
  if (options.useSymbols) userOptions++;
  if (options.useUpperLetters) userOptions++;

  return userOptions;
}

export function PasswordStrengthCalculator(options: OptionsState, passwordLength: number): StrengthIndicator {
  const numberOfUsedOptions = checkNumberOfUsedOptions(options);

  if (passwordLength <= 16 && passwordLength > 13 && numberOfUsedOptions === 0) return "average";

  if (passwordLength <= 13 && passwordLength > 10 && (numberOfUsedOptions === 1 || numberOfUsedOptions === 2))
    return "average";

  if (passwordLength <= 12 && passwordLength > 9 && numberOfUsedOptions === 3) return "average";

  if (passwordLength > 16) return "strong";

  if (passwordLength > 13 && (numberOfUsedOptions === 1 || numberOfUsedOptions === 2)) return "strong";

  if (passwordLength > 12 && numberOfUsedOptions === 3) return "strong";

  return "weak";
}

export const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (
      isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    );
  },
};
