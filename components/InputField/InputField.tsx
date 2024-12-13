"use dom";

import React from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components"

export type InputFieldProps =  AriaInputProps & {
  className?: string;
  name: string;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url",
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  className,
  leftMembers,
  rightMembers,
  disabled,
  name,
  type,
  ...props
}) => {
  return (
    // [&>div]:focus-within:bg-button-primary-border
    <div
      className={` brand relative flex border-input-border   border-[1px] px-2 gap-2 rounded-sm
        focus-within:border-input-border-focus  [&>.halo]:focus-within:bg-input-halo-focus 
       ${disabled ? "[&>.backdrop]:bg-input-background-disabled" : ""}
      `}
    >
      <div className="absolute backdrop left-0 top-0 rounded-sm w-[100%] h-[100%] bg-white z-10 "/>
      <div className="absolute -inset-1 halo rounded-md w-[calc(100%+8px)] h-[calc(100%+8px)]  -z-20 "/>
      <div className="z-20 flex">
        {leftMembers && WrapMembers([...leftMembers])}
        <AriaInput
          type={type}
          name={name}
          autoComplete="off"
          spellCheck={false}
          disabled={disabled}
          className="focus:outline-none  px-2"
          {...props}
        ></AriaInput>
        {rightMembers && WrapMembers([...rightMembers])}
      </div>

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
            <div className="flex bg-input-background  text-input-prepost justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center  " key={index}>
              {member}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InputField;
