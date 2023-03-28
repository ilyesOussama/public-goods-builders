import Link from "next/link";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-row py-2 sm:py-4 lg:py-6">
      <Link href="/" className="text-2xl">
        🌱
      </Link>
      <ul className="flex flex-row gap-2">
        <li>
          <Link href="https://github.com" target="_blank">
            <AiFillGithub className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com" target="_blank">
            <AiOutlineTwitter className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
