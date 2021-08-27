import React from "react";
import { getImage } from "../utils/imageGenerator";
const { imageSource, imageAltText } = getImage();

interface ProfilePicProps {}

export const ProfilePic: React.FC<ProfilePicProps> = ({}) => {
  return (
    <span className="images">
      <img src={imageSource} alt={imageAltText} />
    </span>
  );
};
