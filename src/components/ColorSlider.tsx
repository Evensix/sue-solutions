import {
  ColorSlider as AriaColorSlider,
  ColorSliderProps as AriaColorSliderProps,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Label } from './Field.tsx';
import { composeTailwindRenderProps } from './utils.ts';
import { ColorThumb } from './ColorThumb.tsx';

const trackStyles = tv({
  base: 'group col-span-2 orientation-horizontal:h-6 rounded-lg',
  variants: {
    orientation: {
      horizontal: 'w-full h-6',
      vertical: 'w-6 h-56 ml-[50%] -translate-x-[50%]'
    },
    isDisabled: {
      true: 'bg-neutral-300 dark:bg-secondary-800 forced-colors:bg-[GrayText]'
    }
  }
});

interface ColorSliderProps extends AriaColorSliderProps {
  label?: string;
}

export function ColorSlider({ label, ...props }: ColorSliderProps) {
  return (
    <AriaColorSlider {...props} className={composeTailwindRenderProps(props.className, 'orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-56')}>
      <Label>{label}</Label>
      <SliderOutput className="text-sm text-neutral-500 dark:text-secondary-400 font-medium orientation-vertical:hidden" />
      <SliderTrack
        className={trackStyles}
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled ? undefined : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </AriaColorSlider>
  );
}