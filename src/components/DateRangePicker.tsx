import { CalendarIcon } from 'lucide-react';
import {
	DateRangePicker as AriaDateRangePicker,
	type DateRangePickerProps as AriaDateRangePickerProps,
	type DateValue,
	type ValidationResult,
} from 'react-aria-components';
import { Button } from './Button.tsx';
import { DateInput } from './DateField.tsx';
import { Dialog } from './Dialog.tsx';
import { Description, FieldError, FieldGroup, Label } from './Field.tsx';
import { Popover } from './Popover.tsx';
import { RangeCalendar } from './RangeCalendar.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateRangePickerProps<T>) {
	return (
		<AriaDateRangePicker
			{...props}
			className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1')}
		>
			{label && <Label>{label}</Label>}
			<FieldGroup className="w-auto min-w-[208px] rounded-none border-none ">
				<DateInput slot="start" className="border-2 px-2 py-1.5 text-sm" />
				<span
					aria-hidden="true"
					className="text-neutral-800 group-disabled:text-neutral-200 dark:text-secondary-200 group-disabled:dark:text-secondary-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]"
				>
					–
				</span>
				<DateInput slot="end" className="flex-1 border-2 px-2 py-1.5 text-sm" />
				<Button variant="icon" className="mr-1 w-6 rounded outline-offset-0">
					<CalendarIcon aria-hidden className="h-4 w-4" />
				</Button>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<RangeCalendar />
				</Dialog>
			</Popover>
		</AriaDateRangePicker>
	);
}
