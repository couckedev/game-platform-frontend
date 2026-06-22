<script setup lang="ts">
import { HomeIcon, Link } from '@shared/infrastructure/design-system/vuejs';
import { RouterLink } from 'vue-router';

const items = [
    {
        label: 'Home',
        icon: HomeIcon,
        to: '/',
    },
];
</script>

<template>
    <nav class="flex flex-col gap-1 p-3">
        <Link appearance="inline" v-for="item in items" :key="item.to" :to="item.to" :as="RouterLink"
            class="flex flex-col items-center gap-1 text-xs md:flex-row md:text-sm rounded-lg md:pt-6 px-4">
            <component :is="item.icon" class="size-5" />
            {{ item.label }}
        </Link>
    </nav>
</template>