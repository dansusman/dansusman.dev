import React from "react";
import Logo from "./icons/Logo";
import { HamburgerMenu } from "./HamburgerMenu";

interface HeaderMobileProps {}

export const HeaderMobile: React.FC<HeaderMobileProps> = (props) => {
  return (
    <div {...props}>
      <a href="/">
        <Logo width="2em" height="2em" />
      </a>
      <HamburgerMenu />
    </div>
  );
};