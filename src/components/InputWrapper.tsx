"use dom";

import React, { useState } from "react";
import { FieldError, Label } from "./Field";

export type InputWrapperProps = {
  label: string;
  labelFor: string;
  hint?: string;
  error?: string;
  example?: string;
  children: React.ReactElement | React.ReactElement[];
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

  React.Children.forEach(children, (element: React.ReactElement) => {
    if (!React.isValidElement(element)) return;
    const { name } = element.props as { name: string };
    htmlFor = name;
  });
  
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
            Example  .
            {/* {isExampleOpen } */}
          </span>
          <p className="regular-14">{isExampleOpen && example}</p>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
