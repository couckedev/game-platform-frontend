<script setup lang="ts">
import { Button, GoogleIcon, Heading, Text } from '@shared/ui/design-system/vuejs';
import { injectStrict, SharedRuntime } from '@shared/ui/vue';

const { authentication } = injectStrict(SharedRuntime);
</script>

<template>
    <main class="flex flex-1 justify-center mt-16">
        <div class="mx-auto flex w-full max-w-lg flex-col gap-10">
            <div class="flex flex-col gap-3">
                <Heading variant="page">
                    Sign in
                </Heading>

                <Text variant="lead">
                    Play online, challenge your friends, and discover new games.
                </Text>
            </div>

            <Button variant="outline" @click="authentication.identityProvider.login({ provider: 'google' })">
                <GoogleIcon class="size-5" />
                Continue with Google
            </Button>

            <Text variant="caption" class="max-w-sm">
                By signing in, you agree to our Terms of Service.
            </Text>
        </div>
    </main>
</template>