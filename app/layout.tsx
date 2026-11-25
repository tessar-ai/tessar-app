import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Backdrop from "@/components/backdrop";

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Tessar",
  description: "Anything is a plugin",
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html
    lang="en"
    className={`${mono.variable} ${display.variable} antialiased`}
  >
    <body suppressHydrationWarning>
      <div className="frame" />
      <div className="relative isolate flex min-h-svh flex-col p-[14px]">
        <Backdrop />
        <Nav />
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;