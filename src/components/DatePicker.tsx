import { CalendarIcon } from 'lucide-react';
import {
	DatePicker as AriaDatePicker,
	type DatePickerProps as AriaDatePickerProps,
	type DateValue
} from 'react-aria-components';
import { Button } from './Button.tsx';
import { Calendar } from './Calendar.tsx';
import { DateInput } from './DateField.tsx';
import { Dialog } from './Dialog.tsx';
import { FieldGroup } from './Field.tsx';
import { Popover } from './Popover.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T>{
	label?: string;}

export function DatePicker<T extends DateValue>({  ...props }: DatePickerProps<T>) {
	return (
		<AriaDatePicker {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-row gap-1')}>
			<FieldGroup className="w-auto min-w-[167px]">
				<DateInput className="min-w-[150px] flex-1 px-8 py-6 text-sm" />
			</FieldGroup>
			<Button variant="icon" className="ml-10 w-44 rounded-4 outline-offset-0">
				<CalendarIcon aria-hidden className="h-16 w-16" />
			</Button>
			<Popover>
				<Dialog>
					<Calendar />
				</Dialog>
			</Popover>
		</AriaDatePicker>
	);
}
