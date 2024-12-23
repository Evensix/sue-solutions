import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps
} from 'react-aria-components';
import { Label } from './Field.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1')}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-neutral-600 dark:text-secondary-400">{valueText}</span>
          </div>
          <div className="w-64 h-2 rounded-full bg-neutral-300 dark:bg-secondary-700 outline outline-1 outline-offset-0 outline-transparent relative overflow-hidden">
            <div className={`absolute top-0 h-full rounded-full bg-purple-600 dark:bg-purple-500 forced-colors:bg-[Highlight] ${isIndeterminate ? 'left-full animate-in duration-1000 [--tw-enter-translate-x:calc(-16rem-100%)] slide-out-to-right-full repeat-infinite ease-out' : 'left-0'}`} style={{ width: (isIndeterminate ? 40 : percentage) + '%' }} />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
