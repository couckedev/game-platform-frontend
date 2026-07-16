<script setup lang="ts">
import { usePlayerMenuButton } from '../composables/index.js';
import { PlayerMenuButton } from '../views/index.js';

const { nickname } = usePlayerMenuButton()
</script>
<template>
    <PlayerMenuButton :nickname="nickname" />
</template>
