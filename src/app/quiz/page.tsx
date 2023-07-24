"use client";

import QuizDesktop from "@/components/views/display/desktop";
import QuizMobile from "@/components/views/display/mobile";
import useResponsive from "@/hooks/Responsive";

interface Props {}

export default function Details({}: Props) {
  return <>{useResponsive(540) ? <QuizDesktop /> : <QuizMobile />}</>;
}
