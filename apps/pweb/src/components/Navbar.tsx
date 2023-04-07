import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export const Navbar = () => {
  const router: string = "";
  return (
    <nav className="flex items-center justify-between flex-row py-2 sm:py-4 lg:py-6 max-w-7xl mx-auto w-screen px-4 md:px-0">
      <a href="/" className="text-2xl">
        🌱
      </a>
      <ul className="flex flex-row gap-4 text-gray-300 border border-green-200 rounded-md py-2 px-4">
        <li className={router === "" ? "text-green-400" : ""}>
          <a href="#hero">Home</a>
        </li>
        <li className={router === "/projects" ? "text-green-400" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={router === "/team" ? "text-green-400" : ""}>
          <a href="#team">Team</a>
        </li>
      </ul>
      <ul className="flex flex-row gap-2">
        <li>
          <Link href="https://github.com" target="_blank">
            <AiFillGithub className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com" target="_blank">
            <AiOutlineTwitter className="w-8 h-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
