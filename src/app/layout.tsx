import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // icons: {
  //   icon: [
  //     {
  //       url: "/assets/favicon/favicon.ico",
  //       href: "/assets/favicon/favicon.ico",
  //     }
  //   ]
  // },
  title: "Coffee Shop",
  description: "Coffee Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }