import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "akashrawr", 
  description: "Personal Portfolio", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no"> {/* Prevent translation of the entire page */}
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" /> {/* Explicitly set content language */}
        <meta name="google" content="notranslate" /> {/* Inform Google to not translate */}
        <link rel="icon" href="/rawr.ico" type="image/x-icon" />
        <title>akashrawr</title>
        <meta name="description" content="My Personal Portfolio" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="notranslate">
          {children}
        </div>
      </body>
    </html>
  );
}
