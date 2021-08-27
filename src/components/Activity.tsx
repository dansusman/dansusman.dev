import React from "react";
import { getAction } from "../utils/activityGenerator";
const { activityEmoji, activity } = getAction(new Date());

interface ActivityProps {}

export const Activity: React.FC<ActivityProps> = ({}) => {
  return (
    <span className="emojiAndStatus">
      <p className="emoji">{activityEmoji}</p>
      <p className="status">{activity}</p>
    </span>
  );
};
