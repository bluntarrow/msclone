<template>
  <div
    class="w-full grid grid-cols-5 justify-between  px-4 text-zinc-300 text-sm bg-zinc-900 h-10 items-center"
  >
    <div class="flex items-center text-zinc-500">
      <ArrowLeftIcon v-if="$route.name=='app'" @click="$router.go(-1)" class="h-4 mr-5 text-zinc-200 cursor-pointer"></ArrowLeftIcon>

      <div class="h-3 w-3 mr-4 grid grid-cols-2">
        <div class="bg-red-500"></div>
        <div class="bg-green-500"></div>
        <div class="bg-blue-500"></div>
        <div class="bg-yellow-500"></div>
      </div>
      <h1>Microsoft Store</h1>
    </div>
    <div class="col-span-3 flex justify-center">
      <input
        type="text"
        placeholder="Search Apps, Games, Movies and More"
        class="w-full max-w-xl py-1 my-1 px-3 rounded-l placeholder:text-zinc-300 bg-zinc-800 outline-none"
      />
      <div class="my-1 h-full p-2 rounder-r bg-zinc-800">
        <SearchIcon class="h-4"></SearchIcon>
      </div>
    </div>
    <div
      class="rounded-full h-7 w-7 text-xs flex justify-center items-center justify-self-center bg-zinc-700 text-zinc-400 font-semibold"
    >
      JD
    </div>
  </div>
</template>
<script setup>
import {SearchIcon, ArrowLeftIcon} from '@heroicons/vue/outline'
</script>
