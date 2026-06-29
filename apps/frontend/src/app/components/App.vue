<script setup lang="ts">
import { AUTHENTICATE_PLAYER_CONTROLLER, CURRENT_PLAYER_STORE, PLAYER_MODULE } from '@player/infrastructure';
import { injectStrict } from '@shared/infrastructure';
import { onMounted } from 'vue';

const playerModule = injectStrict(PLAYER_MODULE);
const currentPlayerStore = playerModule.get(CURRENT_PLAYER_STORE);

onMounted(async () => {
    const authenticatePlayerController = playerModule.get(AUTHENTICATE_PLAYER_CONTROLLER);
    await authenticatePlayerController.handle();
})
</script>

<template>
    <div class="mx-auto w-full">
        <RouterView v-if="currentPlayerStore.viewModel.status !== 'LOADING'" />
    </div>
</template>
