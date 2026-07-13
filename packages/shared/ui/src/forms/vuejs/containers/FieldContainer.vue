<script setup lang="ts">
import { useFieldContext } from '../context/index.js'

const props = defineProps<{ name: string }>()
const field = useFieldContext(props.name)
</script>

<template>
    <slot :value="field.value" :errors="field.errors" :change="field.change" :blur="field.blur" />
</template>