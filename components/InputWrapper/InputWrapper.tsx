"use dom";

import React, { useState } from "react";
import { FieldError, Label } from "../InputUtils/InputUtils";
import { ArrowDropDown, ChevronRight } from "@mui/icons-material";

export type InputWrapperProps = {
  label: string;
  labelFor: string;
  hint?: string;
  error?: string;
  example?: string;
  children?: React.ReactNode;
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  label,
  labelFor,
  hint,
  error,
  example,
}) => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  let htmlFor = ''
  React.Children.forEach(children, element =>{
    if (!React.isValidElement(element)) return 
    const { name } = element.props
    htmlFor = name
  }) 
  
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor || labelFor} className="semibold-14 flex flex-col gap-1" >
        {label}
        {hint && <span className="regular-14">{hint}</span>}
        {error && <FieldError>{error}</FieldError>}
        {children}
      </Label>
      {example && (
        <div
          className="cursor-pointer"
          onClick={() => setIsExampleOpen(!isExampleOpen)}
        >
          <span className="regular-14">
            {" "}
            Example  <ChevronRight style={{rotate: !isExampleOpen? '90deg': '270deg', transition: 'all 0.3s ease' }}/>
            {/* {isExampleOpen } */}
          </span>
          <p className="regular-14">{isExampleOpen && example}</p>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
