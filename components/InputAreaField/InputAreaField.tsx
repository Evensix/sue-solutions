"use dom";

import React from "react";

import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
} from "react-aria-components"

export type InputAreaFieldProps = AriaTextAreaProps & {
  className?: string;
  name: string;
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

const InputField: React.FC<InputAreaFieldProps> = ({
  className,
  leftMembers,
  rightMembers,
  disabled,
  name,
  ...props
}) => {
  return (
    <div
      className={` flex border-input-border focus-within:border-input-border-focus border-[1px] p-2 gap-2 rounded-sm
       ${disabled ? "bg-input-background-disabled" : ""}
      `}
    >
      {leftMembers && WrapMembers([...leftMembers])}
      <AriaTextArea
        name={name}
        spellCheck={false}
        
        disabled={disabled}
        className="focus:outline-none  px-2 "
        {...props}
      ></AriaTextArea>
      {rightMembers && WrapMembers([...rightMembers])}
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
            <div className="flex text-input-prepost justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center  " key={index}>
              {member}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InputField;


// const TextArea = ({ className, ...props }: AriaTextAreaProps) => {
//   return (
//     <AriaTextArea
//       className={composeRenderProps(className, (className) =>
//         cn(
//           "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
//           /* Focused */
//           "data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2",
//           /* Disabled */
//           "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
//           /* Resets */
//           "focus-visible:outline-none",
//           className
//         )
//       )}
//       {...props}
//     />
//   )
// }