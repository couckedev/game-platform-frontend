<script setup lang="ts">
import { PlayerPublic } from '@player/ui/vue'
import { injectStrict, SharedRuntime, useObservableValue } from '@shared/ui/vue';
import { onMounted, watch, watchEffect } from 'vue';

const playerPublic = injectStrict(PlayerPublic);
const { toRef } = useObservableValue();
const authenticationStatus = toRef(playerPublic.viewModels.authenticationStatus)
watchEffect(() => console.log(authenticationStatus.value))
</script>

<template>
  <div class="mx-auto w-full">
    <RouterView v-if="!authenticationStatus.isLoading" />
  </div>
</template>