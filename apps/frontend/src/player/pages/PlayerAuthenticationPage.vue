<script setup lang="ts">
import { usePlayerAuthenticationStore } from '../stores/player-authentication.store';

const { status, authenticatedPlayer } = usePlayerAuthenticationStore();
</script>

<template>
  <LoginProviders
    v-if="status === 'AWAITING_AUTHORIZATION'"
  />

  <LoadingSpinner
    v-else-if="status === 'LOADING_PLAYER'"
  />

  <PlayerRegistrationForm
    v-else-if="status === 'UNREGISTERED'"
  />

  <RouterView
    v-else
  />
</template>