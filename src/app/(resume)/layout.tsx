import NavLinkWithIcon from "@dpang1999/resume/app/_components/NavLinkWithIcon";
import NavLinks from "@dpang1999/resume/app/_components/NavLinks";
import { Github, Linkedin, Home } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="grid min-h-screen grid-rows-7 lg:grid-cols-6 bg-gray-700">
      <div className="hidden lg:flex lg:min-h-screen flex-col justify-between bg-gray-800 p-5">
        <div className="flex flex-col space-y-5">
          <Link href="/" className="text-3xl font-bold text-white">
            Daniel Pang
          </Link>
          <NavLinks />
        </div>
        <div>
          <NavLinkWithIcon 
            href="https://github.com/dpang1999" 
            icon={Github}>
            Github
          </NavLinkWithIcon>
          <NavLinkWithIcon
            href="https://www.linkedin.com/in/daniel-pang-8a604417b"
            icon={Linkedin}>
            LinkedIn
          </NavLinkWithIcon>
        </div>
      </div>

      <div className="bg-gray-800 p-3  lg:hidden"><NavLinkWithIcon href="/" icon={Home}>Daniel Pang</NavLinkWithIcon></div>
      <div className="max-h-screen row-span-6 lg:col-span-5 p-5 overflow-y-auto">{children}</div>
      
      

    </div>
  );
};

export default ResumeLayout;
