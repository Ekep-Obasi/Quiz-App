/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";

export default function useResponsive(limit: number) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);

  const updateWindowSize = () => {
    console.log(windowWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    windowWidth <= limit ? setDisplay(false) : setDisplay(true);
    console.log(windowWidth);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, [windowWidth]);

  return display;
}
