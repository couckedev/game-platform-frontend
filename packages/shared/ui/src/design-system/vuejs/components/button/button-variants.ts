import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded-lg',
    'font-medium',
    'transition-colors',
    'duration-200',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-primary',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    '[&>svg]:size-5',
    '[&>svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: ['border', 'bg-transparent'],
        ghost: [
          'border',
          'border-transparent',
          'bg-transparent',
          'hover:bg-transparent',
        ],
      },
      intent: {
        primary: '',
        secondary: '',
        neutral: '',
      },
      size: {
        md: 'h-10 px-4 text-sm',
      },
    },

    compoundVariants: [
      {
        variant: 'solid',
        intent: 'primary',
        class: ['bg-primary', 'text-inverse', 'hover:bg-primary-hover'],
      },
      {
        variant: 'outline',
        intent: 'primary',
        class: [
          'border-primary',
          'text-primary',
          'hover:border-primary-hover',
          'hover:text-primary-hover',
        ],
      },
      {
        variant: 'ghost',
        intent: 'primary',
        class: ['text-primary', 'hover:text-primary-hover'],
      },

      {
        variant: 'solid',
        intent: 'secondary',
        class: [
          'bg-surface',
          'text-inverse',
          'border',
          'border-secondary',
          'hover:bg-surface-hover',
        ],
      },
      {
        variant: 'outline',
        intent: 'secondary',
        class: [
          'border-secondary',
          'text-secondary',
          'hover:border-secondary-hover',
          'hover:text-secondary-hover',
        ],
      },
      {
        variant: 'ghost',
        intent: 'secondary',
        class: ['text-secondary', 'hover:text-secondary-hover'],
      },

      {
        variant: 'solid',
        intent: 'neutral',
        class: [
          'bg-surface',
          'text-inverse',
          'border',
          'border-neutral',
          'hover:bg-surface-hover',
        ],
      },
      {
        variant: 'outline',
        intent: 'neutral',
        class: [
          'border-neutral',
          'text-neutral',
          'hover:border-neutral-hover',
          'hover:text-neutral-hover',
        ],
      },
      {
        variant: 'ghost',
        intent: 'neutral',
        class: ['text-neutral', 'hover:text-neutral-hover'],
      },
    ],

    defaultVariants: {
      variant: 'outline',
      intent: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
