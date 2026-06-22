<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';
import type { ButtonProps } from './button-props.interface.js';
import { buttonVariants } from './button-variants.js';

const props = defineProps<ButtonProps>();

defineOptions({
    inheritAttrs: false,
});
const { class: classAttribute } = useAttrs();
const classes = computed(() =>
    twMerge(
        buttonVariants({
            variant: props.variant,
            intent: props.intent,
            size: props.size,
        }),
        classAttribute as string,
    ),
);
</script>

<template>
    <component :is="as ?? 'button'" :class="classes" v-bind="{ ...$attrs, class: undefined }">
        <slot />
    </component>
</template>