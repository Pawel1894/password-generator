import React from "react";
import OptionCheck from "./OptionCheck";

type Props = {};

export default function Options({}: Props) {
  return (
    <div>
      <div className="flow" style={{ "--flow-gap": "0.75rem" } as React.CSSProperties}>
        <OptionCheck label="Include Letters" />
        <OptionCheck label="Include Numbers" />
        <OptionCheck label="Include Symbols" />
      </div>
    </div>
  );
}
