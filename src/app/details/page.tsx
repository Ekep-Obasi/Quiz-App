"use client";

import DetailsDesktop from "@/components/views/details/desktop";
import DetailsMobile from "@/components/views/details/mobile";
import useResponsive from "@/hooks/useRsponsive";

interface Props {}

export default function Details({}: Props) {
  return <>{useResponsive(540) ? <DetailsDesktop /> : <DetailsMobile />}</>;
}
