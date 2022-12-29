import React from "react";
import Button from "./Button";
import LengthSlider from "./LengthSlider";
import Options from "./Options";
import Password from "./Password";
import Strength from "./Strength";

export default function PasswordGenerator() {
  return (
    <div className="password flow">
      <h1 className="password__title ">Password Generator</h1>
      <Password />
      <LengthSlider />
      <Options />
      <Strength />
      <Button />
    </div>
  );
}
