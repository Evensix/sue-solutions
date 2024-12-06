"use dom";

import React, { useState } from "react";
import { Label } from "react-aria-components";

export type InputWrapperProps = {
label:string,
hint?:string,
error?:string,
example?:string
children?:React.ReactNode
};

export const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  label,
  hint,
  error,
  example
}) => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      {hint && <span>{hint}</span>} 
      {error && <span>{error}</span>}
      
      {children}

      {example &&
        <div className="cursor-pointer" onClick={() => setIsExampleOpen(!isExampleOpen)}>
        <span> Example  {isExampleOpen ? <span>^</span>: <span>v</span>}</span>
        <p>{isExampleOpen && example}</p>
      </div>}
    </div>

  );
};
