"use dom";

import { FC } from "react";
import StyledText from "./StyledText";
import { twMerge as cn } from "tailwind-merge";

interface AvatarProfileProps {
  avatars: string[];
  size?: 12 | 14 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 56 | 64 | 72 | 96 | 120;
  shape?: "circle" | "square";
}

const AvatarProfile: FC<AvatarProfileProps> = ({
  avatars = [],
  size = 48,
  shape = "circle",
}) => {
  const sizeMap = {
    12: "h-12 w-12",
    14: "h-14 w-14",
    16: "h-16 w-16",
    20: "h-20 w-20",
    24: "h-24 w-24",
    28: "h-[28px] w-[28px]",
    32: "h-32 w-32",
    40: "h-40 w-40",
    48: "h-48 w-48",
    56: "h-56 w-56",
    64: "h-64 w-64",
    72: "h-72 w-72",
    96: "h-96 w-96",
    120: "h-[120px] w-[120px]",
  };
  const shapeMap = {
    circle: "rounded-full",
    square: "rounded-8",
  };
  return (
    <div className="relative ">
      {avatars.slice(0, 3).map((avatar, index) => (
        <div
          style={{ zIndex: index,
            left: index * size/2,
            mask:avatars.length - 1 !== index
              ? `radial-gradient(circle at ${size - Math.min(size/16 , 5)}px, transparent ${size/2 }px, white 0)`
              : "",}}
          className={cn(
            sizeMap[size],
            shapeMap[shape],
            "absolute overflow-hidden flex p-0"
          )}
        >
          <img
            src={avatar}
            alt="avatar"
            className=" object-cover"
          />
          <span className={cn(
            sizeMap[size],
            shapeMap[shape],
            "absolute flex p-0 z-10 bg-transparent border-2 border-black/10"
          )} />

        </div>
      ))}
      {avatars.length > 3 && (
        <div
          style={{ left: 60 }}
          className={cn(
            "absolute z-50 top-0 overflow-hidden flex p-0 bg-success-500 justify-center items-center",
            sizeMap[size],
            shapeMap[shape]
          )}
        >
          <StyledText
            as="span"
            className="text-neutral-800 dark:text-secondary-200"
          >
            +{avatars.length - 3}
          </StyledText>
        </div>
      )}
    </div>
  );
};

export default AvatarProfile;
