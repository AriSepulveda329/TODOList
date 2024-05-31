import type { Metadata } from "next";
import { roboto } from "@/ui/fonts";
import "./global.css";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Todo List project by Ari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.AwaitedReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.className} h-full m-0 p-0`}>{children}</body>
    </html>
  );
}
