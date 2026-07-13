<script setup lang="ts">
const props = defineProps<{
    for: string;
}>();
</script>

<template>
    <!-- biome-ignore lint/a11y/noLabelWithoutControl: <Biome can't know if input will be present on form> -->
    <label :for="props.for" class="text-sm font-medium text-heading">
        <slot />
    </label>
</template>