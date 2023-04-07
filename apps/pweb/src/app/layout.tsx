import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Public Goods Builders",
  description: "A Schelling point for impact oriented developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="flex flex-col bg-black text-white w-screen h-screen overflow-x-hidden">
      <Navbar />
        <main>
        {children}
        </main>
        
      <Footer />
      </body>
    </html>
  );
}
