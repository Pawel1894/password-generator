import React, { useMemo, useState } from "react";
import { GeneratePassword } from "../Helpers/helper";
import Button from "./Button";
import LengthSlider from "./LengthSlider";
import Options from "./Options";
import Password from "./Password";
import Strength from "./Strength";

export default function PasswordGenerator() {
  const [useUpperLetters, setUseUpperLetters] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [password, setPassword] = useState(() =>
    GeneratePassword(useUpperLetters, useNumbers, useSymbols, passwordLength)
  );

  return (
    <div className="password flow">
      <h1 className="password__title ">Password Generator</h1>
      <Password password={password} />
      <LengthSlider />
      <Options />
      <Strength />
      <Button />
    </div>
  );
}
