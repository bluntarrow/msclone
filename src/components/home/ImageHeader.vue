<template>
  <div class="w-full relative">
    <!--  picture -->
    
     <swiper
      :slides-per-view="1"
      :space-between="10"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules='modules'
      class='relative'
      effect="fade"
    >
      <swiper-slide
        v-for="slide in slides"
      >
        <img
          v-lazy="slide.img"
          class="bg-cover bg-fixed  object-cover aspect-[6/2]"
          alt=""
        />
      </swiper-slide>
    </swiper>

    <!-- writeup -->
    <div
      class="h-full w-full z-50 absolute top-0 grid grid-cols-4 items-center pl-8 bg-gradient-to-r from-zinc-800 via-transparent to-transparent"
    >
      <div class="flex flex-col col-span-3 md:col-span-1">
        <div class="">
          <div>free</div>
        </div>
        <h1 class="text-4xl md:5xl">Balance</h1>
        <article class="mt-3 font-semibold text-zinc-300/90">
          Crypto is the future, don't you think so?
        </article>
        <button
          class="capitalize bg-zinc-500/50 rounded font-semibold w-max text-lg py-2 px-4 mt-2"
        >
          see details
        </button>
      </div>
    </div>
    <div
      class="h-full w-full absolute top-0 pl-8 bg-gradient-to-t pt-8 text-2xl font-bold from-zinc-800 via-transparent to-transparent z-50 text-zinc-300"
    >
      Home
    </div>
  </div>
</template>
<script setup>
import { computed} from "vue";
import { useStore } from "vuex";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/effect-fade';

const modules = [Autoplay, EffectFade]
const store = useStore();
let slides = computed(() => store.state.slides);

</script>
