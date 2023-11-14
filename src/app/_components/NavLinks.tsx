
import { Briefcase, GraduationCap, FlaskConical, LibraryBig } from "lucide-react";
import Link from "next/link";
import NavLinkWithIcon from "./NavLinkWithIcon";


export default function NavLinks() {

    return (
          <div className="flex flex-col space-y-0.5">
            <NavLinkWithIcon href="/education" icon={GraduationCap}>Education</NavLinkWithIcon>
            <NavLinkWithIcon href="/experience" icon={Briefcase} >Experience</NavLinkWithIcon>
            <NavLinkWithIcon href="/projects" icon={FlaskConical} >Projects</NavLinkWithIcon>
            <NavLinkWithIcon href="/interests-skills" icon={LibraryBig} >Interests</NavLinkWithIcon>
          </div>
    );
  }