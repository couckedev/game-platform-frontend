<script setup lang="ts">

import { PlayerMenuButtonContainer } from '@player/ui/vuejs/features/player-authentication';
import { usePlayer } from '@player/ui/vuejs/public';

import { Button, UserRound } from '@shared/ui/design-system/vuejs';
import { RouterLink } from 'vue-router'
import BrandLogo from './BrandLogo.vue';
import HeaderMenu from './HeaderMenu.vue'

const { authenticationStatus } = usePlayer()
</script>

<template>
  <BrandLogo />
  <HeaderMenu v-if="authenticationStatus.isAuthenticated === true">
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