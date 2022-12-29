import React from "react";

export default function Strength() {
  return (
    <div className="password__strength bg-accent-300">
      <span className="password__strength-title text-white ">Strength</span>
      <span data-strength-level="weak" className="password__strength-indicator">
        Weak
      </span>
    </div>
  );
}
