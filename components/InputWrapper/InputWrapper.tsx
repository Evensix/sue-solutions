"use dom";

import React, { useState } from "react";
import { FieldError, Label } from "../InputUtils/InputUtils";

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
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={labelFor} className="semibold-14 flex flex-col gap-1" >
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
            Example {isExampleOpen ? <span>.</span> : <span>.</span>}
          </span>
          <p className="regular-14">{isExampleOpen && example}</p>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
