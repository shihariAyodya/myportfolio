"use client";

import { useEffect, useState } from "react";

const ids = ["home", "about", "skills", "projects", "highlights", "journey", "contact"];

export default function Debug() {
  const [rows, setRows] = useState<string[]>([]);

  useEffect(() => {
    const update = () => {
      setRows(
        ids.map((id) => {
          const all = document.querySelectorAll(`#${id}`);
          const el = all[0];
          return `${id}: ${
            el ? Math.round(el.getBoundingClientRect().top) : "MISSING"
          } (count ${all.length})`;
        })
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-[100] rounded-lg bg-black/80 p-3 font-mono text-xs text-green-400">
      {rows.map((r) => (
        <div key={r}>{r}</div>
      ))}
    </div>
  );
}