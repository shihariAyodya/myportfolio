"use client";

import { useEffect, useState } from "react";

const FULL_NAME = "Shihari Ayodya";
const TYPE_SPEED   = 90;   // ms per character while typing
const DELETE_SPEED = 50;   // ms per character while deleting
const PAUSE_AFTER  = 2200; // ms to hold the complete name before deleting
const PAUSE_BEFORE = 500;  // ms to wait after deleting before retyping

export default function TypewriterName() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < FULL_NAME.length) {
        timeout = setTimeout(() => {
          setDisplayed(FULL_NAME.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_AFTER);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("waiting"), PAUSE_BEFORE);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("typing"), 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase]);

  return (
    <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-linear-to-r from-rose-dull to-rose-dull-light bg-clip-text text-transparent inline-flex items-center">
      {displayed || "\u00A0"}
      {/* blinking cursor */}
      <span
        className="ml-1 inline-block w-[3px] rounded-sm bg-rose-dull-light"
        style={{
          height: "0.85em",
          verticalAlign: "middle",
          animation: "blink 1s step-start infinite",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}

