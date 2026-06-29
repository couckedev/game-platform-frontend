<script setup lang="ts">
const reload = () => {
    window.location.reload();
};
</script>

<template>
    <main class="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <section class="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 class="text-2xl font-semibold text-slate-900">
                Game Platform
            </h1>

            <p class="mt-6 text-lg font-medium text-slate-900">
                L'application est momentanément indisponible.
            </p>

            <p class="mt-3 text-slate-600">
                Impossible d'initialiser les services nécessaires au démarrage de
                l'application. Veuillez réessayer dans quelques instants.
            </p>

            <button class="mt-8 rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                type="button" @click="reload">
                Réessayer
            </button>
        </section>
    </main>
</template>