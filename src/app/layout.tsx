import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Componentes
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "compleet labs",
  description: "We build beautiful and reliable web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
