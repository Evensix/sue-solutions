"use dom";

import React from "react";
import { InputField, InputFieldProps } from "../InputField/InputField";
import { Icon } from "lucide-react";

export type InputWrapperProps = {
  className?: string;
  inputArray: InputFieldProps[];
};

export const InputArray: React.FC<InputWrapperProps> = ({
  inputArray
}) => {
  return (
    <div>
      {inputArray.map((input, index) => (
        <div className="flex gap-2">
          @
          <InputField key={index} {...input} />
        </div>
      ))}
    </div>
  );
};
