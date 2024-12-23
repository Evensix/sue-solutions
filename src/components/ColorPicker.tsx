import type {ReactNode} from 'react';
import {Button, ColorPicker as AriaColorPicker, ColorPickerProps as AriaColorPickerProps, DialogTrigger} from 'react-aria-components';
import {ColorSwatch} from './ColorSwatch.tsx';
import {ColorArea} from './ColorArea.tsx';
import {ColorSlider} from './ColorSlider.tsx';
import {ColorField} from './ColorField.tsx';
import {Dialog} from './Dialog.tsx';
import {Popover} from './Popover.tsx';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils.ts';

const buttonStyles = tv({
  extend: focusRing,
  base: 'flex gap-2 items-center cursor-default rounded text-sm text-neutral-800 dark:text-neutral-200'
});

export interface ColorPickerProps extends AriaColorPickerProps {
  label?: string;
  children?: ReactNode;
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <DialogTrigger>
        <Button className={buttonStyles}>
          <ColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="flex flex-col gap-2">
            {children || (
              <>
                <ColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <ColorSlider colorSpace="hsb" channel="hue" />
                <ColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  );
}
