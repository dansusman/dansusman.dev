import React from "react";

interface HeartProps {}

const Heart: React.FC<HeartProps> = () => {
  return (
    <svg
      className="heart"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>love</title>
      <path
        d="M2.75 2.75C3.8132 3.82394 5.4725 5.5 5.4725 5.5L8.25 2.75"
        stroke="var(--theme-primary)"
        stroke-width="5.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Heart;
