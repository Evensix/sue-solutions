"use dom";

import React from "react";
import { Input as AriaInput } from "react-aria-components";

export type InputFieldProps = {
  className?: string;
  name: string;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url",
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
  name,
  type
}) => {
  return (
    <div
      className={` flex border-input-border focus-within:border-input-border-focus border-[1px] px-2 gap-2 rounded-sm
       ${disabled ? "bg-input-background-disabled" : ""}
      `}
    >
      {leftMembers && WrapMembers([...leftMembers])}
      <AriaInput
        type={type}
        name={name}
        autoComplete="off"
        spellCheck={false}
        disabled={disabled}
        className="focus:outline-none  px-2"
        {...inputProps}
      ></AriaInput>
      {rightMembers && WrapMembers([...rightMembers])}
    </div>
  );
};

const WrapMembers = (members: React.ReactNode[]) => {
  if(!members.length) return null
  return (
    <div className="flex column bg-white ">
      {members.map((member, index) => {
        if (member) {
          return (
            <div className="flex text-input-prepost justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center  " key={index}>
              {member}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InputField;
