<script setup lang="ts">


import { PlayerPublic } from '@player/ui/vue';
import { Button, UserRound } from '@shared/ui/design-system/vuejs';
import { injectStrict, useObservableValue } from '@shared/ui/vue';
import { RouterLink } from 'vue-router'
import BrandLogo from './BrandLogo.vue';
import HeaderMenu from './HeaderMenu.vue'

const { toRef } = useObservableValue();
const playerPublic = injectStrict(PlayerPublic);
const authenticationStatus = toRef(playerPublic.viewModels.authenticationStatus)
</script>

<template>
    <BrandLogo />
    <HeaderMenu v-if="authenticationStatus.isAuthenticated === true">
        <template #header-menu-button>
            <!--<PlayerMenuButtonContainer />-->
        </template>
    </HeaderMenu>
    <Button v-if="!authenticationStatus.isAuthenticated" variant="solid" intent="primary" :as="RouterLink" to="/login">
        <component :is="UserRound" class="size-5" />
        Sign in
    </Button>
</template>