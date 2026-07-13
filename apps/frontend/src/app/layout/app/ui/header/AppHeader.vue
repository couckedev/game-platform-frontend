<script setup lang="ts">

import { CURRENT_PLAYER_STORE, PLAYER_MODULE } from '@player/infrastructure/vuejs';
import { PlayerMenuButtonContainer } from '@player/ui';
import { injectStrict } from '@shared/infrastructure';
import { Button, UserRound } from '@shared/ui/design-system/vuejs';
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
  <Button v-if="currentPlayerStore.viewModel.status === 'UNAUTHENTICATED'" variant="solid" intent="primary"
    :as="RouterLink" to="/login">
    <component :is="UserRound" class="size-5" />
    Sign in
  </Button>
</template>