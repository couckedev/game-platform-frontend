<script setup lang="ts">
import { type Component, computed } from 'vue';
import { type TextVariants, textVariants } from './text-variants.js';

const props = defineProps<{
    as?: string | Component
    variant?: TextVariants['variant']
    href?: string
}>()

const classes = computed(() => textVariants({ variant: props.variant }))
</script>

<template>
    <component :is="as ?? 'p'" :class="classes" v-bind="$attrs">
        <slot />
    </component>
</template>