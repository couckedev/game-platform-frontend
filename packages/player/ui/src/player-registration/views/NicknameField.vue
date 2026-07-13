<script setup lang="ts">

import {
    FormField,
    Input,
    Label,
} from '@shared/ui/design-system/vuejs';
import { useField } from 'vee-validate';
import { computed } from 'vue';

const {
    value,
    errorMessage,
    meta,
} = useField<string>('nickname');

const status = computed(() => {
    if (!meta.touched) {
        return undefined;
    }

    return meta.valid
        ? 'valid'
        : 'invalid';
});
</script>

<template>
    <FormField>
        <Label for="nickname">
            Nom du joueur
        </Label>

        <Input id="nickname" v-model="value" name="nickname" :status="status" />

        <div v-if="errorMessage">
            {{ errorMessage }}
        </div>
    </FormField>
</template>