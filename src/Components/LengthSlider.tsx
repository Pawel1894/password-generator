import React from "react";

type Props = {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
};

export default function LengthSlider({ passwordLength, setPasswordLength }: Props) {
  function onRangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordLength(Number(e.currentTarget.value));
  }

  return (
    <div className="password__slider">
      <input
        className="password__slider_input"
        type={"range"}
        min={5}
        max={25}
        defaultValue={10}
        onChange={onRangeHandler}
      />
      <span className="password__slider_value text-white">{passwordLength ?? 0}</span>
    </div>
  );
}
