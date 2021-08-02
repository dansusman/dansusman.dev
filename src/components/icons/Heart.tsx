import React from "react";

interface HeartProps {}

const Heart: React.FC<HeartProps> = () => {
  return (
    <svg
      className="heart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 417 356"
    >
      <title>love</title>
      <path
        d="M104.094 104.094C144.338 144.745 207.146 208.187 207.146 208.187L312.281 104.094"
        stroke="var(--theme-primary)"
        stroke-width="208.187"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Heart;
