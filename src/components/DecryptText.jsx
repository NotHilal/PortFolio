import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}=+*^?#01";

// One-shot cipher-resolve effect — text starts scrambled and locks in
// left to right, like a terminal decrypting a string. Only safe on
// monospace text: fixed character width means no reflow while it resolves.
export default function DecryptText({
  text,
  delay = 0,
  className = "",
  as: Tag = "span",
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    let iteration = 0;
    const totalTicks = 22;
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              const lockAt = (i / text.length) * totalTicks;
              if (iteration >= lockAt) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );
        iteration += 1;
        if (iteration > totalTicks) {
          clearInterval(intervalId);
          setDisplay(text);
        }
      }, 40);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, reduceMotion]);

  return <Tag className={className}>{display}</Tag>;
}
