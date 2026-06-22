<script setup lang="ts">
import { type Component, computed } from 'vue';
import { type LinkVariants, linkVariants } from './link-variants.js';

const props = defineProps<{
    as?: string | Component
    appearance?: LinkVariants['appearance']
    href?: string
}>()

const classes = computed(() => linkVariants({ appearance: props.appearance }))
</script>

<template>
    <component :is="as ?? 'a'" :class="classes" v-bind="$attrs">
        <slot />
    </component>
</template>