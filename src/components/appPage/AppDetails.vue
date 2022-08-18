<template>
  <!-- screenshots -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">Screenshots</h3>
      <ChevronRightIcon class="h-6"></ChevronRightIcon>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="flex justify-between items-center p-4 pr-0">
      <swiper :slides-per-view="'auto'" :space-between="20" class="pr-4">
        <swiper-slide class="rounded-md w-3/5">
          <img
            src="../../assets/img/slides/img4.jpg"
            class="bg-cover rounded-md object-cover aspect-[5/3]"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="rounded-md w-3/5">
          <img
            src="../../assets/img/slides/img3.jpg"
            class="bg-cover rounded-md object-cover aspect-[5/3]"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <!-- Description -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">Description</h3>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4 pr-6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio,
        nihil magni corrupti sint velit placeat commodi alias. Eum iusto tenetur
        rerum nisi magni nihil quibusdam est ducimus assumenda reiciendis.
      </p>
      <p class="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio,
        nihil magni corrupti sint velit placeat commodi alias.
      </p>
    </div>
  </div>

  <!-- Ratings and reviews -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">Ratings and reviews</h3>
      <ChevronRightIcon class="h-6"></ChevronRightIcon>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4">
      <div class="flex items-center gap-3">
        <div class="flex flex-col items-center">
          <h1 class="text-8xl font-semibold">3.6</h1>
          <div class="text-xs text-zinc-500 font-semibold">12 RATINGS</div>
        </div>
        <div class="flex flex-col mt-2">
          <div class="flex items-center justify-center" v-for="i in 5">
            <span style="font-size: 10px" class="text-zinc-500 mr-1">{{
              6 - i
            }}</span
            ><star-icon class="h-3 text-yellow-600"></star-icon>
            <div class="h-1 w-20 bg-zinc-700/50 rounded-lg">
              <div class="h-1 w-10 bg-yellow-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="underline text-blue-400 text-sm mt-4">See all</div>
    </div>
  </div>

  <!-- Features -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">Features</h3>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4 pr-6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio,
        nihil magni corrupti sint velit placeat commodi alias. Eum iusto tenetur
        rerum nisi magni nihil quibusdam est ducimus assumenda reiciendis.
      </p>
      <p class="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio,
        nihil magni corrupti sint velit placeat commodi alias.
      </p>
      <p class="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio,
        nihil magni corrupti sint velit placeat commodi alias. rerum nisi magni
        nihil quibusdam est ducimus assumenda.
      </p>
      <div class="underline text-blue-400 text-sm mt-4">Show more</div>
    </div>
  </div>

  <!-- What's new in this version -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">What's new in this version</h3>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4 pr-6">
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.placeat rem odit repudiandae.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis
           velit sapiente molestias.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </ul>
      <div class="underline text-blue-400 text-sm mt-4">Show more</div>
    </div>
  </div>

  <!-- System requirements -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">System requirements</h3>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4 pr-6">
      <p class="flex">
        <BadgeCheckIcon class="h-6 text-green mr-2"></BadgeCheckIcon>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
      </p>
    </div>
  </div>

  <!-- Additional information -->
  <div class="bg-zinc-800 rounded">
    <div class="flex justify-between items-center px-4 pt-3 pb-2">
      <h3 class="font-semibold">Additional information</h3>
    </div>
    <hr class="border-zinc-500/50" />
    <div class="font-thin p-4 grid grid-cols-3 gap-5 justify-between text-sm">
      <div class="flex gap-3" v-for="info in infos">
        <component :is="info.icon" class="h-6"></component>
        <p>
            <h3 class="font-semibold">{{info.title}}</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>

<!-- suggested apps -->
  <section class="mt-4 pb-3">
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl">People also view</h1>
        <div class="text-xs capitalize text-blue-400/75 underline">see all</div>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <router-link
          class="rounded bg-zinc-800 hover:bg-zinc-800/75 p-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          v-for="i in 4"
          :to="'/apps/' + (i - 1)"
        >
          <div class="flex flex-col w-full gap-6 justify-start">
            <img
              :src="apps[i - 1].img"
              class="aspect-square object-cover rounded"
              alt=""
            />

            <ul class="font-semibold">
              <li>{{ apps[i - 1].title }}</li>
              <li class="text-xs text-zinc-400 capitalize">Social</li>
              <li class="flex gap-1 pt-2">
                <StarIcon v-for="a in 5" class="h-4"></StarIcon>
              </li>
            </ul>
            <div class="text-sm capitalize">free</div>
          </div>
        </router-link>
      </div>
    </section>
</template>
<script setup>
import {
  ChevronRightIcon,
  StarIcon,
  BadgeCheckIcon,
} from "@heroicons/vue/solid";
import { TerminalIcon, BookmarkIcon,ShieldCheckIcon, ChatAlt2Icon, ClipboardListIcon, FlagIcon, ExclamationIcon } from "@heroicons/vue/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const apps = computed(() => store.state.apps);

const infos=[
    {icon:TerminalIcon, title:'Developed by'},
    {icon:TerminalIcon, title:'Published by'},
    {icon:BookmarkIcon, title:'Category'},
    {icon:ShieldCheckIcon, title:'This app can'},
    {icon:ChatAlt2Icon, title:'Supported languages'},
    {icon:TerminalIcon, title:'Publisher info'},
    {icon:ClipboardListIcon, title:'Additional terms'},
    {icon:FlagIcon, title:'Report this product'},
    {icon:ExclamationIcon, title:'Developed by'},
]
</script>
