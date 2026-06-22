import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva(['leading-normal'], {
  variants: {
    variant: {
      body: 'text-base text-text',
      lead: 'text-xl leading-8 text-text-muted',
      muted: 'text-base text-text-muted',
      caption: 'text-sm text-text-muted',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
