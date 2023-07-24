/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, []);

  return (
    <main>
      <h1>Quiz App</h1>
    </main>
  );
}
