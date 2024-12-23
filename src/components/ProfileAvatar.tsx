"use dom";

import { FC } from "react";
import StyledText from "./StyledText";
import { twMerge as cn} from "tailwind-merge";

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
    28: "h-28 w-28",
    32: "h-32 w-32",
    40: "h-40 w-40",
    48: "h-48 w-48",
    56: "h-56 w-56",
    64: "h-64 w-64",
    72: "h-72 w-72",
    96: "h-96 w-96",
    120: "h-120 w-120",
  };
  const shapeMap = {
    circle: "rounded-full",
    square: "rounded-8",
  };
  return (
    <div className="relative">
      {avatars.slice(0, 3).map((avatar, index) => (
        <div>
          <div
            style={{ zIndex: index, left: index * 20 }}
            className={cn(
              "top-0 absolute overflow-hidden flex p-0 ",
              sizeMap[size],
              shapeMap[shape]
            )}
          >
            <div
              className={cn(
                " absolute  bg-transparent border-[1px] border-black/10 z-40 overflow-hidden",
                sizeMap[size],
                shapeMap[shape]
              )}
            />
            <img
              src={avatar}
              alt="avatar"
              className="h-full w-full object-cover"
            />

            {avatars.length - 1 !== index && (
              <div
                style={{ width: size + 2, height: size + 2 }}
                className={cn(
                  "absolute -top-[1px] left-[18px] bg-white z-50",
                  shapeMap[shape]
                )}
              />
            )}

          </div>
        </div>
      ))}
      {avatars.length > 3 && (
        <div
          style={{left: 60}}
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
