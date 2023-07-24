"use client";

import QuizDesktop from "@/components/views/quiz/desktop";
import QuizMobile from "@/components/views/quiz/mobile";
import useResponsive from "@/hooks/useRsponsive";

interface Props {}

export default function Details({}: Props) {
  return <>{useResponsive(540) ? <QuizDesktop /> : <QuizMobile />}</>;
}
