import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'h-11',
    'w-full',
    'rounded-lg',
    'border',
    'border-border',
    'bg-surface',
    'px-3.5',
    'text-sm',
    'text-neutral',
    'outline-none',
    'focus:border-primary',
  ],
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-3.5 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      status: {
        valid: 'border-success focus:ring-success/10',
        invalid: 'border-danger focus:ring-danger/10',
      },
    },
  },
);
export type InputVariants = VariantProps<typeof inputVariants>;
