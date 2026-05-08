import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempo — The calendar that schedules itself",
  description:
    "Download Tempo, the iOS calendar that plans your day around what actually matters.",
  openGraph: {
    title: "Tempo",
    description: "The calendar that schedules itself.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
