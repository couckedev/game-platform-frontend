<script setup lang="ts">
import { type Component, computed } from 'vue';
import { type HeadingVariants, headingVariants } from './heading-variants.js';

const props = defineProps<{
    as?: keyof HTMLElementTagNameMap | Component;
    variant?: HeadingVariants['variant'];
}>();

const classes = computed(() =>
    headingVariants({
        variant: props.variant,
    }),
);
</script>

<template>
    <component :is="as ?? 'h1'" :class="classes" v-bind="$attrs">
        <slot />
    </component>
</template>