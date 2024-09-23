import type { Metadata } from "next";
import "./globals.css";
import { CustomNavbar } from "@/components/custom-navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "GDG on Campus Haliç",
  description: "Unofficial Page of Google Developer Groups on Campus Haliç made by our project team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
