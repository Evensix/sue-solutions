import {
	RangeCalendar as AriaRangeCalendar,
	type RangeCalendarProps as AriaRangeCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	type DateValue,
	Text,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { CalendarGridHeader, CalendarHeader } from './Calendar.tsx';
import { focusRing } from './utils.ts';

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'visibleDuration'> {
	errorMessage?: string;
}

const cell = tv({
	extend: focusRing,
	base: 'flex h-full w-full items-center justify-center rounded-full text-secondary-900 forced-color-adjust-none dark:text-secondary-200',
	variants: {
		selectionState: {
			none: 'group-hover:bg-neutral-100 group-pressed:bg-neutral-200 dark:group-pressed:bg-secondary-600 dark:group-hover:bg-secondary-700',
			middle: [
				'group-hover:bg-purple-200 dark:group-hover:bg-purple-900 forced-colors:group-hover:bg-[Highlight]',
				'group-invalid:group-hover:bg-error-200 dark:group-invalid:group-hover:bg-error-900 forced-colors:group-invalid:group-hover:bg-[Mark]',
				'group-pressed:bg-purple-300 dark:group-pressed:bg-purple-800 forced-colors:text-[HighlightText] forced-colors:group-pressed:bg-[Highlight]',
				'group-invalid:group-pressed:bg-error-300 dark:group-invalid:group-pressed:bg-error-800 forced-colors:group-invalid:group-pressed:bg-[Mark]',
			],
			cap: 'bg-purple-600 text-white group-invalid:bg-error-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-invalid:bg-[Mark]',
		},
		isDisabled: {
			true: 'text-neutral-300 dark:text-secondary-600 forced-colors:text-[GrayText]',
		},
	},
});

export function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>) {
	return (
		<AriaRangeCalendar {...props}>
			<CalendarHeader />
			<CalendarGrid className="[&_td]:px-0">
				<CalendarGridHeader />
				<CalendarGridBody>
					{(date) => (
						<CalendarCell
							date={date}
							className="group h-9 w-9 cursor-default selected:bg-purple-100 outside-month:text-neutral-300 text-sm outline outline-0 selection-start:rounded-s-full selection-end:rounded-e-full invalid:selected:bg-error-100 dark:selected:bg-purple-700/30 dark:invalid:selected:bg-error-700/30 forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full"
						>
							{({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isFocusVisible, isDisabled }) => (
								<span
									className={cell({
										selectionState:
											isSelected && (isSelectionStart || isSelectionEnd) ? 'cap' : isSelected ? 'middle' : 'none',
										isDisabled,
										isFocusVisible,
									})}
								>
									{formattedDate}
								</span>
							)}
						</CalendarCell>
					)}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text slot="errorMessage" className="text-error-600 text-sm">
					{errorMessage}
				</Text>
			)}
		</AriaRangeCalendar>
	);
}
