<template>
  <div class="grid grid-cols-7 h-full gap-3">
    <!-- app and download button -->
    <div class="pt-2 pb-3 col-span-2">
      <transition name="fade" mode="out-in">
        <AppOverview :key="$route.params.id"></AppOverview>
      </transition>
    </div>

    <!-- details and description -->
    <div class="col-span-5 mt-2 overflow-y-auto">
      <div
        class="rounded h-full grid grid-cols-1 pr-3 gap-3"
      >
        <AppDetails></AppDetails>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppOverview from "../components/appPage/AppOverview.vue";
import AppDetails from "../components/appPage/AppDetails.vue";
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
