import { FC } from "react";
import { twMerge } from "tailwind-merge";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Divider: FC<DividerProps> = ({
  className,
  orientation = "horizontal",
}) => {
  if (orientation === "vertical") {
    return (
      <div className={twMerge("inline-block h-full w-[1px] self-stretch bg-neutral-900/15 dark:bg-neutral-50 opacity-100 dark:opacity-50",
        className
      )}/>
    );
  }
  return (
    <hr
      className={twMerge(
        "border-neutral-900/15 dark:border-neutral-100 w-full opacity-100 dark:opacity-50",
        className
      )}
    />
  );
};

export default Divider;
