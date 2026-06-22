import { cva, type VariantProps } from 'class-variance-authority';

export const headingVariants = cva(
  ['text-heading', 'tracking-tight', 'leading-tight'],
  {
    variants: {
      variant: {
        display: 'text-5xl font-bold',
        page: 'text-5xl font-bold tracking-tight',
        section: 'text-3xl font-semibold',
        card: 'text-2xl font-semibold',
        title: 'text-xl font-semibold',
      },
    },

    defaultVariants: {
      variant: 'page',
    },
  },
);

export type HeadingVariants = VariantProps<typeof headingVariants>;
