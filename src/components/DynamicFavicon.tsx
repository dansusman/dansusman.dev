import React from "react";
import { getColor } from "../utils/primaryColorGenerator";

interface DynamicFaviconProps {}

export const DynamicFavicon: React.FC<DynamicFaviconProps> = ({}) => {
  const { styleString, favicon } = getColor();
  return <link rel="icon" href={favicon} />;
};
