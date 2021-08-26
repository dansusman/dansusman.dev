import React from "react";

interface ExpandMoreIconProps {
  class: string;
}

const ExpandMoreIcon: React.FC<ExpandMoreIconProps> = (props) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "inherit", height: "inherit" }}
      viewBox="0 0 24 24"
      className={props.class}
      {...props}
    >
      <path d="M24 24H0V0h24v24z" opacity=".87" fill="none" />
      <path
        d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
        fill="var(--theme-primary)"
      />
    </svg>
  );
};

export default ExpandMoreIcon;
