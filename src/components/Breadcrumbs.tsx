import { ChevronRight } from 'lucide-react';
import { Breadcrumb as AriaBreadcrumb, Breadcrumbs as AriaBreadcrumbs, BreadcrumbProps, BreadcrumbsProps, LinkProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Link } from './Link.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return <AriaBreadcrumbs {...props} className={twMerge('flex gap-1', props.className)} />;
}

export function Breadcrumb(props: BreadcrumbProps & Omit<LinkProps, 'className'>) {
  return (
    <AriaBreadcrumb {...props} className={composeTailwindRenderProps(props.className, 'flex items-center gap-1')}>
      <Link variant="secondary" {...props} />
      {props.href && <ChevronRight className="w-3 h-3 text-neutral-600 dark:text-secondary-400" />}
    </AriaBreadcrumb>
  );
}