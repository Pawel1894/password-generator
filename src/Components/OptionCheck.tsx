import React from "react";
import { OPTION_TYPES } from "../Enums";
import { OptionsAction } from "../Types";

type Props = {
  label: string;
  value: boolean;
  type: OPTION_TYPES;
  dispatchOptions: React.Dispatch<OptionsAction>;
};

export default function OptionCheck({ label, value, dispatchOptions, type }: Props) {
  function onValueChangeHandler() {
    dispatchOptions({ type: type, payload: !value });
  }

  return (
    <label className="password__option pointer flex-center">
      <input className="pointer" type="checkbox" checked={value} onClick={onValueChangeHandler} />
      <span className="text-white">{label}</span>
    </label>
  );
}
