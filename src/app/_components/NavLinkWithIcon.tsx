import { LucideIcon } from "lucide-react";
import Link from "next/link";
import NavLinkWithoutIcon from "./NavLinkWithoutIcon";


interface Props {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavLinkWithIcon = (props: Props) => {
  
  const { href, children } = props;
  return (
      <div>
        <NavLinkWithoutIcon href={href} >
          <props.icon /> <span>{children}</span>
        </NavLinkWithoutIcon>
      </div>
  );
};

export default NavLinkWithIcon
