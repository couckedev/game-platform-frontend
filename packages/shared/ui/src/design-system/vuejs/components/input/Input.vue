<script setup lang="ts">
import { computed } from 'vue';
import { inputVariants } from './input-variants.js';

const props = defineProps<{
    status?: 'valid' | 'invalid' | undefined;
    //variant?: InputVariants['variant'];
}>();

const model = defineModel<string>({
    default: ''
});

const classes = computed(() =>
    inputVariants({
        status: props.status,
    }),
);
</script>

<template>
    <input v-model="model" :class="classes" :aria-invalid="props.status === 'invalid' ? true : undefined" />
</template>