import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult
} from 'react-aria-components';
import { Description, FieldError, FieldGroup, Input, Label, fieldBorderStyles } from './Field.tsx';
import { composeTailwindRenderProps } from './utils.ts';

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function NumberField(
  { label, description, errorMessage, ...props }: NumberFieldProps
) {
  return (
    <AriaNumberField {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1')}>
      <Label>{label}</Label>
      <FieldGroup>
        {renderProps => (<>
          <Input />
          <div className={fieldBorderStyles({...renderProps, class: 'flex flex-col border-s-2'})}>
            <StepperButton slot="increment">
              <ChevronUp aria-hidden className="w-4 h-4" />
            </StepperButton>
            <div className={fieldBorderStyles({...renderProps, class: 'border-b-2'})} />
            <StepperButton slot="decrement">
              <ChevronDown aria-hidden className="w-4 h-4" />
            </StepperButton>
          </div>
        </>)}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}

function StepperButton(props: ButtonProps) {
  return <Button {...props} className="px-0.5 cursor-default text-neutral-500 pressed:bg-neutral-100 group-disabled:text-neutral-200 dark:text-secondary-400 dark:pressed:bg-secondary-800 dark:group-disabled:text-secondary-600 forced-colors:group-disabled:text-[GrayText]" />
}