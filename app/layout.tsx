import type { Metadata } from "next";
import { Roboto_Condensed, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AllSort",
    default: "AllSort",
  },
  description:
    "Planning for productivity can be a time-consuming task. AllSort is an application designed to assist with organisation and effective planning, allowing you to begin your productivity journey sooner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${robotoCondensed.variable} antialiased min-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
