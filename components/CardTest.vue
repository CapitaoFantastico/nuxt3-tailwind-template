<script setup lang="ts">
import { BeakerIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div class="flex flex-col">
    <div class="block p-6 rounded-t-lg shadow-lg bg-slate-500 max-w-sm">
      <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
        Titulo do card
      </h5>
    </div>
    <div
      class="block p-6 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg max-w-sm"
    >
      <p class="text-gray-700 text-base">
        <BeakerIcon class="h-5 w-5 text-blue-500" />
      </p>
      <button
        class="my-3 bg-blue-600 rounded px-3 py-2 text-white font-medium text-xs leading-tight inline-block capitalize shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        acessar
      </button>
    </div>
  </div>
  <!-- <div class="flex justify-center">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
        Card title
      </h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Button
      </button>
    </div>
  </div> -->
</template>
