import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <body className="w-full h-full flex flex-col">
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
