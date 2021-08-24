import React from "react";
import Logo from "./icons/Logo";
import { Links } from "./Links";

interface HeaderDesktopProps {}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({}) => {
  return (
    <header>
      <a href="/">
        <Logo width="3.75em" height="5em" viewBox="0 0 72 93" />
      </a>
      <Links className="headerLinks" size="2.1875em" smallerSize="2em" />
    </header>
  );
};

export default HeaderDesktop;
