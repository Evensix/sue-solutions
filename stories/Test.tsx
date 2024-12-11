"use dom";

import React from 'react';
import "@/styles/global.css";

export interface TestProps {
  
}

/** Primary UI component for user interaction */
export const Test = ({
  
}: TestProps) => {
  
  return (
    <div className='bg-red-300 p-10 flex gap-5 '>
      this is a dom component test
      <button type="button">
          hello
      </button>
      </div>
  );
};
