import React from "react";

type Props = {
  label: string;
};

export default function OptionCheck({ label }: Props) {
  return (
    <label className="password__option pointer flex-center">
      <input className="pointer" type="checkbox" name="" id="" />
      <span>{label}</span>
    </label>
  );
}
