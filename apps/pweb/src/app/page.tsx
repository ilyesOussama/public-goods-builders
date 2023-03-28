import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "ui";
import Hero from "../components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Hero />;
}
