<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 class="text-3xl">Hello World</h1>
        <div class="text-center">
            <h2>Your count is:</h2>
            <h2 class="text-7xl">{{ counterStore.count }}</h2>
        </div>
        <div class="flex flex-col gap-4">
            <button class="border-white border-4 w-64 h-12" @click="counterStore.decrement()">
                Decrement
            </button>
            <button class="border-white border-4 w-64 h-12" @click="counterStore.reset()">
                Reset
            </button>
            <router-link
                to="/"
                class="flex place-items-center justify-center border-white border-4 w-64 h-12"
            >
                <h1>Next Page</h1>
            </router-link>
        </div>
    </main>
</template>
