"use dom";

import React, { useState } from "react";
import { FieldError, Label } from "./Field";
import { twMerge } from 'tailwind-merge';

export type InputWrapperProps = {
  label: string;
  labelFor: string;
  hint?: string;
  error?: string;
  example?: string;
  children: React.ReactElement | React.ReactElement[];
  inputPosition?: "left" | "right" | "center";
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  label,
  labelFor,
  hint,
  error,
  example,
  inputPosition,
}) => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  let htmlFor = "";

  React.Children.forEach(children, (element: React.ReactElement) => {
    if (!React.isValidElement(element)) return;
    const { name } = element.props as { name: string };
    htmlFor = name;
  });

  return (
    <div className={
      twMerge("flex flex-col gap-4",
     inputPosition === "center" && " flex-col  ",
     inputPosition === "left" && " flex-row items-start gap-12", 
     inputPosition === "right" && " flex-row-reverse items-start gap-12",
     
     )}>
      <div className="flex flex-col gap-4">
        <Label
          htmlFor={htmlFor || labelFor}
          className="semibold-14 flex flex-col gap-4"
        >
          {label}
        </Label>
        {hint && <span className="regular-14">{hint}</span>}
        {error && <FieldError>{error}</FieldError>}
      </div>

      {children}

      {example && (
        <div
          className="cursor-pointer"
          onClick={() => setIsExampleOpen(!isExampleOpen)}
        >
          <span className="regular-14"> Example  {isExampleOpen ? "⌃" : "⌄" } </span>
          <p className="regular-14">{isExampleOpen && example}</p>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
