"use client"

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation"

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLinkWithoutIcon = (props: Props) => {
  const pathname = usePathname()
  const { href, children } = props;
  return (
    <Link href={href} className={`${pathname === href ? 'font-bold text-white' : 'text-gray-300'} text-xl hover:text-white`}>
      <div className="flex flex-row space-x-2">
         {children}
      </div>
    </Link>
  );
};

export default NavLinkWithoutIcon
