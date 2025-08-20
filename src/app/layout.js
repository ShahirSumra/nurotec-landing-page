import { metaData } from "@/lib/metadata";
import "./globals.css";

export const metadata = {
  ...metaData
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`font-PowerGroteskTrial antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
