import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday Blind Box",
  description: "A tiny birthday surprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}