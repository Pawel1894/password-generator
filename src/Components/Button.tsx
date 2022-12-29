import React from "react";
import { GeneratePassword } from "../Helpers/helper";

type Props = {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  useUpperLetters: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  passwordLength: number;
};

export default function Button({
  setPassword,
  useUpperLetters,
  useNumbers,
  useSymbols,
  passwordLength,
}: Props) {
  function onClickHandler() {
    setPassword(GeneratePassword(useUpperLetters, useNumbers, useSymbols, passwordLength));
  }

  return (
    <button
      onClick={onClickHandler}
      className="password__button bg-accent-400 text-accent-200 fw-bold pointer"
    >
      Generate
    </button>
  );
}
