import { NextAuthProvider } from "@/providers/nextAuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "@/providers/reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
