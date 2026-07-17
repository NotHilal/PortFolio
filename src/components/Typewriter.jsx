import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Types text out left to right, one character at a time — no scrambling,
// just a real typewriter. `segments` lets one line carry multiple
// className runs (e.g. a two-tone sentence) while still typing as a
// single continuous stream, with `onDone` to chain the next line.
export default function Typewriter({
  segments,
  delay = 0,
  speed = 22,
  as: Tag = "div",
  className = "",
  onDone,
}) {
  const reduceMotion = useReducedMotion();
  const fullLength = segments.reduce((sum, s) => sum + s.text.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setCount(fullLength);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= fullLength) {
          clearInterval(intervalId);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let cursor = count;

  return (
    <Tag className={className}>
      {segments.map((seg, i) => {
        const take = Math.max(0, Math.min(seg.text.length, cursor));
        cursor -= seg.text.length;
        return (
          <span key={i} className={seg.className}>
            {seg.text.slice(0, take)}
          </span>
        );
      })}
      {!done && (
        <span className="text-accent animate-pulse" aria-hidden="true">
          ▌
        </span>
      )}
    </Tag>
  );
}
