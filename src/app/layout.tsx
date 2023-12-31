import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Sample Next Js - firebase quiz App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
