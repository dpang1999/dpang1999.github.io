import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavLinkWithIcon = (props: Props) => {
  const { href, children } = props;

  return (
    <Link href={href} className="text-xl font-semibold text-white">
      <div className="flex flex-row space-x-2">
        <props.icon /> <span>{children}</span>
      </div>
    </Link>
  );
};

export default NavLinkWithIcon
