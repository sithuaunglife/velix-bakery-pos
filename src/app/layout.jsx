import { Toaster } from "sonner";
import "../styles/globals.css";
import "animate.css";

export const metadata = {
  title: "Velix Bakery POS",
  description: "A modern bakery POS system built with Next.js, inspired by my sister’s imagination.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
        <Toaster richColors theme="dark" />
      </body>
    </html>
  );
}
