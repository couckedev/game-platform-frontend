<script setup lang="ts">
import { usePlayerAuthentication } from '@player/ui/player-authentication'

const { currentPlayerStore } = usePlayerAuthentication();
</script>

<template>
    <div class="mx-auto w-full">
        <RouterView v-if="currentPlayerStore.viewModel.status !== 'LOADING'" />
    </div>
</template>
