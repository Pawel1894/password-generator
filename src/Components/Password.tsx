import React, { useState } from "react";

type Props = {
  password: string;
};

export default function Password({ password }: Props) {
  const [copied, setCopied] = useState(false);
  const [mousePos, setmousePos] = useState({
    x: 0,
    y: 0,
  });

  function copyPasswordToClipboard(e: React.MouseEvent<HTMLDivElement>) {
    var rect = e.currentTarget.getBoundingClientRect();

    setmousePos({
      x: e.clientX - rect.left - 40,
      y: e.clientY - rect.top - 40,
    });
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 350);
  }

  return (
    <div className="pointer relative" onClick={copyPasswordToClipboard}>
      {copied ? (
        <div style={{ top: mousePos.y, left: mousePos.x }} className="password_copy-alert">
          Copied
        </div>
      ) : null}
      <span className="password__input text-accent-400">{password}</span>
    </div>
  );
}
