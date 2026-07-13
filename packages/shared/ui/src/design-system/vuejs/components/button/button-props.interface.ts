import type { Component } from 'vue';
import type { ButtonVariants } from './button-variants.js';
export interface ButtonProps {
  as?: string | Component;
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  intent?: ButtonVariants['intent'];
}
