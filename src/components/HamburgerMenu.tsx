import React, { useState } from "react";

interface HamburgerMenuProps {}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
};
