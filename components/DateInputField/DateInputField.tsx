"use dom";

import { InlineInputWidthList, InputWidthList } from "@/lib/utils";
import { CalendarMonth, ErrorOutline, ErrorOutlineOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components";

export type InputFieldProps = AriaInputProps & {
  className?: string;
  name: string;
  length?: "sm" | "md" | "lg" | "auto";
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

const DateInputField: React.FC<InputFieldProps> = ({
  className,
  leftMembers,
  rightMembers,
  disabled,
  name,
  type,
  length,
  ...props
}) => {
  const maxLengthTwo = length ? InlineInputWidthList[length] : "100%";
  const inputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<{ day: any; month: any; year: any }>({
    day: null,
    month: null,
    year: null,
  });
  
  const saveDate = () =>{
    if (inputRef.current) {
      const newDate = new Date(inputRef.current.value);
      setDate({
        day: newDate.getDate() ,
        month: newDate.getMonth() + 1,
        year: Math.max( newDate.getFullYear(), 1920),
      });
    }
  }
    

  return (
    <div
      style={{ width: maxLengthTwo }}
      className={` brand relative flex px-0 gap-2 rounded-sm
        focus-within:border-input-border-focus  [&>.halo]:focus-within:bg-input-halo-focus  
        ${props["aria-errormessage"] ? "border-input-border-error" : ""}
        ${disabled ? "[&>.backdrop]:bg-input-background-disabled" : ""}
      `}
    >
      {/* <div className="absolute backdrop left-0 top-0 rounded-sm w-[100%] h-[100%] bg-white z-10 "/> */}
      {/* <div style={{transition: 'all .3s ease'}} className="absolute -inset-1 halo rounded-md w-[calc(100%+8px)] h-[calc(100%+8px)] -z-20 "/> */}
      <div className="z-20 flex relative flex-col">
        <AriaInput
          onChange={saveDate}
          ref={inputRef}
          role="textbox"
          type="date"
          name={name}
          disabled={disabled}
          className="focus:outline-none mt-24 absolute  tracking-wide opacity-0  px-2 right-0 w-[30px] r-0 bg-red z-20 "
          {...props}
        ></AriaInput>

        <div className=" flex gap-16">
          <div className="gap-[7px]">
            <div className="text-16">Day</div>
                        <div className={`border-input-border
               ${disabled? "bg-input-background-disabled":"bg-input-background"}
                 flex h-[36px] w-[60px] border-[1px] px-0 gap-2 rounded-sm`}>
              <span className="p-8 text-14"> 
              {date.day || ""}
              </span>
            </div>
          </div>
          <div className="gap-[7px]">
            <div className="text-16">Month</div>
            <div className={`border-input-border
               ${disabled? "bg-input-background-disabled":"bg-input-background"}
                 flex h-[36px] w-[60px] border-[1px] px-0 gap-2 rounded-sm`}>
            <span className="p-8 text-14">
              {date.month || ""}
            </span>
            </div>
          </div>
          <div className="gap-[7px]">
            <div className="text-16">Year</div>
            <div className={`border-input-border
               ${disabled? "bg-input-background-disabled":"bg-input-background"}
                 flex h-[36px] w-[75px] border-[1px] px-0 gap-2 rounded-sm`}>
            <span className="p-8 text-14">
              {date.year || ""}
            </span>
            </div>
          </div>
          <div className="pt-[28px]">
            <CalendarMonth/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateInputField;
