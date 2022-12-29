import React, { useRef, useState } from "react";
import { isMobile } from "../Helpers/helper";

type Props = {
  password: string;
};

export default function Password({ password }: Props) {
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [mousePos, setmousePos] = useState({
    x: 0,
    y: 0,
  });

  function copyPasswordToClipboard(e: React.MouseEvent) {
    if (isMobile.any()) {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 99999);
    } else {
      var rect = e.currentTarget.getBoundingClientRect();

      setmousePos({
        x: e.clientX - rect.left - 40,
        y: e.clientY - rect.top - 50,
      });

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 350);

      navigator.clipboard.writeText(passwordRef.current?.value!);
    }
  }

  return (
    <button className="password__input relative pointer" onClick={copyPasswordToClipboard}>
      {copied ? (
        <div style={{ top: mousePos.y, left: mousePos.x }} className="password_copy-alert">
          Copied
        </div>
      ) : null}
      <input
        readOnly={true}
        ref={passwordRef}
        className="text-accent-400 bg-accent-200 pointer"
        value={password}
      />
    </button>
  );
}
