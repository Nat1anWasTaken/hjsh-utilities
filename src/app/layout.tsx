import Navbar from "@/components/navbar/navbar";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={"h-full w-full"}>
      <body className={"h-full w-full"}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
