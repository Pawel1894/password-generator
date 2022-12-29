import React from "react";

export default function LengthSlider() {
  return (
    <div className="password__slider">
      <input className="password__slider_input" type={"range"} min={5} max={18} defaultValue={10} />
      <span className="password__slider_value">10</span>
    </div>
  );
}
