<script setup lang="ts">
import { RouterView } from 'vue-router';

import { AppHeader } from './header/index.js';
import MainNavigation from './main-navigation/MainNavigation.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-background">

        <header class="flex items-center justify-between h-16 px-8 bg-surface border-b border-border">
            <AppHeader />
        </header>
        <div class="flex flex-1">
            <aside class="hidden w-60 shrink-0 border-r border-border/60 bg-surface md:block">
                <MainNavigation />
            </aside>

            <main class="flex flex-1 bg-background px-10 py-8 pb-20 md:pb-8">
                <RouterView />
            </main>
        </div>

        <nav class="border-t border-border bg-surface md:hidden">
            <MainNavigation orientation="horizontal" />
        </nav>
    </div>
</template>