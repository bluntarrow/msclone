<template>
  <div>
    <!-- cards -->
    <swiper
      :slides-per-view="5"
      :space-between="10"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules='modules'
    >
      <swiper-slide
        class="rounded-md shadow-sm relative"
        v-for="slide in slides"
        v-slot="{isActive}"
      >
        <img
          v-lazy="slide.img"
          class="bg-cover rounded-md object-cover aspect-[5/3]"
          alt=""
        />
        <div
          class="hover:text-zinc-100 hover:border-4 hover:border-sky-700 text-zinc-100/0 p-4 rounded-md hover:bg-gradient-to-r from-zinc-800 via-zinc-800/25 to-transparent w-full font-bold cursor-pointer absolute top-0 h-full flex items-center" :class="isActive?'bg-gradient-to-r from-zinc-800 via-zinc-800/25 to-transparent border-4 border-sky-700':''" :style="isActive?'color:rgb(244,244,245)':''">
          {{ slide.title }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { computed} from "vue";
import { useStore } from "vuex";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modules = [Autoplay]
const store = useStore();
let slides = computed(() => store.state.slides);

</script>
