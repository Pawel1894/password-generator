import React from "react";
import { StrengthIndicator } from "../Types";

type Props = {
  strength: StrengthIndicator;
};

export default function Strength({ strength }: Props) {
  return (
    <div className="password__strength bg-accent-300">
      <span className="password__strength-title text-white ">Strength</span>
      <span data-strength-level={strength} className="password__strength-indicator">
        {strength}
      </span>
    </div>
  );
}
