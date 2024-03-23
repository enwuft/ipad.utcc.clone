import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NextLoaderComponent } from "@/components/core/next-loader";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "IPad, Laptop | UTCC",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="">
        <SessionProvider session={session}>
          <Toaster />
          <NextLoaderComponent />
          <Navbar />

          {children}

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
