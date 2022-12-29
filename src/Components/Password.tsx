import React from "react";

type Props = {
  password: string;
};

export default function Password({ password }: Props) {
  return (
    <div>
      <input
        className="password__input pointer text-accent-400"
        type={"text"}
        disabled={true}
        value={password}
      />
    </div>
  );
}
