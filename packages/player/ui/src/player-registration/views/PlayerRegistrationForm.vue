<script setup lang="ts">
import {
    Button,
    FormField,
    Input,
    Label,
} from '@shared/ui/design-system/vuejs';
import {
    FieldContainer,
    FormContainer
} from '@shared/ui/forms/vuejs';


const submit = () => console.log('bonjour à toi')
</script>

<template>
    <FormContainer :initial-values="{ nickname: 'toto' }" @submit="submit">
        <FormField>
            <Label for="nickname">
                Nom du joueur
            </Label>

            <FieldContainer name="nickname">
                <Input id="nickname" name="nickname" />
            </FieldContainer>
        </FormField>

        <Button type="submit">
            Créer mon profil
        </Button>
    </FormContainer>
</template>