"use dom";

import { InlineInputWidthList, InputWidthList } from "@/lib/utils";
import { ErrorOutline, ErrorOutlineOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components"

export type InputFieldProps =  AriaInputProps & {
  className?: string;
  name: string;
  length?: "sm" | "md" | "lg" | "auto";
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  className,
  disabled,
  name,
  ...props
}) => {
  return (
    <div
      className={` brand relative flex radius-full w-[200px] min-w-[160px] px-10 bg-input-search-background
        focus-within:border-input-border-focus  [&>.halo]:focus-within:bg-input-halo-focus  
      `}
    >
      {/* <div className="absolute  bg-input-search-background left-0 top-0 radius-full w-[100%] h-[100%] z-10 "/> */}
      {/* <div style={{transition: 'all .3s ease'}} className="absolute -inset-1 halo rounded-md w-[calc(100%+8px)] h-[calc(100%+8px)] -z-20 "/> */}
      <div className="z-20 flex radius-full  overflow-hidden ">
        {WrapMembers( [<SearchOutlined  color="disabled" />], "left" )}
        <AriaInput
          role="textbox"
          placeholder="Search"
          type={'search'}
          name={name}
          autoComplete="off"
          spellCheck={false}
          disabled={disabled}
          className="focus:outline-none px-2 bg-transparent "
          {...props}
        ></AriaInput>
      </div>

    </div>
  );
};

const WrapMembers = (members: React.ReactNode[], position?: "left" | "right") => {
  if(!members.length) return null
  return (
    <div className="flex column ">
      {members.map((member, index) => {
        if (member) {
          return (
            <div className={`flex bg-transparent text-input-prepost justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center  
            ${position === "left" ? "pl-2" : "pr-2"}
            `} key={index}>
              {member}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InputField;
