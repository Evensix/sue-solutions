import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const InputWidthList = {
  "sm": 'w-[10rem] ',
  "md": 'w-[14rem] ',
  "lg": 'w-[20rem] ',
  "auto": 'w-[100%] '
}

export const InlineInputWidthList = {
  "sm": '10rem',
  "md": '14rem',
  "lg": '20rem',
  "auto": '100%'
}