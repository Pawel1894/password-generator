import React from "react";

export default function Password() {
  return (
    <div>
      <input
        className="password__input pointer text-accent-400"
        type={"text"}
        disabled={true}
        value="TestoweHaslo123"
      />
    </div>
  );
}
