import React from "react";
import {
    Group as AriaGroup,
    Input as AriaInput,
    InputProps as AriaInputProps,
} from "react-aria-components";
import warning from '../icons/warning.svg'
import { tv } from "tailwind-variants";

export type InputFieldProps =  AriaInputProps & {
  className?: string;
  name: string;
  length?: "sm" | "md" | "lg" | "auto";
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url",
  leftMembers?: React.ReactNode[];
  rightMembers?: React.ReactNode[];
  disabled?: boolean;
};

  const inputStyles = tv({
    base: [ ' relative flex border-black/25  border-[1px]  px-4 gap-2 rounded-4 ', 
            ' outline outline-0  outline-offset-0  forced-colors:outline-[Highlight]',
            ' focus-within:outline-4',
            ' focus:border-black/50  ',
            ' hover:border-black/25',
            ' outline-brand-500/25',
    ],
    variants  : {

        isDisabled: {
            true: 'bg-neutral-900/5 dark:bg-neutral-700 forced-colors:bg-[GrayText] border-neutral-300 dark:border-secondary-700 forced-colors:border-[GrayText]',
        },
        isError: {
            true:[  'border-error-600 outline-error-500/25',
                    'hover:border-error-500 dark:hover:border-error-500',
                    'outline-error-500/25 ',
            ],
          },
        size: {
            sm: 'w-[10rem]',
            md: 'w-[14rem]',
            lg: 'w-[20rem]',
            auto: 'w-full'
        },
    },
    defaultVariants: {
    },
    compoundVariants: [
    // }
    ]
  });
  

const InputField: React.FC<InputFieldProps> = ({
  className,
  leftMembers=[],
  rightMembers=[],
  disabled,
  name,
  type,
  length,
  ...props
}) => {
    
  return (
    <AriaGroup 
    className={ inputStyles({ isDisabled: disabled,  isError: Boolean(props["aria-errormessage"]) })  }
    >
        


        {leftMembers && WrapMembers([...leftMembers], "left")}
        <AriaInput
          role="textbox"
          type={type}
          name={name}
          autoComplete="off"
          spellCheck={false}
          disabled={disabled}
          {...props}
           className="focus:outline-none bg-transparent px-2"
        />
        {rightMembers && WrapMembers( [...rightMembers], "right")}
        { props["aria-errormessage"]  && WrapMembers( [<img src={warning} className="w-20 h-20" />])}

    </AriaGroup>
  );
};

const WrapMembers = (members: React.ReactNode[], position?: "left" | "right") => {
  if(!members.length) return null
  return (
    <div className="flex column bg-transparent ">
      {members.map((member, index) => {
        if (member) {
          return (
            <div className={`flex bg-transparent  text-input-prepost justify-center items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center  
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