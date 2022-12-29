import { OPTION_TYPES } from "./Enums";

export type OptionsAction = {
  type: OPTION_TYPES;
  payload: boolean;
};

export type OptionsState = {
  useUpperLetters: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
};

export type PasswordSets = {
  lowerLetters: string;
  [key: string]: string;
};

export type StrengthIndicator = "weak" | "average" | "strong";
