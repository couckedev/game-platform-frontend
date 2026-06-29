<script setup lang="ts">
import { Button, ChevronDown, MenuButton } from '@shared/design-system/vuejs';
import type { PlayerMenuButtonProps } from './player-menu-button-props.interface.js';

defineProps<PlayerMenuButtonProps>()

</script>
<template>
    <MenuButton :as="Button"
        class="transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        intent="neutral" variant="ghost">
        {{ nickname }}
        <component :is="ChevronDown" class="size-5" />
    </MenuButton>
</template>
