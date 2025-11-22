import localFont from "next/font/local";
import "./globals.css";

const rajdhaniBold = localFont({
  src: "../font/Rajdhani-Bold.ttf",
  variable: "--font-rajdhani-bold",
});

const poppinRegular = localFont({
  src: "../font/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhaniBold.variable} ${poppinRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
