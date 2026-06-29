<script setup lang="ts">

import { CURRENT_PLAYER_STORE, PLAYER_MODULE } from '@player/infrastructure/vuejs';
import { PlayerMenuButtonContainer } from '@player/ui';
import { Button, UserRound } from '@shared/design-system/vuejs';
import { injectStrict } from '@shared/infrastructure';
import { watchEffect } from 'vue';
import { RouterLink } from 'vue-router'
import BrandLogo from './BrandLogo.vue';
import HeaderMenu from './HeaderMenu.vue'

const playerModule = injectStrict(PLAYER_MODULE);
const currentPlayerStore = playerModule.get(CURRENT_PLAYER_STORE);
</script>

<template>
  <BrandLogo />

  <HeaderMenu v-if="currentPlayerStore.viewModel.status === 'AUTHENTICATED'">
    <template #header-menu-button>
      <PlayerMenuButtonContainer />
    </template>
  </HeaderMenu>
  <Button variant="solid" intent="primary" :as="RouterLink" to="login"
    v-else="currentPlayerStore.viewModel.status === 'UNAUTHENTICATED'">
    <component :is="UserRound" class="size-5" />
    Sign in
  </Button>
</template>