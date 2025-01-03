import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps as RACTabListProps,
  TabPanelProps,
  TabProps as RACTabProps,
  TabsProps,
  composeRenderProps
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

const tabsStyles = tv({
  base: 'flex gap-4',
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row w-[800px]'
    }
  }
});

export function Tabs(props: TabsProps & { type?: 'button' | 'underline', size?: 'small' | 'medium' }) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabsStyles({...renderProps, className})
      )} />
  );
}

const tabListStyles = tv({
  base: 'flex gap-1',
  variants: {
    background: {
      true: '',
      false: '',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col items-start'
    }
  }
});

export type TabListProps = {
  background?: boolean;
}

export function TabList<T extends object>(props: TabListProps & RACTabListProps<T> & { type?: 'button' | 'underline', size?: 'small' | 'medium' } ) {
  return (
    <RACTabList
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabListStyles({...renderProps, className})
      )} />
  );
}

const tabProps = tv({
  extend: focusRing,
  base: 'flex items-center cursor-default text-sm font-medium transition forced-color-adjust-none',
  variants: {
    type: {
      button: ['rounded-6 bg-white dark:bg-neutral-900/50 dark:text-white forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText]',
				"hover:bg-neutral-900/10 dark:hover:bg-secondary-700",
        "outline-neutral-900/10 dark:outline-error-50",
        "selected:shadow-sm dark:selected:bg-neutral-900/70  dark:shadow-md selected:hover:bg-white",


      ],
      underline:[ 'rounded-0 border-b-2 border-transparent bg-white dark:bg-neutral-900/50 dark:text-white forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText]',
				"hover:bg-neutral-900/10 dark:hover:bg-secondary-700",
				"outline-neutral-900/10 dark:outline-error-50",
        "selected:border-brand-600 dark:selected:border-brand-400 dark:selected:border-brand-600  ",

      ],
    },
    size: {
      small: 'px-8 py-4',
      medium: 'px-10 py-8',
    },
    isDisabled: {
      true: 'text-neutral-200 dark:text-secondary-600 forced-colors:text-[GrayText] selected:text-neutral-300 dark:selected:text-secondary-500 forced-colors:selected:text-[HighlightText] selected:bg-neutral-200 dark:selected:bg-secondary-600 forced-colors:selected:bg-[GrayText]'
    }
  },
  compoundVariants: [

    {
      type: 'underline',
      size: 'small',
      class: 'px-6 py-6'
    },
    {
      type: 'underline',
      size: 'medium',
      class: 'px-8 py-8'
    }
    
  ]
});

export type TabProps = RACTabProps & {
  type?: "button" | "underline";
  size?: "small" | "medium" ;
}

export function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabProps({...renderProps, className, size: props.size ?? 'medium', type: props.type ?? 'button'})
      )} />
  );
}

const tabPanelStyles = tv({
  extend: focusRing,
  base: 'flex-1 p-4 text-sm text-neutral-900 dark:text-secondary-100'
});

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabPanelStyles({...renderProps, className})
      )} />
  );
}
