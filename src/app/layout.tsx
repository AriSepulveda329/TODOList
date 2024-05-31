import type { Metadata } from "next";
import { roboto } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Todo List project by Ari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.className} h-full`}>{children}</body>
    </html>
  );
}
