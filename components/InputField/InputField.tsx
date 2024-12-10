"use dom";

import React from "react";
import { Input as AriaInput } from "react-aria-components";

export type InputFieldProps = {
  className?: string;
  name: string;
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  disabled?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  inputProps,
  className,
  leftMembers,
  rightMembers,
  disabled,
  name
}) => {
  return (
    <div
      className={`flex focus-within:border-black border-[1px] gap-4 px-4 border-rounded ${
        disabled ? "bg-gray-200" : ""
      }`}
    >
      {leftMembers && WrapMembers(["", ...leftMembers])}
      <AriaInput
        name={name}
        spellCheck={false}
        disabled={disabled}
        className="focus:outline-none"
        {...inputProps}
      ></AriaInput>
      {rightMembers && WrapMembers(["", ...rightMembers])}
    </div>
  );
};

const WrapMembers = (members: React.ReactNode[]) => {
  return (
    <div className="flex column bg-white ">
      {members.map((member, index) => {
        if (member) {
          return (
            <div className="flex justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center " key={index}>
              {member}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InputField;
