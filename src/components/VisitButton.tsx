import React from "react";

interface VisitButtonProps {
  href: string;
}

export const VisitButton: React.FC<VisitButtonProps> = (props) => {
  return (
    <a target="_blank" href={props.href}>
      <button className="visit">Visit</button>
    </a>
  );
};
