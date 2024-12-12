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

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  label,
  hint,
  error,
  example
}) => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <Label className="semibold-14">{label}</Label>
      {hint && <span className="regular-14">{hint}</span>} 
      {error && <span>{error}</span>}
      
      {children}

      {example &&
        <div className="cursor-pointer" onClick={() => setIsExampleOpen(!isExampleOpen)}>
        <span className="regular-14"> Example  {isExampleOpen ? <span>.</span>: <span>.</span>}</span>
        <p className="regular-14">{isExampleOpen && example}</p>
      </div>}
    </div>

  );
};


export default InputWrapper;

