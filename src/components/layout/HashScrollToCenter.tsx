"use client";

import { useEffect } from "react";

function scrollToHashCenter() {
  const rawHash = window.location.hash;
  if (!rawHash) {
    return;
  }

  const elementId = decodeURIComponent(rawHash.slice(1));
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

export default function HashScrollToCenter() {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHashCenter();
      });
    });

    window.addEventListener("hashchange", scrollToHashCenter);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("hashchange", scrollToHashCenter);
    };
  }, []);

  return null;
}
