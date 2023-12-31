import "./globals.css";

import Header from "@/components/layout/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-grayLight pb-10">
        <Header />
        <div className="container-main mt-2">
          {children}
        </div>
      </body>
    </html>
  );
}
