import React from "react";
import Logo from "./icons/Logo";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import Resume from "./icons/Resume";
import Email from "./icons/Email";

interface HeaderDesktopProps {}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({}) => {
  return (
    <header>
      <a href="/">
        <Logo width="3.75em" height="5em" />
      </a>
      <div className="links">
        <GitHub width="2.1875em" height="2.1875em" />
        <LinkedIn width="2.1875em" height="2.1875em" />
        <Resume width="2em" height="2em" />
        <Email width="2.1875em" height="2.1875em" />
      </div>
    </header>
  );
};

export default HeaderDesktop;
