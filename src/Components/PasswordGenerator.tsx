import React, { useMemo, useReducer, useState } from "react";
import { OPTION_TYPES } from "../Enums";
import { GeneratePassword, PasswordStrengthCalculator } from "../Helpers/helper";
import { OptionsAction, OptionsState, StrengthIndicator } from "../Types";
import Button from "./Button";
import LengthSlider from "./LengthSlider";
import Options from "./Options";
import Password from "./Password";
import Strength from "./Strength";

const initialState: OptionsState = {
  useUpperLetters: true,
  useNumbers: true,
  useSymbols: true,
};

function optionsReducer(state: OptionsState, action: OptionsAction) {
  switch (action.type) {
    case OPTION_TYPES.UPPER_LETTERS:
      return { ...state, useUpperLetters: action.payload };
    case OPTION_TYPES.NUMBERS:
      return { ...state, useNumbers: action.payload };
    case OPTION_TYPES.SYMBOLS:
      return { ...state, useSymbols: action.payload };
    default:
      return state;
  }
}

export default function PasswordGenerator() {
  const [options, dispatchOptions] = useReducer(optionsReducer, initialState);
  const [passwordLength, setPasswordLength] = useState<number>(13);
  const [password, setPassword] = useState(() =>
    GeneratePassword(options.useUpperLetters, options.useNumbers, options.useSymbols, passwordLength)
  );

  const strength: StrengthIndicator = useMemo(
    () => PasswordStrengthCalculator(options, passwordLength),
    [options, passwordLength]
  );

  return (
    <div className="password flow">
      <h1 className="password__title ">Password Generator</h1>
      <Password password={password} />
      <LengthSlider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
      <Options options={options} dispatchOptions={dispatchOptions} />
      <Strength strength={strength} />
      <Button
        setPassword={setPassword}
        useUpperLetters={options.useUpperLetters}
        useNumbers={options.useNumbers}
        useSymbols={options.useSymbols}
        passwordLength={passwordLength}
      />
    </div>
  );
}
