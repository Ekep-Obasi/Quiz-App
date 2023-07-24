"use client";

import HomeDesktop from "@/components/views/home/desktop";
import HomeMobile from "@/components/views/home/mobile";
import useResponsive from "@/hooks/Responsive";

interface Props {}

export default function Home({}: Props) {
  return <>{useResponsive(540) ? <HomeDesktop /> : <HomeMobile />}</>;
}
