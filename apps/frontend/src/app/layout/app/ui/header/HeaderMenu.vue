<script setup lang="ts">

import {
    Button,
    Menu,
    MenuItem,
    MenuItems
} from '@shared/ui/design-system/vuejs';
import { useLogout } from '../../composables/index.js';

const { logout } = useLogout();
</script>

<template>
    <Menu as="div" class="relative inline-block text-left bg-surface">
        <slot name="header-menu-button" />
        <MenuItems
            class="absolute right-0 mt-3 w-44 origin-top-right rounded-xl border border-border/40 bg-surface p-1 shadow-md"
            v-slot="{ active }">
            <MenuItem>
                <Button variant="ghost" intent="neutral" @click="logout"
                    class="w-full px-4 py-2.5 text-sm hover:border hover:border-neutral-hover">Logout</Button>
            </MenuItem>
        </MenuItems>
    </Menu>
</template>