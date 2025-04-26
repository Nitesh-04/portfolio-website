import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitesh Kakkar",
  description: "Portfolio of Nitesh Kakkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
