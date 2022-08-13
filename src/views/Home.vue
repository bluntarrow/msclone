<template>
  <div class="text-zinc-50">
    <!-- header video -->
    <div class="w-full relative z-10">
      <ImageHeader></ImageHeader>/
    </div>
    <!--apps section -->
    <div class="p-8 pt-0 -mt-40 w-[90vw]  pb-0 z-40 relative">
      <Slides></Slides>
      <footer class="text-center text-xs md:mt-10 py-2 text-zinc-600">
        &copy;{{ year }} MsStore inc.
      </footer>
    </div>
  </div>
</template>

<script setup>
import ImageHeader from "../components/home/ImageHeader.vue";
import Slides from "../components/home/Slides.vue";

const date = new Date();
const year = date.getFullYear();
</script>
