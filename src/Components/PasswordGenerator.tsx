import React from "react";
import LengthSlider from "./LengthSlider";
import Password from "./Password";

export default function PasswordGenerator() {
  return (
    <div className="password">
      <h1 className="password__title">Password Generator</h1>
      <Password />
      <LengthSlider />
    </div>
  );
}
