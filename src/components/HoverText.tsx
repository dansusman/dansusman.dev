import React, { useState } from "react";

interface HoverTextProps {
  href: string;
  altText: string;
  originalText: string;
  open: boolean;
}

const HoverText: React.FC<HoverTextProps> = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <a
      target={props.open ? "_blank" : undefined}
      className="hover-text"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      href={props.href}
    >
      {isShown ? props.altText : props.originalText}
    </a>
  );
};

export default HoverText;
