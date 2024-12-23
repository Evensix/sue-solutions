import { SearchIcon, XIcon } from 'lucide-react';
import {
	SearchField as AriaSearchField,
	type SearchFieldProps as AriaSearchFieldProps,
	type ValidationResult,
} from 'react-aria-components';
import { Button } from './Button.tsx';
import { FieldGroup, Input } from './Field.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface SearchFieldProps extends AriaSearchFieldProps {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function SearchField({ ...props }: SearchFieldProps) {
	return (
		<AriaSearchField
			{...props}
			className={composeTailwindRenderProps(props.className, 'group flex min-w-[40px] flex-col gap-4 ')}
		>
			<FieldGroup className="rounded-full bg-neutral-900/5 border-none w-auto min-w-[167px] gap-4 py-2 px-4" >
				<SearchIcon
					aria-hidden
					className="ml-2 h-16 w-16 text-neutral-500 group-disabled:text-neutral-200 dark:text-secondary-400 dark:group-disabled:text-secondary-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
				/>
				<Input className="[&::-webkit-search-cancel-button]:hidden bg-transparent " />
				<Button variant="icon" className="mr-4 w-24 group-empty:invisible">
					<XIcon aria-hidden className="h-4 w-4" />
				</Button>
			</FieldGroup>
		</AriaSearchField>
	);
}
