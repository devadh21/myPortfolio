import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonUp from "./components/ui/ButtonUp";
import ProviderSession from "./context/AuthContext";

export const metadata = {
  title: "My web site",
  description: "My web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <ProviderSession>
          <Navbar />
          {children}
          <Footer />
          <ButtonUp />
        </ProviderSession>
      </body>
    </html>
  );
}
