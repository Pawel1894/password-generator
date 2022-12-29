import React from "react";
import { OPTION_TYPES } from "../Enums";
import { OptionsAction, OptionsState } from "../Types";
import OptionCheck from "./OptionCheck";

type Props = {
  options: OptionsState;
  dispatchOptions: React.Dispatch<OptionsAction>;
};

export default function Options({ options, dispatchOptions }: Props) {
  return (
    <div>
      <div className="flow" style={{ "--flow-gap": "0.75rem" } as React.CSSProperties}>
        <OptionCheck
          type={OPTION_TYPES.NUMBERS}
          dispatchOptions={dispatchOptions}
          value={options.useNumbers}
          label="Include Numbers"
        />
        <OptionCheck
          type={OPTION_TYPES.UPPER_LETTERS}
          dispatchOptions={dispatchOptions}
          value={options.useUpperLetters}
          label="Include Upper Letters"
        />
        <OptionCheck
          type={OPTION_TYPES.SYMBOLS}
          dispatchOptions={dispatchOptions}
          value={options.useSymbols}
          label="Include Symbols"
        />
      </div>
    </div>
  );
}
