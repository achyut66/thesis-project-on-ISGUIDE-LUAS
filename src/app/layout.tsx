import type { Metadata } from "next";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/chat/ChatWidget";
import { LanguageProvider } from "./context/LanguageContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "FinGuide | Finnish Public Service Assistant",
  description:
    "FinGuide helps international residents navigate Finnish public services through clear information and AI-powered assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-slate-900 antialiased">
        <LanguageProvider>
          <Header />

          {children}

          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
