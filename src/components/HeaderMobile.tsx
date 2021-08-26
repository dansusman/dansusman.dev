import React from "react";
import Logo from "./icons/Logo";
import { Links } from "./Links";

interface HeaderMobileProps {
  className: string;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = (props) => {
  return (
    <header className={props.className}>
      <a href="/">
        <Logo width="2.4em" height="2.4em" viewBox="0 0 88 90" />
      </a>
    </header>
  );
};
