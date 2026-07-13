<script setup lang="ts" generic="FormValues extends Record<string, unknown>, ValidationSchema">
import { provide } from 'vue'
import type { FormOptions } from '../../common/index.js'
import { formFactory } from '../../vee-validate/index.js'
import { FORM_KEY } from '../context/index.js'


const props = defineProps<FormOptions<FormValues, ValidationSchema>>()
const form = formFactory.create({
    initialValues: props.initialValues,
    ...(props.validationSchema !== undefined && { validationSchema: props.validationSchema }),
    ...(props.onSubmit !== undefined && { onSubmit: props.onSubmit }),
})
provide(FORM_KEY, form)
</script>

<template>
    <form @submit.prevent="form.submit">
        <slot />
    </form>
</template>