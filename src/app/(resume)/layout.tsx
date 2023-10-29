import NavLinkWithIcon from "@dpang1999/resume/components/NavLinkWithIcon";
import NavLinks from "@dpang1999/resume/components/NavLinks";
import { Github } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="grid min-h-screen grid-cols-6 bg-gray-700">
      <div className="flex flex-col justify-between bg-gray-800 p-5">
        <div className="flex flex-col space-y-5">
          <Link href="/" className="text-3xl font-bold text-white">
            Daniel Pang
          </Link>
          <NavLinks />
        </div>
        <NavLinkWithIcon href="https://github.com/dpang1999" icon={Github}>
          Github
        </NavLinkWithIcon>
      </div>
      <div className="col-span-5 p-5">{children}</div>
    </div>
  );
};

export default ResumeLayout;
