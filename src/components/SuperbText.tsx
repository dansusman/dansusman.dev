import React from "react";
import HoverText from "./HoverText";
import superb from "superb";

interface SuperbTextProps {}

export const SuperbText: React.FC<SuperbTextProps> = ({}) => {
  return (
    <HoverText
      open
      href="https://github.com/sindresorhus/superb"
      altText={superb.random() + "."}
      originalText={superb.random() + "."}
    />
  );
};
