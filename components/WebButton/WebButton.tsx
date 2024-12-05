"use dom";

import React from "react";

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
};

export const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  disabled,
}) => {
  return (
    <div className="flex flex-row w-fit p-2 px-10 border rounded-xl bg-white">
      <button onClick={onPress} disabled={disabled}>
        {text}
      </button>
    </div>
    
  );
};
