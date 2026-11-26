import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Tessar | Anything can be a plugin",
  description: "An open-source SDK for building CLI agents and embedding agents in applications. Start with an Agent, add plugins when you need them.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html
    lang="en"
    className={`${mono.variable} ${display.variable} antialiased`}
    suppressHydrationWarning
  >
    <body className="flex min-h-svh flex-col" suppressHydrationWarning>
      <RootProvider theme={{ forcedTheme: "dark", defaultTheme: "dark" }}>{children}</RootProvider>
    </body>
  </html>
);

export default RootLayout;
