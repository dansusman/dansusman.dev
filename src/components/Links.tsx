import React from "react";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import Resume from "./icons/Resume";
import Email from "./icons/Email";

interface LinksProps {
  className: string;
  size: string;
  smallerSize: string;
}

export const Links: React.FC<LinksProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="link-container">
        <GitHub width={props.size} height={props.size} />
        <LinkedIn width={props.size} height={props.size} />
        <Resume width={props.smallerSize} height={props.smallerSize} />
        <Email width={props.size} height={props.size} />
      </div>
    </div>
  );
};
