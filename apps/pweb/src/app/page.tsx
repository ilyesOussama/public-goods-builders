import Image from "next/image";
import { Button } from "ui";
import { Projects } from "../components/Projects";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { Tech } from "../components/Tech";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <Tech />
      <Team />
      <Projects />     
    </>
  );
}
