import { cva, type VariantProps } from 'class-variance-authority';

export const linkVariants = cva(
  'inline-flex items-center gap-2 transition-colors',
  {
    variants: {
      appearance: {
        inline: 'text-primary hover:text-primary/85',
        tab: [
          'px-1',
          'py-4',
          'border-b-2',
          'border-transparent',
          'font-medium',
          'text-text-muted',
          'hover:text-text',
        ],
        navigation: ['rounded-lg', 'px-3', 'py-2', 'hover:bg-surface-hover'],
      },
    },
    defaultVariants: {
      appearance: 'inline',
    },
  },
);

export type LinkVariants = VariantProps<typeof linkVariants>;
