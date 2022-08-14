<template>
  <div>
    <!-- header -->
    <header class="flex justify-between items-baseline mt-6 mb-4">
      <h1 class="font-semibold text-2xl">{{ title }}</h1>
    </header>

    <!-- cards -->
    <swiper
      :slides-per-view="5"
      :space-between="10"
    >
      <!-- :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" -->
      <swiper-slide
        class="bg-zinc-700/25 rounded-md shadow-sm relative"
        v-for="slide in slides"
        @click="setIsOpen(true)"
      >
        <img
          v-lazy="slide.img"
          class="col-span-2 bg-cover rounded-md object-cover aspect-[5/3]"
          alt=""
        />
        <h1
          class="text-zinc-100 text-center w-full font-bold cursor-default absolute top-3/4"
          style="text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7)"
        >
          <!-- {{ slide.title }} -->
        </h1>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
// import { autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const store = useStore();
let slides = computed(() => store.state.slides);
const setIsOpen = (a) => {
  store.commit("setIsOpen", a);
};
const titles = ["Only on Notflox", "Watch Again", "Thrillers & Horror"];
//swiper
const spv = ref();
const screenwidth = screen.width;
const calcspv = () => {
  if (screenwidth < 640) {
    spv.value = 3;
  } else if (screenwidth > 1024) {
    spv.value = 8;
  } else if (screenwidth > 768) {
    spv.value = 7;
  } else if (screenwidth > 640) {
    spv.value = 5;
  }
};
calcspv();
</script>
