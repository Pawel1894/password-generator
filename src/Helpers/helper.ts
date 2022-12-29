const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

export function GeneratePassword(
  useUpperLetters: boolean,
  useNumbers: boolean,
  useSymbols: boolean,
  length: number
): string {
  let charset = lowerLetters;
  let password = "";

  if (length <= 0) return "";

  if (useUpperLetters) charset += upperLetters;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  for (let index = 0; index < length; index++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
