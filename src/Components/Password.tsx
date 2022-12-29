import React from "react";

export default function Password() {
  return (
    <div className="password__input flex-center">
      <input
        className="password__input pointer text-accent-400"
        type={"password"}
        disabled={true}
        placeholder="Password"
      />
      <div className="password__buttons-group flex-center">
        <button className="password__btn pointer text-accent-400">V</button>
        <button className="password__btn pointer text-accent-400">G</button>
      </div>
    </div>
  );
}
