import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  displayStyle: DisplayStyle;
}

type DisplayStyle = "homepage" | "other";

const Header = ({ displayStyle }: Props) => {
  const isHomepage = displayStyle == "homepage";

  return (
    <nav>
      <ol className={listClasses(displayStyle)}>
        {!isHomepage && <NavItem href="/">Home</NavItem>}
        <NavItem href="/about">About</NavItem>
        <NavItem href="/blog">Blog Posts</NavItem>
      </ol>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li className="mb-2">
      <Link href={href}>
        <a className="border-b-2 border-hotpink">{children}</a>
      </Link>
    </li>
  );
};

function listClasses(displayStyle: DisplayStyle) {
  switch (displayStyle) {
    case "homepage":
      return "text-xl";
    case "other":
      return "flex justify-between flex-col md:flex-row text-xl";
  }
}

export default Header;
