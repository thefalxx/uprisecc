import type { Metadata } from "next";
import ClientRootLayout from "./ClientRootLayout";


import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

export const metadata: Metadata = {
  title: "Uprise Cranes and Contractors",
  description: "Optimising Your Lifting Operations with the Right Crew & Equipment",
  icons: {
    icon: "/favicon.ico", // put favicon.ico in public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
