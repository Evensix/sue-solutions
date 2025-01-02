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

export function Tabs(props: TabsProps) {
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

export function TabList<T extends object>(props: TabListProps & RACTabListProps<T>) {
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
  base: 'flex items-center cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition forced-color-adjust-none',
  variants: {
    type: {
      button: '',
      underline: '',
    },
    size: {
      small: '',
      medium: '',
    },
    isSelected: {
      false: 'text-neutral-600 dark:text-secondary-300 hover:text-neutral-700 pressed:text-neutral-700 dark:hover:text-secondary-200 dark:pressed:text-secondary-200 hover:bg-neutral-200 dark:hover:bg-secondary-800 pressed:bg-neutral-200 dark:pressed:bg-secondary-800',
      true: 'text-white dark:text-black forced-colors:text-[HighlightText] bg-neutral-800 dark:bg-secondary-200 forced-colors:bg-[Highlight]'
    },
    isDisabled: {
      true: 'text-neutral-200 dark:text-secondary-600 forced-colors:text-[GrayText] selected:text-neutral-300 dark:selected:text-secondary-500 forced-colors:selected:text-[HighlightText] selected:bg-neutral-200 dark:selected:bg-secondary-600 forced-colors:selected:bg-[GrayText]'
    }
  }
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
