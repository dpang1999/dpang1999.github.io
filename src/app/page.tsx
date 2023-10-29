import Link from "next/link";
import NavLinks from "../components/NavLinks";
import { Github } from "lucide-react";
import NavLinkWithIcon from "../components/NavLinkWithIcon";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-800">
      <div className="flex min-h-screen flex-col items-center justify-center space-y-5">
        <h1 className="text-8xl text-white"> Daniel Pang</h1>
        <div className="flex flex-col space-y-0.5">
          <NavLinks />
          <NavLinkWithIcon href="https://github.com/dpang1999" icon={Github}>
            Github
          </NavLinkWithIcon>
        </div>
      </div>
    </main>
  );
}
